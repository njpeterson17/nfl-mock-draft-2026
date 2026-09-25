// Mock draft: sequential picks against a user-set team order. Saved separately from personal evaluations.
const mockKey='draftroom-nba-2027-mock-v1',PICKS_PER_ROUND=30;
const TEAMS=[['ATL','Atlanta Hawks','atl'],['BOS','Boston Celtics','bos'],['BKN','Brooklyn Nets','bkn'],['CHA','Charlotte Hornets','cha'],['CHI','Chicago Bulls','chi'],['CLE','Cleveland Cavaliers','cle'],['DAL','Dallas Mavericks','dal'],['DEN','Denver Nuggets','den'],['DET','Detroit Pistons','det'],['GSW','Golden State Warriors','gs'],['HOU','Houston Rockets','hou'],['IND','Indiana Pacers','ind'],['LAC','LA Clippers','lac'],['LAL','Los Angeles Lakers','lal'],['MEM','Memphis Grizzlies','mem'],['MIA','Miami Heat','mia'],['MIL','Milwaukee Bucks','mil'],['MIN','Minnesota Timberwolves','min'],['NOP','New Orleans Pelicans','no'],['NYK','New York Knicks','ny'],['OKC','Oklahoma City Thunder','okc'],['ORL','Orlando Magic','orl'],['PHI','Philadelphia 76ers','phi'],['PHX','Phoenix Suns','phx'],['POR','Portland Trail Blazers','por'],['SAC','Sacramento Kings','sac'],['SAS','San Antonio Spurs','sa'],['TOR','Toronto Raptors','tor'],['UTA','Utah Jazz','utah'],['WAS','Washington Wizards','wsh']];
const teamCodes=new Set(TEAMS.map(t=>t[0]));
let mock=blankMock(),resetArmed=null;
function blankMock(){return {version:1,rounds:1,order:Array(60).fill(''),picks:[],myTeam:'',style:'consensus',variance:true}}
// Used for localStorage and backup restores; returns a clean copy or null.
function validMock(v){
 if(!v||typeof v!=='object'||v.version!==1||![1,2].includes(v.rounds))return null;
 if(!Array.isArray(v.order)||v.order.length!==60||!v.order.every(t=>t===''||teamCodes.has(t)))return null;
 if(!Array.isArray(v.picks)||v.picks.length>v.rounds*PICKS_PER_ROUND)return null;
 const ids=new Set();
 for(const p of v.picks){
  if(!p||typeof p!=='object'||typeof p.id!=='string'||!/^[a-z0-9-]+$/.test(p.id)||ids.has(p.id))return null;ids.add(p.id);
  for(const k of ['name','position','school'])if(typeof p[k]!=='string'||p[k].length>100)return null;
  if(p.rank!=null&&(!Number.isInteger(p.rank)||p.rank<1||p.rank>999))return null;
 }
 if(v.myTeam!==''&&!teamCodes.has(v.myTeam))return null;
 if(!['consensus','mine'].includes(v.style)||typeof v.variance!=='boolean')return null;
 return {version:1,rounds:v.rounds,order:[...v.order],picks:v.picks.map(p=>({id:p.id,name:p.name,position:p.position,school:p.school,rank:p.rank??null})),myTeam:v.myTeam,style:v.style,variance:v.variance};
}
function saveMock(){try{localStorage.setItem(mockKey,JSON.stringify(mock))}catch{$('mockStatus').textContent='Browser storage is unavailable. Copy your results before closing.'}}
function totalPicks(){return mock.rounds*PICKS_PER_ROUND}
function onClock(){return mock.picks.length<totalPicks()?mock.picks.length:null}
function teamName(i){return TEAMS.find(t=>t[0]===mock.order[i])?.[1]||'Team TBD'}
function teamLogo(code){const t=TEAMS.find(t=>t[0]===code);return mediaImage(t?'https://a.espncdn.com/i/teamlogos/nba/500/'+t[2]+'.png':null,(t?t[1]:'Unassigned team')+' logo','team-logo',code||'?')}
function available(){const taken=new Set(mock.picks.map(p=>p.id));return players.filter(p=>!taken.has(p.id))}
// The board the simulator drafts from. Unranked players follow ranked ones in consensus order.
function simBoard(list){return mock.style==='mine'?[...list].sort((a,b)=>(own(a.id).rank||9999)-(own(b.id).rank||9999)||a.rank-b.rank):[...list].sort((a,b)=>a.rank-b.rank)}
function draftPlayer(p){if(onClock()===null||mock.picks.some(x=>x.id===p.id))return false;mock.picks.push({id:p.id,name:p.name,position:p.position,school:p.school,rank:p.rank});saveMock();return true}
function simPick(rand=Math.random){
 if(onClock()===null)return null;const board=simBoard(available());if(!board.length)return null;
 // Variance takes one of the top three at 60/25/15% odds so repeated sims differ, as real drafts do.
 let choice=0;if(mock.variance){const r=rand();choice=Math.min(r<.6?0:r<.85?1:2,board.length-1)}
 draftPlayer(board[choice]);return board[choice];
}
function simUntil(stop,rand){let made=0;while(onClock()!==null&&!stop(onClock())&&simPick(rand))made++;return made}
function pickValue(pick,i){if(!pick.rank)return null;const gap=i+1-pick.rank;return gap>=8?['Value +'+gap,'value-good']:gap<=-12?['Reach '+-gap,'caution']:null}
function mockText(){return 'Draftroom 2027 NBA mock draft\n'+mock.picks.map((p,i)=>`${i+1}. ${teamName(i)}: ${p.name} (${p.position}, ${p.school})`).join('\n')}
function mockMessage(text){$('mockStatus').textContent=text}
function afterSim(made){const i=onClock();mockMessage(i===null?'Draft complete.':mock.myTeam&&mock.order[i]===mock.myTeam?`You're on the clock at pick ${i+1}.`:made?`${made} pick${made>1?'s':''} simulated.`:'');renderMock();scrollToClock()}
// Keep the pick on the clock visible inside the scrolling draft-order panel (desktop only; phones don't scroll the panel).
function scrollToClock(){const slot=$('pickList').querySelector?.('.on-clock'),panel=$('pickList').parentElement;if(slot&&panel)panel.scrollTop+=slot.getBoundingClientRect().top-panel.getBoundingClientRect().top-70}
function setView(view){
 const mockOn=view==='mock';$('boardView').hidden=mockOn;$('mockView').hidden=!mockOn;
 $('tabBoard').setAttribute('aria-selected',!mockOn);$('tabMock').setAttribute('aria-selected',mockOn);$('tabBoard').tabIndex=mockOn?-1:0;$('tabMock').tabIndex=mockOn?0:-1;
 if(globalThis.history&&globalThis.location)history.replaceState(null,'',mockOn?'#mock':location.pathname+location.search);
 hidePreview();if(mockOn)renderMock();
}
function playerBlock(p,live){
 // p is a live board entry or a saved pick; drafted players may since have left the refreshed top 125.
 const box=el('div','','mock-player'),name=el('button','','player');name.append(portrait(live||{...p,photo:null}));const bio=el('span',p.name);bio.append(el('small',p.position+' · '+p.school+(p.rank?' · Consensus #'+p.rank:'')));name.append(bio);
 if(live){name.onclick=()=>openProfile(live);bindPreview(name,live)}else name.disabled=true;box.append(name);return box;
}
function renderMock(){
 if($('mockView').hidden)return;hidePreview();
 const focused=document.activeElement,focusKey=focused?.getAttribute?.('data-focus'),draftButtons=[...($('availList').querySelectorAll?.('button.draft')||[])],draftIndex=draftButtons.indexOf(focused);
 $('mockRounds').value=String(mock.rounds);$('mockTeam').value=mock.myTeam;$('mockStyle').value=mock.style;$('mockVariance').checked=mock.variance;
 const clock=onClock(),mine=mock.myTeam&&mock.order.slice(clock??totalPicks(),totalPicks()).includes(mock.myTeam);
 $('simNext').disabled=$('simRest').disabled=clock===null||!available().length;$('simToMine').disabled=!mine||mock.order[clock]===mock.myTeam;$('undoPick').disabled=$('resetMock').disabled=!mock.picks.length;$('copyMock').disabled=!mock.picks.length;
 $('mockProgress').textContent=clock===null?'Draft complete · '+mock.picks.length+' picks':'Pick '+(clock+1)+' of '+totalPicks()+' · '+teamName(clock)+' on the clock';
 const list=$('pickList');list.replaceChildren();
 for(let i=0;i<totalPicks();i++){
  if(i%PICKS_PER_ROUND===0&&mock.rounds>1)list.append(el('li','Round '+(i/PICKS_PER_ROUND+1),'round-heading'));
  const li=el('li','','pick-slot'+(i===clock?' on-clock':'')+(mock.myTeam&&mock.order[i]===mock.myTeam?' mine':'')),head=el('div','','pick-head');
  head.append(el('span',String(i+1),'pick-num'),teamLogo(mock.order[i]));
  const select=el('select');select.setAttribute('aria-label','Team for pick '+(i+1));select.setAttribute('data-focus','slot:'+i);select.append(new Option('Team TBD',''));for(const t of TEAMS)select.append(new Option(t[1],t[0]));select.value=mock.order[i];
  select.onchange=()=>{mock.order[i]=select.value;saveMock();renderMock()};head.append(select);li.append(head);
  const pick=mock.picks[i];
  if(pick){li.append(playerBlock(pick,players.find(p=>p.id===pick.id)));const value=pickValue(pick,i);if(value)li.append(el('span',value[0],'value-badge '+value[1]))}
  else li.append(el('span',i===clock?'On the clock':'—',i===clock?'clock-label':'muted'));
  list.append(li);
 }
 const position=$('mockPosition').value;$('mockPosition').replaceChildren(new Option('All positions',''));[...new Set(players.map(p=>p.position))].sort().forEach(p=>$('mockPosition').add(new Option(p,p)));$('mockPosition').value=position;
 const query=$('mockSearch').value.toLowerCase(),pool=simBoard(available()),shown=pool.filter(p=>(p.name+' '+p.school).toLowerCase().includes(query)&&(!$('mockPosition').value||p.position===$('mockPosition').value)),avail=$('availList');
 $('availCount').textContent=pool.length+' left'+(shown.length<pool.length?' · '+shown.length+' shown':'');avail.replaceChildren();
 for(const p of shown){
  const li=el('li','','avail-row'),data=own(p.id);li.append(el('span','#'+p.rank,'rank'),playerBlock(p,p));
  const meta=el('div','','avail-meta');if(data.rank)meta.append(el('small','My #'+data.rank));if(data.tier)meta.append(el('small','Tier '+data.tier));li.append(meta);
  const button=el('button','Draft','draft primary');button.disabled=clock===null;button.setAttribute('aria-label',clock===null?'Draft complete':'Draft '+p.name+' at pick '+(clock+1));
  button.onclick=()=>{if(draftPlayer(p)){mockMessage(`${teamName(mock.picks.length-1)} select ${p.name} at pick ${mock.picks.length}.`);renderMock();scrollToClock()}};li.append(button);avail.append(li);
 }
 if(!shown.length)avail.append(el('li',pool.length?'No available players match.':'Every prospect has been drafted.','empty'));
 // Drafting removes the focused button; move focus to the button now in that slot.
 if(focusKey?.startsWith('slot:'))list.querySelector?.(`[data-focus="${focusKey}"]`)?.focus({preventScroll:true});
 if(draftIndex>=0){const next=[...(avail.querySelectorAll?.('button.draft')||[])];next[Math.min(draftIndex,next.length-1)]?.focus({preventScroll:true})}
}
function shuffle(list,rand=Math.random){const a=[...list];for(let i=a.length-1;i>0;i--){const j=Math.floor(rand()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function initMock(){
 try{mock=validMock(JSON.parse(localStorage.getItem(mockKey)||'null'))||blankMock()}catch{mock=blankMock()}
 for(const t of TEAMS)$('mockTeam').add(new Option(t[1],t[0]));
 $('tabBoard').onclick=()=>setView('board');$('tabMock').onclick=()=>setView('mock');
 for(const id of ['tabBoard','tabMock'])$(id).addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();const next=id==='tabBoard'?'tabMock':'tabBoard';setView(next==='tabMock'?'mock':'board');$(next).focus()}});
 $('mockRounds').onchange=()=>{const rounds=Number($('mockRounds').value);if(mock.picks.length>rounds*PICKS_PER_ROUND){mockMessage('Undo second-round picks before switching to one round.');$('mockRounds').value=String(mock.rounds);return}mock.rounds=rounds;saveMock();mockMessage('');renderMock()};
 $('mockTeam').onchange=()=>{mock.myTeam=$('mockTeam').value;saveMock();renderMock()};
 $('mockStyle').onchange=()=>{mock.style=$('mockStyle').value;saveMock();renderMock()};
 $('mockVariance').onchange=()=>{mock.variance=$('mockVariance').checked;saveMock()};
 $('simNext').onclick=()=>afterSim(simPick()?1:0);
 $('simToMine').onclick=()=>afterSim(simUntil(i=>mock.order[i]===mock.myTeam));
 $('simRest').onclick=()=>afterSim(simUntil(()=>false));
 $('undoPick').onclick=()=>{const pick=mock.picks.pop();saveMock();mockMessage(pick?'Undid pick '+(mock.picks.length+1)+': '+pick.name+'.':'');renderMock()};
 // Two-step reset instead of a blocking confirm dialog.
 $('resetMock').onclick=()=>{if(resetArmed){clearTimeout(resetArmed);resetArmed=null;$('resetMock').textContent='Reset picks';mock.picks=[];saveMock();mockMessage('Picks cleared. Team order kept.');renderMock();return}$('resetMock').textContent='Click again to reset';resetArmed=setTimeout(()=>{resetArmed=null;$('resetMock').textContent='Reset picks'},4000)};
 $('shuffleOrder').onclick=()=>{if(mock.picks.length){mockMessage('Reset picks before shuffling the team order.');return}const order=shuffle(TEAMS.map(t=>t[0]));mock.order=[...order,...order];saveMock();mockMessage('Random order set. Round 2 repeats the round 1 order; edit any slot to model trades.');renderMock()};
 $('copyMock').onclick=async()=>{const text=mockText();try{await navigator.clipboard.writeText(text);mockMessage('Results copied to clipboard.');$('mockExport').hidden=true}catch{$('mockExport').value=text;$('mockExport').hidden=false;$('mockExport').select?.();mockMessage('Clipboard unavailable; copy the results below.')}};
 $('mockSearch').addEventListener('input',renderMock);$('mockPosition').addEventListener('input',renderMock);
 if(globalThis.location?.hash==='#mock')setView('mock');
}
