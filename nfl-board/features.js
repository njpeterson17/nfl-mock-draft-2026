let compareIds=new Set();
function sourceAge(source,now=new Date()){
 if(!source.editorial_date)return null;
 const date=new Date(source.editorial_date+'T00:00:00Z');
 const today=Date.UTC(now.getUTCFullYear(),now.getUTCMonth(),now.getUTCDate());
 if(!Number.isFinite(date.getTime())||date.getTime()>today)return null;
 return Math.floor((today-date.getTime())/86400000);
}
function freshness(source){const age=sourceAge(source);return age===null?'Date unknown':age>=30?'Older board':age>=14?'Aging board':'Recent board'}
function rankSpread(player){const ranks=Object.values(player.source_ranks||{}).filter(Number.isFinite);return ranks.length<2?null:Math.max(...ranks)-Math.min(...ranks)}
function disagreement(player){const count=Object.keys(player.source_ranks||{}).length,spread=rankSpread(player);return count<3?'Limited coverage':spread>=40?'Wide disagreement':spread>=20?'Some disagreement':'Close agreement'}
function sourceLink(source,label=source.name){const a=el('a',label);a.href=source.url;a.target='_blank';a.rel='noopener';return a}
function renderFreshness(){
 const root=$('sources');root.replaceChildren();let aging=0,failed=0;
 for(const source of sources){const age=sourceAge(source),state=freshness(source);if(age!==null&&age>=14)aging++;if(source.status!=='current')failed++;
  let card=el('article','','source-card');card.append(sourceLink(source));
  card.append(el('p',state+(age===null?'':' · '+age+' days old'),'freshness-badge '+(age===null||age>=14?'caution':'')));
  card.append(el('p',(source.editorial_date_kind||'Editorial date')+': '+(source.editorial_date||'Not supplied'),'report-attribution'));
  card.append(el('p','Last check: '+(source.checked_at?new Date(source.checked_at).toLocaleString():'Unknown'),'report-attribution'));
  card.append(el('p','Last successful fetch: '+(source.fetched?new Date(source.fetched).toLocaleString():'Never'),'report-attribution'));
  card.append(el('p',source.depth+' players · '+(source.status==='current'?'Fetch succeeded':source.status==='stale'?'Refresh failed; cached rankings retained':'Unavailable; excluded'),source.status==='current'?'report-attribution':'freshness-badge caution'));
  root.append(card);
 }
 $('freshnessSummary').textContent=sources.length+' sources · '+aging+' boards 14+ days old'+(failed?' · '+failed+' feed issues':'');
}
function toggleCompare(id){
 if(compareIds.has(id))compareIds.delete(id);
 else if(compareIds.size<4)compareIds.add(id);
 else{$('message').textContent='You can compare up to four players. Remove one before adding another.';return false}
 $('message').textContent='';render();if($('comparison').open)renderComparison();return true;
}
function compareControl(p){const button=el('button',compareIds.has(p.id)?'✓ Selected':'＋ Compare');button.setAttribute('aria-label','Compare '+p.name);button.setAttribute('aria-pressed',compareIds.has(p.id));button.className='compare-select';button.onclick=()=>toggleCompare(p.id);return button}
function renderCompareTray(){
 // Keep selections while filtering, but remove players that actually leave the board.
 compareIds=new Set([...compareIds].filter(id=>players.some(p=>p.id===id)));
 const root=$('compareSelection');root.replaceChildren();
 for(const id of compareIds){const p=players.find(p=>p.id===id),button=el('button',p.name+' ×','compare-chip');button.setAttribute('aria-label','Remove '+p.name+' from comparison');button.onclick=()=>toggleCompare(id);root.append(button)}
 $('compareCount').textContent=compareIds.size+'/4 selected';$('openCompare').disabled=compareIds.size<2;
 $('compareTray').hidden=compareIds.size===0;
}
function openComparison(){if(compareIds.size<2)return;hidePreview();renderComparison();$('comparison').showModal();$('comparison').scrollTop=0}
function renderComparison(){
 const selectedPlayers=[...compareIds].map(id=>players.find(p=>p.id===id)).filter(Boolean),root=$('comparisonContent');root.replaceChildren();
 if(selectedPlayers.length<2){root.append(el('p','Select at least two players on the board to compare.'));return}
 let table=el('table','','comparison-table'),thead=el('thead'),tr=el('tr');tr.append(el('th','Attribute'));
 for(const p of selectedPlayers){let th=el('th');th.scope='col';let person=el('div','','comparison-person');person.append(portrait(p),schoolLogo(p),el('strong',p.name));th.append(person);const remove=el('button','Remove');remove.onclick=()=>toggleCompare(p.id);th.append(remove);tr.append(th)}thead.append(tr);table.append(thead);let body=el('tbody');
 function row(label,make){let tr=el('tr'),th=el('th',label);th.scope='row';tr.append(th);for(const p of selectedPlayers){let td=el('td'),value=make(p);td.append(typeof value==='string'?document.createTextNode(value):value);tr.append(td)}body.append(tr)}
 row('School / position',p=>p.school+' · '+p.position);
 row('Height / weight',p=>{let box=el('div',measurements(p));if(p.measurement_source){box.append(el('br'),sourceLink({url:p.measurement_source,name:p.measurement_source_name||'Listed source'}))}return box});
 row('Consensus / my rank',p=>'#'+p.rank+' / '+(own(p.id).rank?'#'+own(p.id).rank:'Unranked'));
 row('Disagreement',p=>disagreement(p)+(rankSpread(p)===null?'':' · '+rankSpread(p)+' places'));
 row('Source coverage',p=>Object.keys(p.source_ranks||{}).length+' of '+sources.filter(s=>s.depth>0).length);
 for(const source of sources)row(source.name+' · '+freshness(source),p=>sourceLink(source,p.source_ranks?.[source.id]?'#'+p.source_ranks[source.id]:(source.status==='unavailable'?'Source unavailable':'Not listed')));
 row('Reported strengths',p=>p.scouting?.strengths||'Not reviewed');
 row('Weaknesses / questions',p=>p.scouting?.weaknesses||'Not reviewed');
 row('Scouting source',p=>{if(!p.scouting)return 'Not reviewed';let box=el('div');box.append(sourceLink(p.scouting.source),el('p','Checked '+new Date(p.scouting.reviewed_at).toLocaleDateString(),'report-attribution'));return box});
 row('My scouting tier',p=>own(p.id).tier?'Tier '+own(p.id).tier:'Unassigned');
 row('Film queue',p=>own(p.id).film?'Watch more film':'Not flagged');
 row('My notes',p=>own(p.id).notes||'No notes yet');
 table.append(body);root.append(table);
}
function initFeatures(){
 $('tierFilter').addEventListener('input',render);$('filmFilter').onclick=()=>{filmOnly=!filmOnly;$('filmFilter').setAttribute('aria-pressed',filmOnly);render()};
 $('openCompare').onclick=openComparison;$('closeComparison').onclick=()=>$('comparison').close();
 $('clearCompare').onclick=()=>{compareIds.clear();render();if($('comparison').open)renderComparison()};
 $('showFreshness').onclick=()=>{$('freshnessDetails').open=true;$('freshnessDetails').scrollIntoView({behavior:'smooth',block:'start'})};
 $('disagreement').addEventListener('input',render);
}

let filmOnly=false;
function matchesEvaluation(p){const tier=$('tierFilter').value,entry=own(p.id);return (!filmOnly||entry.film)&&(!tier||(tier==='unassigned'?!entry.tier:entry.tier===tier))}
function renderHistory(p){
 const root=$('rankHistory');root.replaceChildren();root.append(el('h3','Observed ranking history'));
 const entries=p.history||[];
 root.append(el('p','Snapshots start when this board records data. Dates are observation times, not publication dates. Movement compares the last two distinct board snapshots; changes in available sources suppress the movement arrow.','report-attribution'));
 if(!entries.length){root.append(el('p','No saved snapshot yet. Refresh from the local server to begin.'));return}
 if(entries.length===1)root.append(el('p','Baseline recorded. A trend will appear after the rankings change.'));
 const wrap=el('div','','history-scroll'),table=el('table'),head=el('thead'),header=el('tr');
 header.append(el('th','Observed'),el('th','Consensus'),el('th','Source ranks'));head.append(header);table.append(head);const body=el('tbody');
 for(const entry of [...entries].reverse()){let row=el('tr');row.append(el('td',new Date(entry.recorded_at).toLocaleString()),el('td','#'+entry.rank),el('td',Object.entries(entry.source_ranks||{}).map(([id,rank])=>(sources.find(s=>s.id===id)?.name||id)+': #'+rank).join(' · ')));body.append(row)}
 table.append(body);wrap.append(table);root.append(wrap);
}
