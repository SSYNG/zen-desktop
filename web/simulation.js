export const SPECIES = ['kohaku', 'yamabuki', 'sanke'];
export function angleDelta(a, b) { return Math.atan2(Math.sin(b-a), Math.cos(b-a)); }
export class PondSimulation {
  constructor(width, height, config, random = Math.random) {
    this.width=width;this.height=height;this.random=random;this.fish=[];this.food=[];this.ripples=[];this.rainDrops=[];this.nextRain=0;this.time=0;this.eaten=0;this.configure(config);
  }
  configure(config) {
    this.config={...config};
    while(this.fish.length<config.count){const r=this.random,heading=r()*Math.PI*2;this.fish.push({x:r()*this.width,y:r()*this.height,angle:heading,wander:heading,speed:16+r()*13,length:62+r()*29,phase:r()*Math.PI*2,turn:0,curvature:0,kickAge:-1,kickDirection:1,kickBend:0,kickCooldown:1+r()*5,agility:.75+r()*.5,dartAge:-1,nextDart:6+r()*40,dartTurn:0,dartRipple:false,burst:0,species:0,seed:r()*100});}
    this.fish.length=config.count;
    this.fish.forEach((f,i)=>f.species=config.species[i%config.species.length]);
  }
  resize(w,h){this.fish.forEach(f=>{f.x*=w/this.width;f.y*=h/this.height;});this.food.forEach(f=>{f.x*=w/this.width;f.y*=h/this.height;});this.width=w;this.height=h;}
  feed(x,y){if(this.food.length>=24)return false;this.food.push({x,y,age:0,id:this.time+this.random()});this.ripple(x,y);return true;}
  ripple(x,y,strength=.28,scale=1){this.ripples.push({x,y,age:0,strength,scale});if(this.ripples.length>30)this.ripples.shift();}
  update(dt){
    dt=Math.min(dt,.05);this.time+=dt;const w=this.width,h=this.height;
    if(this.config.rain){this.nextRain-=dt;if(this.nextRain<=0){const rate=Math.max(6,Math.min(24,w*h/1573344*18));this.nextRain=(.6+this.random()*.8)/rate;this.rainDrops.push({x:this.random()*w,y:this.random()*h,age:-.24,size:.7+this.random()*.5});if(this.rainDrops.length>80)this.rainDrops.shift();}}
    this.rainDrops.forEach(r=>r.age+=dt);this.rainDrops=this.rainDrops.filter(r=>r.age<2.2);
    for(const food of this.food)food.age+=dt;
    for(const f of this.fish){
      f.wander+=Math.sin(this.time*.18+f.seed)*dt*.09;
      let goal=f.wander;
      let target=null,dist=270;
      for(const food of this.food){let d=Math.hypot(food.x-f.x,food.y-f.y);if(d<dist){target=food;dist=d;}}
      f.nextDart-=dt;
      if(!target&&f.dartAge<0&&f.nextDart<=0){
        if(f.x>130&&f.x<w-130&&f.y>130&&f.y<h-130){f.dartAge=0;f.dartTurn=(this.random()<.5?-1:1)*(1.15+this.random()*.8);f.dartRipple=false;this.ripple(f.x,f.y,.13,.65);}
        f.nextDart=25+this.random()*45;
      }
      let dart=0;
      if(f.dartAge>=0){f.dartAge+=dt;const a=f.dartAge;dart=a<.2?Math.sin(a/.2*Math.PI/2):Math.exp(-(a-.2)*2.7);
        if(a>.25&&!f.dartRipple&&!target){f.wander=f.angle+f.dartTurn;goal=f.wander;f.kickCooldown=0;f.dartRipple=true;this.ripple(f.x,f.y,.17,.7);}
        if(a>1.35)f.dartAge=-1;
      }
      if(target){goal=Math.atan2(target.y-f.y,target.x-f.x);f.burst=Math.min(1,f.burst+dt*1.4);}
      else {f.burst=Math.max(0,f.burst-dt*.22);const margin=105;let bx=0,by=0;if(f.x<margin)bx=(margin-f.x)/margin;if(f.x>w-margin)bx=-(f.x-w+margin)/margin;if(f.y<margin)by=(margin-f.y)/margin;if(f.y>h-margin)by=-(f.y-h+margin)/margin;if(bx||by){goal=Math.atan2(by,bx);f.wander=goal;}}
      // Gentle separation: a school, never a rigid formation or overlapping pile.
      let sx=0,sy=0;for(const other of this.fish){if(other===f)continue;const dx=f.x-other.x,dy=f.y-other.y,d=Math.hypot(dx,dy);if(d>0&&d<45){sx+=dx/d*(1-d/45);sy+=dy/d*(1-d/45);}}
      if(sx||sy)goal=Math.atan2(Math.sin(goal)+sy*.55,Math.cos(goal)+sx*.55);
      const delta=angleDelta(f.angle,goal);f.kickCooldown-=dt;
      // A short C-start: preload the body, then sweep the tail and release into the turn.
      // Individual cooldowns prevent the whole school from snapping in synchrony.
      if(f.kickAge<0&&f.kickCooldown<=0&&Math.abs(delta)>.9){f.kickAge=0;f.kickDirection=Math.sign(delta);f.kickCooldown=3+this.random()*5;}
      let impulse=0;f.kickBend=0;
      if(f.kickAge>=0){f.kickAge+=dt*f.agility;const a=f.kickAge;
        if(a<.18)f.kickBend=f.kickDirection*Math.sin(a/.18*Math.PI/2);
        else if(a<.42){const t=(a-.18)/.24;f.kickBend=f.kickDirection*Math.cos(t*Math.PI);impulse=Math.sin(t*Math.PI);}
        else if(a<.72)f.kickBend=-f.kickDirection*.65*Math.exp(-(a-.42)*8)*Math.cos((a-.42)*12);
        else f.kickAge=-1;
      }
      const maxTurn=((target?1.1:.45)*f.agility+impulse*3.7)*dt;const turn=Math.max(-maxTurn,Math.min(maxTurn,delta));f.angle+=turn;f.turn+=(turn/dt-f.turn)*(1-Math.exp(-dt*7));
      const desiredCurve=Math.max(-.29,Math.min(.29,f.turn*.065+f.kickBend*.23));f.curvature+=(desiredCurve-f.curvature)*(1-Math.exp(-dt*19));
      const variation=1+Math.sin(this.time*.31+f.seed)*.14+Math.sin(this.time*.13+f.seed*2)*.06;
      const activity=Math.max(f.burst*3.8,dart*3.5);
      const velocity=f.speed*this.config.speed*variation*(1+activity+impulse*.5);f.velocity=velocity;f.x+=Math.cos(f.angle)*velocity*dt;f.y+=Math.sin(f.angle)*velocity*dt;
      f.x=Math.max(4,Math.min(w-4,f.x));f.y=Math.max(4,Math.min(h-4,f.y));f.phase+=dt*(3.1+f.burst*3+dart*5+impulse*5)*this.config.speed;
      if(target && Math.hypot(target.x-f.x,target.y-f.y)<f.length*.42){const i=this.food.indexOf(target);if(i>=0){this.food.splice(i,1);this.eaten++;this.ripple(target.x,target.y);for(const other of this.fish)if(Math.hypot(other.x-target.x,other.y-target.y)<270)other.wander=Math.atan2(other.y-target.y,other.x-target.x)+(this.random()-.5)*.8;}}
    }
    this.food=this.food.filter(f=>f.age<25);this.ripples.forEach(r=>r.age+=dt);this.ripples=this.ripples.filter(r=>r.age<3.4);
  }
}
