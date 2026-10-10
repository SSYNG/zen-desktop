export const SPECIES = ['kohaku', 'yamabuki', 'sanke', 'benigoi'];
export function angleDelta(a, b) { return Math.atan2(Math.sin(b-a), Math.cos(b-a)); }
// The rendered nose is at u=0: +0.45 body lengths along the heading.
export function fishMouth(f) { return {x:f.x+Math.cos(f.angle)*f.length*.45,y:f.y+Math.sin(f.angle)*f.length*.45}; }
function segmentDistance(p,a,b) {
  const dx=b.x-a.x,dy=b.y-a.y,d=dx*dx+dy*dy;
  const t=d?Math.max(0,Math.min(1,((p.x-a.x)*dx+(p.y-a.y)*dy)/d)):0;
  return Math.hypot(p.x-a.x-t*dx,p.y-a.y-t*dy);
}
export class PondSimulation {
  constructor(width, height, config, random = Math.random) {
    this.width=width;this.height=height;this.random=random;this.fish=[];this.food=[];this.ripples=[];this.rainDrops=[];this.nextRain=0;this.time=0;this.eaten=0;this.configure(config,true);
  }
  createFish(initial) {
    const r=this.random,heading=r()*Math.PI*2;
    const f={x:r()*this.width,y:r()*this.height,angle:heading,wander:heading,speed:16+r()*13,length:62+r()*29,phase:r()*Math.PI*2,turn:0,curvature:0,kickAge:-1,kickDirection:1,kickBend:0,kickCooldown:1+r()*5,agility:.75+r()*.5,dartAge:-1,nextDart:6+r()*40,dartTurn:0,dartRipple:false,burst:0,species:0,seed:r()*100,lifecycle:initial?'active':'entering',feedingKick:false,bodyBow:0};
    if(!initial){
      const edge=Math.floor(r()*4),padding=f.length*1.15;
      f.x=edge===0?-padding:edge===1?this.width+padding:this.width*(.15+r()*.7);
      f.y=edge===2?-padding:edge===3?this.height+padding:this.height*(.15+r()*.7);
      f.entry={x:Math.max(f.length*1.4,Math.min(this.width-f.length*1.4,f.x)),y:Math.max(f.length*1.4,Math.min(this.height-f.length*1.4,f.y))};
      f.angle=f.wander=Math.atan2(f.entry.y-f.y,f.entry.x-f.x);
    }
    return f;
  }
  configure(config,initial=false) {
    this.config={...config};
    let residents=this.fish.filter(f=>f.lifecycle!=='exiting');
    // Reverse unfinished departures when a slider is moved back, retaining the same fish.
    for(const f of this.fish)if(residents.length<config.count&&f.lifecycle==='exiting'){
      f.lifecycle='entering';f.entry={x:Math.max(f.length,Math.min(this.width-f.length,f.x)),y:Math.max(f.length,Math.min(this.height-f.length,f.y))};f.exit=null;residents.push(f);
    }
    while(residents.length<config.count){const f=this.createFish(initial);this.fish.push(f);residents.push(f);}
    while(residents.length>config.count){
      const f=residents.pop(),padding=f.length*1.3;
      const edges=[{d:f.x,x:-padding,y:f.y},{d:this.width-f.x,x:this.width+padding,y:f.y},{d:f.y,x:f.x,y:-padding},{d:this.height-f.y,x:f.x,y:this.height+padding}];
      f.lifecycle='exiting';f.exit=edges.reduce((a,b)=>a.d<b.d?a:b);f.burst=0;f.dartAge=-1;
    }
    residents.forEach((f,i)=>f.species=config.species[i%config.species.length]);
  }
  resize(w,h){this.fish.forEach(f=>{f.x*=w/this.width;f.y*=h/this.height;for(const point of [f.entry,f.exit])if(point){point.x*=w/this.width;point.y*=h/this.height;}});this.food.forEach(f=>{f.x*=w/this.width;f.y*=h/this.height;});this.width=w;this.height=h;}
  feed(x,y){if(this.food.length>=24)return false;this.food.push({x,y,age:0,id:this.time+this.random()});this.ripple(x,y);return true;}
  ripple(x,y,strength=.28,scale=1){this.ripples.push({x,y,age:0,strength,scale});if(this.ripples.length>30)this.ripples.shift();}
  update(dt){
    dt=Math.min(dt,.05);if(dt<=0)return;this.time+=dt;const w=this.width,h=this.height;
    if(this.config.rain){this.nextRain-=dt;if(this.nextRain<=0){const rate=Math.max(6,Math.min(24,w*h/1573344*18));this.nextRain=(.6+this.random()*.8)/rate;this.rainDrops.push({x:this.random()*w,y:this.random()*h,age:-.24,size:.7+this.random()*.5});if(this.rainDrops.length>80)this.rainDrops.shift();}}
    this.rainDrops.forEach(r=>r.age+=dt);this.rainDrops=this.rainDrops.filter(r=>r.age<2.2);
    for(const food of this.food)food.age+=dt;
    for(const f of this.fish){
      const mouthBefore=fishMouth(f),travelling=f.lifecycle!=='active';
      f.wander+=Math.sin(this.time*.18+f.seed)*dt*.09;
      let goal=f.wander;
      let target=null,dist=270;
      if(!travelling)for(const food of this.food){const d=Math.hypot(food.x-f.x,food.y-f.y);if(d<dist){target=food;dist=d;}}
      const closeFood=target&&dist<f.length*1.8;
      f.nextDart-=dt;
      if(!travelling&&!target&&f.dartAge<0&&f.nextDart<=0){
        if(f.x>130&&f.x<w-130&&f.y>130&&f.y<h-130){f.dartAge=0;f.dartTurn=(this.random()<.5?-1:1)*(1.15+this.random()*.8);f.dartRipple=false;this.ripple(f.x,f.y,.13,.65);}
        f.nextDart=25+this.random()*45;
      }
      let dart=0;
      if(f.dartAge>=0){f.dartAge+=dt;const a=f.dartAge;dart=a<.2?Math.sin(a/.2*Math.PI/2):Math.exp(-(a-.2)*2.7);
        if(a>.25&&!f.dartRipple&&!target){f.wander=f.angle+f.dartTurn;goal=f.wander;f.kickCooldown=0;f.dartRipple=true;this.ripple(f.x,f.y,.17,.7);}
        if(a>1.35)f.dartAge=-1;
      }
      if(travelling){const point=f.lifecycle==='exiting'?f.exit:f.entry;goal=Math.atan2(point.y-f.y,point.x-f.x);}
      else if(target){goal=Math.atan2(target.y-f.y,target.x-f.x);f.burst=Math.min(1,f.burst+dt*1.4);}
      else {f.burst=Math.max(0,f.burst-dt*.22);const margin=105;let bx=0,by=0;if(f.x<margin)bx=(margin-f.x)/margin;if(f.x>w-margin)bx=-(f.x-w+margin)/margin;if(f.y<margin)by=(margin-f.y)/margin;if(f.y>h-margin)by=-(f.y-h+margin)/margin;if(bx||by){goal=Math.atan2(by,bx);f.wander=goal;}}
      // Close feeding prioritises lining up the mouth, rather than circling a neighbour.
      let sx=0,sy=0;for(const other of this.fish){if(other===f||other.lifecycle==='exiting')continue;const dx=f.x-other.x,dy=f.y-other.y,d=Math.hypot(dx,dy);if(d>0&&d<45){sx+=dx/d*(1-d/45);sy+=dy/d*(1-d/45);}}
      const separation=travelling?0:closeFood ? .06 : .55;
      if(sx||sy)goal=Math.atan2(Math.sin(goal)+sy*separation,Math.cos(goal)+sx*separation);
      const delta=angleDelta(f.angle,goal);f.kickCooldown-=dt;
      // A close, lateral pellet triggers a stronger C-start immediately, even after an idle kick.
      const feedingTurn=closeFood&&Math.abs(delta)>.65;
      if(f.kickAge<0&&(feedingTurn?f.feedTurnTarget!==target||f.kickCooldown<=0:f.kickCooldown<=0&&Math.abs(delta)>.9)){
        f.kickAge=0;f.kickDirection=Math.sign(delta);f.feedingKick=!!feedingTurn;f.kickRipple=false;f.feedTurnTarget=feedingTurn?target:null;f.kickCooldown=feedingTurn?1.1:3+this.random()*5;
      }
      let impulse=0,bow=0;f.kickBend=0;
      const preload=f.feedingKick ? .075 : .18,release=f.feedingKick ? .16 : .24;
      if(f.kickAge>=0){f.kickAge+=dt*f.agility;const a=f.kickAge;
        if(a<preload){f.kickBend=f.kickDirection*Math.sin(a/preload*Math.PI/2);if(f.feedingKick)bow=f.kickBend*4.7;}
        else if(a<preload+release){const t=(a-preload)/release;f.kickBend=f.kickDirection*Math.cos(t*Math.PI);impulse=Math.sin(t*Math.PI);if(f.feedingKick)bow=f.kickDirection*4.7*Math.cos(t*Math.PI/2);
          if(f.feedingKick&&!f.kickRipple){f.kickRipple=true;this.ripple(f.x-Math.cos(f.angle)*f.length*.3,f.y-Math.sin(f.angle)*f.length*.3,.6,1.65);}
        }
        else if(a<preload+release+.3){const t=a-preload-release;f.kickBend=-f.kickDirection*.65*Math.exp(-t*8)*Math.cos(t*12);if(f.feedingKick)bow=-f.kickDirection*.28*Math.sin(t/.3*Math.PI)*Math.exp(-t*8); }
        else {f.kickAge=-1;f.feedingKick=false;}
      }
      // Coil and turn overlap: no held pose between loading and tail release.
      f.bodyBow+=(bow-f.bodyBow)*(1-Math.exp(-dt*90));
      const loading=f.feedingKick&&f.kickAge>=0&&f.kickAge<preload;
      const maxTurn=(loading ? (1.4+Math.abs(f.bodyBow)*.65)*f.agility : (closeFood?2.8:target?1.1:.45)*f.agility+impulse*(f.feedingKick?7:3.7))*dt;
      const turn=Math.max(-maxTurn,Math.min(maxTurn,delta));f.angle+=turn;f.turn+=(turn/dt-f.turn)*(1-Math.exp(-dt*7));
      const bendLimit=f.feedingKick ? .46 : .29;
      const desiredCurve=Math.max(-bendLimit,Math.min(bendLimit,f.turn*.065+f.kickBend*(f.feedingKick ? .36 : .23)));f.curvature+=(desiredCurve-f.curvature)*(1-Math.exp(-dt*19));
      const variation=1+Math.sin(this.time*.31+f.seed)*.14+Math.sin(this.time*.13+f.seed*2)*.06;
      const activity=Math.max(f.burst*3.8,dart*3.5);
      let velocity=f.speed*this.config.speed*variation*(1+activity+impulse*.5);
      if(travelling)velocity=f.speed*this.config.speed*1.8*Math.max(.15,Math.cos(angleDelta(f.angle,goal)));
      if(closeFood){
        const alignment=Math.max(0,Math.cos(angleDelta(f.angle,goal)));
        // Brake before turning. Small backward sculling lets a pellet on the body reach the nose.
        const approach=Math.max(-.25,Math.min(1,(dist-f.length*.45)/(f.length*.65)));
        velocity*=alignment*alignment*approach;
        if(loading)velocity*=.3;
      }
      f.velocity=velocity;f.x+=Math.cos(f.angle)*velocity*dt;f.y+=Math.sin(f.angle)*velocity*dt;
      if(!travelling){f.x=Math.max(4,Math.min(w-4,f.x));f.y=Math.max(4,Math.min(h-4,f.y));}
      else if(f.lifecycle==='entering'&&Math.hypot(f.entry.x-f.x,f.entry.y-f.y)<f.length*.45){f.lifecycle='active';f.wander=f.angle;f.entry=null;}
      f.phase+=dt*(3.1+f.burst*3+dart*5+impulse*5)*this.config.speed;
      const mouthAfter=fishMouth(f),mouthRadius=2.6+f.length*.025;
      if(target&&segmentDistance(target,mouthBefore,mouthAfter)<mouthRadius){const i=this.food.indexOf(target);if(i>=0){this.food.splice(i,1);this.eaten++;this.ripple(target.x,target.y);for(const other of this.fish)if(other.lifecycle==='active'&&Math.hypot(other.x-target.x,other.y-target.y)<270)other.wander=Math.atan2(other.y-target.y,other.x-target.x)+(this.random()-.5)*.8;}}
    }
    this.fish=this.fish.filter(f=>f.lifecycle!=='exiting'||(f.x>-f.length&&f.x<w+f.length&&f.y>-f.length&&f.y<h+f.length));
    this.food=this.food.filter(f=>f.age<25);this.ripples.forEach(r=>r.age+=dt);this.ripples=this.ripples.filter(r=>r.age<3.4);
  }
}
