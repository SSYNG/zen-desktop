import {centerline,fishPose} from '../web/renderer.js';
import test from 'node:test';import assert from 'node:assert/strict';import {PondSimulation,angleDelta,fishMouth} from '../web/simulation.js';
const config={count:16,speed:.8,species:['kohaku','yamabuki','sanke']};
test('shortest turn across angle seam',()=>assert.ok(Math.abs(angleDelta(Math.PI-.1,-Math.PI+.1)-.2)<1e-9));
test('food attracts nearby fish, consumed once, then fish disperse',()=>{const s=new PondSimulation(1000,700,{...config,count:6},()=>.5);s.fish.forEach((f,i)=>{f.x=350+i*17;f.y=320+i*13;f.angle=0;});s.feed(500,350);for(let i=0;i<600;i++)s.update(1/30);assert.equal(s.food.length,0);assert.equal(s.eaten,1);assert.ok(s.fish.every(f=>f.burst<.1));assert.ok(s.fish.some(f=>Math.hypot(f.x-500,f.y-350)>140));});
test('far fish do not sprint toward food',()=>{const s=new PondSimulation(1500,1000,{...config,count:6},()=>.5);s.fish.forEach(f=>{f.x=900;f.y=600;});s.feed(200,200);s.update(.03);assert.ok(s.fish.every(f=>f.burst===0));});
test('simulation remains finite and bounded for ten minutes',()=>{const s=new PondSimulation(1280,720,config);for(let i=0;i<18000;i++){if(i%150===0)s.feed(100+(i%1000),300);s.update(1/30);}for(const f of s.fish){assert.ok(Number.isFinite(f.angle));assert.ok(f.x>=0&&f.x<=1280&&f.y>=0&&f.y<=720);}assert.ok(s.food.length<=24);});
test('configure species and count; resize keeps relative position',()=>{const s=new PondSimulation(1000,700,config,()=>.5);s.configure({...config,count:6,species:['kohaku','sanke']});assert.equal(s.fish.filter(f=>f.lifecycle!=='exiting').length,6);assert.deepEqual([...new Set(s.fish.filter(f=>f.lifecycle!=='exiting').map(f=>f.species))],['kohaku','sanke']);s.resize(500,350);assert.equal(s.fish[0].x,250);assert.equal(s.fish[0].y,175);});
test('unreachable food expires and food cap prevents unbounded work',()=>{const s=new PondSimulation(1000,700,{...config,count:0});for(let i=0;i<40;i++)s.feed(20,20);assert.equal(s.food.length,24);for(let i=0;i<800;i++)s.update(1/30);assert.equal(s.food.length,0);});
test('idle fish dart, curl, make ripples, and settle without feeding',()=>{const s=new PondSimulation(1400,1000,{...config,count:1},()=>.5),f=s.fish[0];f.x=600;f.y=500;f.angle=f.wander=0;f.nextDart=0;let fastest=0,bend=0,kick=false;for(let i=0;i<45;i++){s.update(1/30);fastest=Math.max(fastest,f.velocity);bend=Math.max(bend,Math.abs(f.curvature));kick=kick||f.kickAge>=0;}assert.ok(fastest>f.speed*config.speed*3);assert.ok(bend>.12);assert.ok(kick);assert.ok(s.ripples.length>=2);assert.equal(s.food.length,0);for(let i=0;i<150;i++)s.update(1/30);assert.equal(f.dartAge,-1);assert.ok(f.velocity<f.speed*config.speed*1.5);});
test('baseline speed scales individual velocity without making all fish equal',()=>{let seed=123;const random=()=>((seed=(seed*1664525+1013904223)>>>0)/4294967296);const s=new PondSimulation(1400,1000,config,random);s.update(.03);assert.ok(new Set(s.fish.map(f=>f.velocity.toFixed(2))).size>10);const before=s.fish[0].velocity;s.configure({...config,speed:1.6});s.update(.03);assert.ok(s.fish[0].velocity>before*1.95&&s.fish[0].velocity<before*2.05);});
test('light rain is bounded and fades away after disabling',()=>{const s=new PondSimulation(1672,941,{...config,rain:true},()=>.5);for(let i=0;i<1800;i++)s.update(1/30);assert.ok(s.rainDrops.length>=20&&s.rainDrops.length<=60);s.configure({...config,rain:false});for(let i=0;i<100;i++)s.update(1/30);assert.equal(s.rainDrops.length,0);});

function loneFish(speed=.8){const s=new PondSimulation(1000,700,{...config,count:1,speed},()=>.5),f=s.fish[0];f.x=500;f.y=350;f.angle=f.wander=0;return {s,f};}
test('side and rear food provoke a stationary C-turn with a larger wake, then a mouth bite',()=>{
  for(const [dx,dy] of [[0,55],[-55,0],[0,-55]])for(const speed of [.4,.8,1.8]){
    const {s,f}=loneFish(speed);s.feed(f.x+dx,f.y+dy);const food=s.food[0];s.update(1/60);
    assert.equal(s.eaten,0);assert.ok(Math.hypot(f.x-500,f.y-350)<.1);
    let bend=0,wake=false,t=0;
    while(!s.eaten&&t<4){s.update(1/60);t+=1/60;bend=Math.max(bend,Math.abs(f.curvature));wake||=s.ripples.some(r=>r.scale>1&&r.strength>.28);}
    assert.equal(s.eaten,1);assert.ok(bend>.3);assert.ok(wake);assert.ok(Math.hypot(fishMouth(f).x-food.x,fishMouth(f).y-food.y)<6);
  }
});
test('pellets on the body and tail survive until the mouth reaches them',()=>{
  for(const dx of [0,-30]){const {s,f}=loneFish();s.feed(f.x+dx,f.y);s.update(1/60);assert.equal(s.food.length,1);assert.equal(s.eaten,0);for(let i=0;i<240&&!s.eaten;i++)s.update(1/60);assert.equal(s.eaten,1);}
  const {s,f}=loneFish();const mouth=fishMouth(f);s.feed(mouth.x,mouth.y);s.update(1/60);assert.equal(s.eaten,1);
});
test('count changes preserve residents while new fish enter and removed fish depart beyond the frame',()=>{
  const s=new PondSimulation(1000,700,{...config,count:2},()=>.5),original=[...s.fish];
  s.configure({...config,count:4});assert.equal(s.fish.length,4);assert.ok(original.every(f=>s.fish.includes(f)));
  const newcomers=s.fish.slice(2);assert.ok(newcomers.every(f=>f.x<0||f.x>1000||f.y<0||f.y>700));
  for(let i=0;i<600;i++)s.update(1/30);assert.ok(newcomers.every(f=>f.lifecycle==='active'&&f.x>0&&f.x<1000&&f.y>0&&f.y<700));
  s.configure({...config,count:2});assert.equal(s.fish.length,4);assert.equal(s.fish.filter(f=>f.lifecycle==='exiting').length,2);
  for(let i=0;i<1800;i++)s.update(1/30);assert.equal(s.fish.length,2);assert.ok(original.every(f=>s.fish.includes(f)));
});
test('rapid slider reversals reuse departing fish without accumulating a hidden population',()=>{
  const s=new PondSimulation(1000,700,{...config,count:16},()=>.5),original=[...s.fish];
  for(let i=0;i<40;i++){s.configure({...config,count:6});s.update(.03);s.configure({...config,count:16});s.update(.03);}
  assert.equal(s.fish.length,16);assert.ok(original.every(f=>s.fish.includes(f)));assert.equal(s.fish.filter(f=>f.lifecycle==='exiting').length,0);
});


test('close feeding coils into a near-circle and turns continuously without a held pose',()=>{
 for(const side of [-1,1]){const {s,f}=loneFish();s.feed(500,350+side*55);let peak=0,previous=0;
 for(let i=0;i<14;i++){s.update(1/120);peak=Math.max(peak,Math.abs(f.bodyBow));assert.ok(Math.abs(f.angle-previous)>.001,'heading continues moving during coil and release');previous=f.angle;}
 assert.ok(peak>3.8,'more than 220 degrees of body curvature');const curled={...f,bodyBow:side*4.7},nose=fishPose(curled,0),tail=fishPose(curled,1);assert.ok(Math.hypot(tail.x-nose.x,tail.y-nose.y)<f.length*.32,'head and tail approach each other');
 let arcLength=0,last=fishPose(curled,0);for(let i=1;i<=100;i++){const p=fishPose(curled,i/100);arcLength+=Math.hypot(p.x-last.x,p.y-last.y);last=p;}assert.ok(Math.abs(arcLength/f.length-1)<.02,'coiling preserves body length');
 assert.ok(Math.abs(centerline(f,0))<1e-9);for(let i=0;i<360;i++)s.update(1/120);assert.equal(s.eaten,1);assert.ok(Math.abs(f.bodyBow)<.005);
 }
});

test('solid red koi participate in feeding and population transitions',()=>{const s=new PondSimulation(1000,700,{...config,count:6,species:['benigoi','kohaku']},()=>.5);assert.equal(s.fish.filter(f=>f.species==='benigoi').length,3);s.fish.forEach((f,i)=>{f.x=400+i*15;f.y=350;f.angle=0;});s.feed(500,350);for(let i=0;i<240;i++)s.update(1/60);assert.equal(s.eaten,1);s.configure({...config,count:8,species:['benigoi','kohaku']});assert.ok(s.fish.some(f=>f.species==='benigoi'&&f.lifecycle==='entering'));});
