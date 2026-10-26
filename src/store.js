const fs=require('node:fs'),path=require('node:path'),file=path.join(__dirname,'..','data','plans.json');
function read(){try{return JSON.parse(fs.readFileSync(file,'utf8'))}catch(e){if(e.code==='ENOENT')return[];throw e}}
function write(x){fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,JSON.stringify(x,null,2))}
const list=()=>read().sort((a,b)=>b.createdAt.localeCompare(a.createdAt)),get=id=>read().find(x=>x.id===id)||null;
function save(x){const a=read();a.unshift(x);write(a);return x}function remove(id){const a=read(),b=a.filter(x=>x.id!==id);if(a.length===b.length)return false;write(b);return true}
function metrics(){const a=read(),t=a.flatMap(x=>x.tasks||[]);return{totalPlans:a.length,averagePriority:a.length?Math.round(a.reduce((n,x)=>n+x.priorityScore,0)/a.length):0,totalStories:a.reduce((n,x)=>n+x.stories.length,0),estimatedPoints:t.reduce((n,x)=>n+x.effort,0),recentPlans:a.slice(0,6).map(({id,title,createdAt,priorityScore})=>({id,title,createdAt,priorityScore}))}}
module.exports={list,get,save,remove,metrics};