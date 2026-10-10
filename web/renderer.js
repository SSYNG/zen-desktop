const TAU=Math.PI*2;
// An arc-length skeleton can coil into a C; moving only y leaves a rigid horizontal spine.
export function fishPose(f,u){
  const k=f.bodyBow||0,l=f.length,blend=Math.max(0,1-Math.abs(k)/4.7);
  const x=Math.abs(k)<1e-5?(.45-u)*l:.45*l-l*Math.sin(k*u)/k;
  const arc=Math.abs(k)<1e-5?0:-l*(1-Math.cos(k*u))/k;
  const wave=Math.sin(f.phase-u*3)*u*u*.075-f.curvature*u*u;
  const derivative=(Math.sin(f.phase-u*3)*2*u-Math.cos(f.phase-u*3)*3*u*u)*.075-2*f.curvature*u;
  return {x,y:arc+wave*l*blend,angle:Math.atan2(Math.sin(k*u)-derivative*blend,Math.cos(k*u))};
}
export function centerline(f,u){return fishPose(f,u).y;}
function rng(seed){return()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};}
function skin(type){
  const c=document.createElement('canvas');c.width=256;c.height=96;const p=c.getContext('2d');
  const base=type==='benigoi'?['#8c2426','#bd342e','#d74b35','#992c2b']:type==='yamabuki'?['#b28b3e','#e2c67c','#f5e4af','#c4a256']:['#b9c6bd','#e4e9da','#f6f3e3','#bbcabe'];
  let g=p.createLinearGradient(0,0,0,96);base.forEach((color,i)=>g.addColorStop(i/3,color));p.fillStyle=g;p.fillRect(0,0,256,96);
  const r=rng(type==='kohaku'?17:type==='sanke'?38:9);
  if(type==='kohaku'||type==='sanke')for(let i=0;i<(type==='sanke'?12:8);i++){p.fillStyle=type==='sanke'&&i%3===0?'#34423a':'#b9573d';p.beginPath();let x=25+r()*198,y=20+r()*57;p.ellipse(x,y,10+r()*22,7+r()*18,r()*2,0,TAU);p.fill();}
  p.strokeStyle=type==='yamabuki'?'#765f362a':'#81988a21';p.lineWidth=.65;
  for(let x=20;x<250;x+=9)for(let y=7;y<90;y+=8){p.beginPath();p.arc(x+(y%16?4:0),y,4,-1.1,1.1);p.stroke();}
  g=p.createLinearGradient(0,0,0,96);g.addColorStop(0,'#20483950');g.addColorStop(.46,'#ffffff16');g.addColorStop(.53,'#ffffff20');g.addColorStop(1,'#173d3845');p.fillStyle=g;p.fillRect(0,0,256,96);return c;
}
export class PondRenderer {
  constructor(canvas){this.canvas=canvas;this.ctx=canvas.getContext('2d');this.rainCanvas=document.getElementById('rain-impact');this.rainCtx=this.rainCanvas.getContext('2d');this.skins=Object.fromEntries(['kohaku','yamabuki','sanke','benigoi'].map(t=>[t,skin(t)]));}
  resize(w,h){const d=Math.min(window.devicePixelRatio||1,1,1920/w),rainD=Math.min(window.devicePixelRatio||1,1.5);this.canvas.width=Math.round(w*d);this.canvas.height=Math.round(h*d);this.ctx.setTransform(d,0,0,d,0,0);this.rainCanvas.width=Math.round(w*rainD);this.rainCanvas.height=Math.round(h*rainD);this.rainCtx.setTransform(rainD,0,0,rainD,0,0);this.width=w;this.height=h;}
  fishPath(c,f){const l=f.length;c.beginPath();for(const side of [1,-1])for(let i=0;i<=40;i++){const u=side===1?i/40:1-i/40,p=fishPose(f,u),width=l*(.09*Math.pow(Math.sin(Math.PI*u),.72)+.011)*(u>.9?.8:1),x=p.x-Math.sin(p.angle)*width*side,y=p.y+Math.cos(p.angle)*width*side;if(side===1&&i===0)c.moveTo(x,y);else c.lineTo(x,y);}c.closePath();}
  drawFish(c,f,shadow=false){
    c.save();c.translate(f.x+(shadow?5:0),f.y+(shadow?9:0));c.rotate(f.angle);const l=f.length;
    if(shadow){c.fillStyle='#123e3425';this.fishPath(c,f);c.fill();c.restore();return;}
    // Translucent pectoral fins and forked tail follow the body wave.
    c.fillStyle=f.species==='benigoi'?'#d075586b':f.species==='yamabuki'?'#e6d29a6a':'#e5ecda6b';c.strokeStyle=f.species==='benigoi'?'#d6947350':'#d7e5d94a';c.lineWidth=.5;
    for(const side of [-1,1]){const p=fishPose(f,.28);c.save();c.translate(p.x-Math.sin(p.angle)*side*l*.063,p.y+Math.cos(p.angle)*side*l*.063);c.rotate(p.angle+side*(.3+Math.sin(f.phase+.6)*.13));c.beginPath();c.moveTo(0,0);c.bezierCurveTo(-l*.08,side*l*.15,-l*.24,side*l*.18,-l*.2,side*l*.07);c.quadraticCurveTo(-l*.1,side*l*.035,0,0);c.fill();c.stroke();for(let j=1;j<5;j++){c.beginPath();c.moveTo(0,0);c.lineTo(-l*(.09+j*.022),side*l*(.045+j*.021));c.stroke();}c.restore();}
    const tail=fishPose(f,.97);
    c.save();c.translate(tail.x,tail.y);c.rotate(tail.angle+Math.sin(f.phase-3)*.28-f.kickBend*.35);c.beginPath();c.moveTo(l*.05,0);c.bezierCurveTo(-l*.02,-l*.06,-l*.22,-l*.16,-l*.28,-l*.12);c.quadraticCurveTo(-l*.2,0,-l*.14,0);c.quadraticCurveTo(-l*.2,0,-l*.28,l*.12);c.bezierCurveTo(-l*.22,l*.16,-l*.02,l*.06,l*.05,0);c.fill();c.stroke();for(let j=-3;j<=3;j++){c.beginPath();c.moveTo(0,0);c.lineTo(-l*.23,j*l*.035);c.stroke();}c.restore();
    c.save();this.fishPath(c,f);c.clip();
    // Warp a scale-textured skin in narrow slices, rather than rotate a rigid sprite.
    const tex=this.skins[f.species],slices=40;for(let i=0;i<slices;i++){const p=fishPose(f,(i+.5)/slices);c.save();c.translate(p.x,p.y);c.rotate(p.angle);c.drawImage(tex,255-(i+1)*256/slices,0,256/slices+1,96,-l/slices*.5-.5,-l*.14,l/slices+1,l*.28);c.restore();}
    c.restore();this.fishPath(c,f);c.strokeStyle='#d6e5cb45';c.lineWidth=.7;c.stroke();
    // Spine highlight, tiny eyes and a subdued gill line give restrained 2.5D volume.
    c.strokeStyle='#fffce52e';c.lineWidth=1.4;c.beginPath();for(let i=0;i<=22;i++){let u=.12+i/22*.78;const p=fishPose(f,u);let x=p.x+Math.sin(p.angle)*l*.012,y=p.y-Math.cos(p.angle)*l*.012;if(i===0)c.moveTo(x,y);else c.lineTo(x,y);}c.stroke();
    for(const side of [-1,1]){const eye=fishPose(f,.11),gill=fishPose(f,.23);c.save();c.translate(eye.x,eye.y);c.rotate(eye.angle);c.fillStyle='#243c32';c.beginPath();c.ellipse(0,side*l*.045,l*.01,l*.014,0,0,TAU);c.fill();c.fillStyle='#f7f2d2a6';c.beginPath();c.arc(l*.004,side*l*.042,l*.0035,0,TAU);c.fill();c.restore();c.save();c.translate(gill.x,gill.y);c.rotate(gill.angle);c.strokeStyle='#6d807a66';c.beginPath();c.ellipse(0,side*l*.044,l*.025,l*.033,side*.3,0,Math.PI);c.stroke();c.restore();}
    c.restore();
  }
  render(sim,dt){const c=this.ctx,p=c,w=this.width,h=this.height;c.clearRect(0,0,w,h);
    // A subtle moving surface shimmer; no video and no per-frame image allocation.
    if(!this.waterSurface?.ready)for(let i=0;i<7;i++){const x=(Math.sin(sim.time*.04+i*2.4)*.5+.5)*w,y=(Math.cos(sim.time*.025+i*1.7)*.5+.5)*h;const g=p.createRadialGradient(x,y,0,x,y,180);g.addColorStop(0,'#d3e6b407');g.addColorStop(1,'#d3e6b400');p.fillStyle=g;p.fillRect(x-180,y-180,360,360);}
    for(const f of sim.fish)this.drawFish(c,f,true);for(const f of sim.fish)this.drawFish(c,f);
    for(const food of sim.food){c.fillStyle='#67482755';c.beginPath();c.arc(food.x+2,food.y+3,3,0,TAU);c.fill();c.fillStyle='#d6b571';c.beginPath();c.arc(food.x,food.y,2.6,0,TAU);c.fill();}
    const gpu=!!this.waterSurface?.ready;
    if(!gpu)for(const r of sim.ripples)for(let i=0;i<2;i++){let age=r.age-i*.35;if(age<0)continue;c.strokeStyle=`rgba(229,241,213,${Math.max(0,r.strength*(1-age/3.4))})`;c.lineWidth=1;c.beginPath();c.ellipse(r.x,r.y,(8+age*29)*r.scale,(8+age*29)*r.scale,0,0,TAU);c.stroke();}
    this.waterSurface?.render(sim,dt);this.drawRain(sim,gpu);
  }
  drawRain(sim,gpu){const c=this.rainCtx;c.clearRect(0,0,this.width,this.height);
    for(const r of sim.rainDrops){
      if(r.age<0){const t=1+r.age/.24;c.strokeStyle=`rgba(197,223,202,${.32*t})`;c.lineWidth=.8;c.beginPath();c.moveTo(r.x-4*(1-t),r.y-48*(1-t)-10);c.lineTo(r.x,r.y-48*(1-t));c.stroke();continue;}
      if(r.age<.38){c.save();c.shadowColor='rgba(162,199,177,.3)';c.shadowBlur=1.7;const t=r.age/.38,fade=1-t,spread=Math.sin(Math.min(1,t*2)*Math.PI/2);
        // The impact pit, bright crown and droplets remain centred on the GPU impulse.
        c.fillStyle=`rgba(27,66,55,${.24*fade})`;c.beginPath();c.ellipse(r.x,r.y,2.2+spread*2.2,1.5+spread,0,0,TAU);c.fill();
        c.strokeStyle=`rgba(181,213,189,${.46*fade})`;c.lineWidth=.9;c.beginPath();c.ellipse(r.x,r.y,2.4+spread*4.6,1.8+spread*2.6,0,0,TAU);c.stroke();
        for(let j=0;j<6;j++){const a=j*TAU/6+r.x,x=r.x+Math.cos(a)*t*13,y=r.y+Math.sin(a)*t*7-Math.sin(t*Math.PI)*12;c.fillStyle=`rgba(184,214,195,${.42*fade})`;c.beginPath();c.ellipse(x,y,.7,1.05,0,0,TAU);c.fill();}c.restore();
      }
      if(!gpu)for(let i=0;i<3;i++){const a=r.age-i*.17;if(a<0)continue;const radius=(3+a*29)*r.size;c.strokeStyle=`rgba(233,248,225,${.55*Math.max(0,1-a/2.2)*(1-i*.2)})`;c.lineWidth=1;c.beginPath();c.ellipse(r.x,r.y,radius,radius*.94,0,0,TAU);c.stroke();c.strokeStyle=`rgba(20,58,49,${.22*Math.max(0,1-a/2.2)})`;c.beginPath();c.ellipse(r.x,r.y+1.2,radius+1.2,(radius+1.2)*.94,0,0,TAU);c.stroke();}
    }
  }
}
