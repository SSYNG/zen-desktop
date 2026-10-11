import * as THREE from './lib/three.module.js';
import {cloudMinutes,cloudLight} from './cloud-time.js';
const srgb=c=>c<=.0031308?c*12.92:1.055*c**(1/2.4)-.055;
// One video supplies motion. Grading approximates changing illumination; it cannot
// recompute shadows without scene geometry. The offline clip is periodic; native
// buffered looping avoids restarting a paused decoder at every boundary.
export class CloudVideoRenderer {
 constructor(canvas,onFailure){
  this.canvas=canvas;this.onFailure=onFailure;this.ready=false;this.active=true;this.elapsed=0;this.frames=0;this.disposed=false;this.failed=false;this.loops=0;this.maxFrameGap=0;
  this.renderer=new THREE.WebGLRenderer({canvas,antialias:false,alpha:false});this.renderer.setPixelRatio(1);
  this.scene=new THREE.Scene();this.camera=new THREE.Camera();
  this.video=document.createElement('video');const v=this.video;v.muted=true;v.playsInline=true;v.preload='auto';v.loop=true;v.src=new URL('./media/cloud-sea.mp4',import.meta.url).href;v.addEventListener('error',()=>this.fail('云海视频无法解码'));
  this.texture=new THREE.VideoTexture(v);
  const decoded=(now,meta)=>{if(this.disposed)return;if(this.active&&this.ready){if(this.lastDecodedAt)this.maxFrameGap=Math.max(this.maxFrameGap,now-this.lastDecodedAt);if(this.lastMediaTime!==undefined&&meta.mediaTime<this.lastMediaTime)this.loops++;this.lastDecodedAt=now;this.lastMediaTime=meta.mediaTime;}this.callback=v.requestVideoFrameCallback(decoded);};
  this.callback=v.requestVideoFrameCallback(decoded);
  this.uniforms={film:{value:this.texture},crop:{value:new THREE.Vector2(1,1)},skyTop:{value:new THREE.Vector3()},skyHorizon:{value:new THREE.Vector3()},night:{value:0},warm:{value:0}};
  this.material=new THREE.RawShaderMaterial({uniforms:this.uniforms,vertexShader:`precision highp float;attribute vec3 position;attribute vec2 uv;varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}`,fragmentShader:`precision highp float;
   uniform sampler2D film;uniform float night,warm;uniform vec2 crop;uniform vec3 skyTop,skyHorizon;varying vec2 vUv;
   void main(){vec2 uv=(vUv-.5)*crop+.5;vec3 source=texture2D(film,uv).rgb;
    float l=dot(source,vec3(.2126,.7152,.0722));vec3 neutral=mix(source,vec3(l),.18);
    vec3 cloud=neutral*mix(vec3(1.04,1.02,1.),vec3(1.1,.96,.88),warm);
    vec3 moonlit=vec3(.30,.43,.67)*l*.34+vec3(.004,.007,.014);cloud=mix(cloud,moonlit,night);
    // Source horizon sits at 30% from the top. Brightness gating preserves the ridge.
    float skyMask=smoothstep(.683,.735,uv.y)*smoothstep(.22,.43,l);
    float skyHeight=clamp((uv.y-.705)/.295,0.,1.);vec3 sky=mix(skyHorizon,skyTop,pow(skyHeight,.55));
    sky+=vec3((l-.78)*.025);vec2 cell=floor(uv*vec2(460.,260.));float h=fract(sin(dot(cell,vec2(127.1,311.7)))*43758.5453);
    float star=(1.-smoothstep(.025,.13,length(fract(uv*vec2(460.,260.))-vec2(h,fract(h*17.)))))*step(.9983,h)*smoothstep(.76,.81,uv.y);
    sky+=vec3(.36,.42,.56)*star*night;gl_FragColor=vec4(clamp(mix(cloud,sky,skyMask),0.,1.),1.);
   }`});
  this.geometry=new THREE.PlaneGeometry(2,2);this.scene.add(new THREE.Mesh(this.geometry,this.material));
  this.contextLost=e=>{e.preventDefault();this.fail('云海视频显卡上下文丢失');};canvas.addEventListener('webglcontextlost',this.contextLost);
  this.timeout=setTimeout(()=>this.fail('云海视频加载超时'),15000);
  const loaded=()=>{if(this.disposed||this.failed||this.ready||v.readyState<2)return;clearTimeout(this.timeout);this.ready=true;if(this.active)this.play();};
  v.addEventListener('loadeddata',loaded);v.load();
 }
 fail(message){if(this.disposed||this.failed)return;this.failed=true;this.ready=false;clearTimeout(this.timeout);this.error=message;this.onFailure?.(message+'，已切回赏鱼');}
 resize(w,h){const scale=Math.min(devicePixelRatio||1,2560/w);this.renderer.setSize(Math.round(w*scale),Math.round(h*scale),false);const a=w/h,source=16/9;this.uniforms.crop.value.set(Math.min(1,a/source),Math.min(1,source/a));}
 play(){this.video.play().catch(e=>{if(e.name!=='AbortError')this.fail(e.message);});}
 setActive(active){if(this.active===active)return;this.active=active;this.lastDecodedAt=null;if(!active)this.video.pause();else if(this.ready)this.play();}
 render(config,dt){
  this.clock={minutes:cloudMinutes(config.cloudMode,config.cloudTime),mode:config.cloudMode};const light=cloudLight(this.clock.minutes);this.clock.phase=light.phase;
  const weight=this.frames?1-Math.exp(-dt*2):1;
  for(const [name,color] of [['skyTop',light.top],['skyHorizon',light.horizon]])this.uniforms[name].value.lerp(new THREE.Vector3(...color.map(srgb)),weight);
  for(const [name,value] of [['night',light.night],['warm',Math.max(0,(srgb(light.horizon[0])-srgb(light.horizon[2]))*2)]])this.uniforms[name].value+= (value-this.uniforms[name].value)*weight;
  if(!this.ready||!this.active)return;
  this.elapsed+=dt;this.frames++;this.videoTime=this.video.currentTime;this.decodedFrames=(this.video.getVideoPlaybackQuality?.().totalVideoFrames||0);this.renderer.render(this.scene,this.camera);

 }
 dispose(){if(this.disposed)return;this.disposed=true;clearTimeout(this.timeout);this.canvas.removeEventListener('webglcontextlost',this.contextLost);this.video.cancelVideoFrameCallback(this.callback);this.video.pause();this.video.removeAttribute('src');this.video.load();this.texture.dispose();this.geometry.dispose();this.material.dispose();this.renderer.dispose();}
}
