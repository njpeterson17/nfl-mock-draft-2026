const fs=require('fs'),vm=require('vm'),assert=require('assert');
class Node{
 constructor(tag='div',text=''){this.tag=tag;this._text=text;this.children=[];this.attrs={};this.events={};this.style={};this.value='';this.hidden=false;this.open=false;this.isConnected=true;this.classList={toggle(){}}}
 set textContent(v){this._text=String(v??'');this.children=[]}get textContent(){return this._text+this.children.map(n=>typeof n==='string'?n:n.textContent).join('')}
 append(...nodes){this.children.push(...nodes)}replaceChildren(...nodes){this._text='';this.children=nodes}setAttribute(k,v){this.attrs[k]=v}addEventListener(k,v){this.events[k]=v}add(n){this.append(n)}showModal(){this.open=true}close(){this.open=false}matches(){return false}contains(){return false}scrollIntoView(){}remove(){}getBoundingClientRect(){return {left:100,right:250,top:100}}}
const nodes={},get=id=>nodes[id]??=new Node();get('group').value='top';get('sort').value='source';const document={getElementById:get,createElement:tag=>new Node(tag),createTextNode:t=>t,addEventListener(){}};
const ctx={document,window:{addEventListener(){}},localStorage:{getItem:()=>null,setItem(){}},Date,Set,Map,Option:function(t,v){const n=new Node('option',t);n.value=v;return n},setTimeout:()=>1,clearTimeout(){},setInterval(){},fetch:()=>new Promise(()=>{}),AbortSignal:{timeout:()=>null},innerWidth:1200,innerHeight:800};
vm.createContext(ctx);const root=__dirname+'/';const html=fs.readFileSync(root+'index.html','utf8');vm.runInContext(fs.readFileSync(root+'features.js','utf8'),ctx);vm.runInContext(fs.readFileSync(root+'mock.js','utf8'),ctx);vm.runInContext(html.split('<script>')[1].split('</script>')[0],ctx);
const data=JSON.parse(fs.readFileSync(root+'players.json'));ctx.apply(data);
// Mock draft: state validation, drafting, simulator boards, stopping at my pick, rounds and backups.
const run=code=>vm.runInContext(code,ctx),P=data.players;
assert(run('validMock(blankMock())'));assert.equal(run("validMock({...blankMock(),order:[]})"),null);assert.equal(run("validMock({...blankMock(),order:Array(60).fill('XXX')})"),null);
assert.equal(run("validMock({...blankMock(),picks:[{id:'a',name:'A',position:'G',school:'S',rank:1},{id:'a',name:'A',position:'G',school:'S',rank:1}]})"),null);
ctx.initMock();ctx.setView('mock');assert.equal(get('mockView').hidden,false);assert.equal(get('boardView').hidden,true);
assert.equal(get('pickList').children.length,30);assert.equal(get('availList').children.length,125);
assert.equal(run('simPick(()=>0)').id,P[0].id);assert.equal(run('draftPlayer(players[0])'),false);
assert.equal(run('simPick(()=>0.9)').id,P[3].id,'variance takes third-best available');
run("personal[players[49].id]={rank:1};mock.style='mine'");assert.equal(run('simPick(()=>0)').id,P[49].id,'my rankings board');
run("mock.style='consensus';mock.order=[...TEAMS.map(t=>t[0]),...TEAMS.map(t=>t[0])];mock.myTeam=mock.order[7]");
run("simUntil(i=>mock.order[i]===mock.myTeam,()=>0)");assert.equal(run('mock.picks.length'),7);assert.equal(run('onClock()'),7);
ctx.renderMock();assert(get('mockProgress').textContent.includes('Pick 8 of 30'));assert(get('mockProgress').textContent.includes('Denver Nuggets'));
assert.equal(get('availList').children.length,125-7);
run("simUntil(()=>false,()=>0)");assert.equal(run('onClock()'),null);assert.equal(run('mock.picks.length'),30);assert.equal(run('simPick()'),null);
get('mockRounds').value='2';get('mockRounds').onchange();assert.equal(run('totalPicks()'),60);run("simUntil(()=>false,()=>0)");assert.equal(run('mock.picks.length'),60);
get('mockRounds').value='1';get('mockRounds').onchange();assert.equal(run('mock.rounds'),2,'cannot drop a round with its picks made');
assert.deepEqual(run('pickValue({rank:1},9)'),['Value +9','value-good']);assert.deepEqual(run('pickValue({rank:20},0)'),['Reach 19','caution']);assert.equal(run('pickValue({rank:5},4)'),null);
assert(run('mockText()').split('\n')[1].startsWith('1. Atlanta Hawks: '+P[0].name));
get('undoPick').onclick();assert.equal(run('mock.picks.length'),59);
console.log('PASS: mock validation, drafting, variance, my-rankings board, sim to my pick, full sims, rounds, value badges, results text and undo.');
(async()=>{const saved=run('JSON.stringify(mock)');
 get('file').files=[{size:100,text:async()=>JSON.stringify({version:1,year:2027,sport:'nba',personal:{},mock:{...JSON.parse(saved),picks:[]}})}];await get('file').onchange();assert.equal(run('mock.picks.length'),0);
 const before=run('mock.rounds');get('file').files=[{size:100,text:async()=>JSON.stringify({version:1,year:2027,sport:'nba',personal:{},mock:{version:1,rounds:9}})}];await get('file').onchange();assert.equal(run('mock.rounds'),before);assert(get('message').textContent.startsWith('Could not restore'));
 console.log('PASS: mock draft restores from backups; an invalid mock rejects the backup.');})().catch(e=>{console.error(e);process.exitCode=1});
