import * as THREE from './lib/three.module.js';
const vertex=`varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}`;
const wave=`precision highp float;varying vec2 vUv;uniform sampler2D state;uniform vec2 texel;uniform vec4 impacts[12];uniform int impactCount;
void main(){vec2 old=texture2D(state,vUv).rg;
float lap=texture2D(state,vUv+vec2(texel.x,0.)).r+texture2D(state,vUv-vec2(texel.x,0.)).r+texture2D(state,vUv+vec2(0.,texel.y)).r+texture2D(state,vUv-vec2(0.,texel.y)).r-4.*old.r;
float velocity=(old.g+lap*.24)*.966;
for(int i=0;i<12;i++){if(i>=impactCount)break;vec2 d=(vUv-impacts[i].xy)/texel;float q=dot(d,d)/(impacts[i].w*impacts[i].w);velocity+=impacts[i].z*(1.-q)*exp(-q*1.5);}
float edge=min(min(vUv.x,1.-vUv.x),min(vUv.y,1.-vUv.y));float damping=mix(.75,1.,smoothstep(0.,.025,edge));gl_FragColor=vec4((old.r+velocity)*.998*damping,velocity*damping,0.,1.);}`;
const surface=`precision highp float;varying vec2 vUv;uniform sampler2D background,state;uniform vec2 texel,cover;
vec3 pond(vec2 uv){vec2 bgUv=(uv-.5)*cover+.5;vec3 bg=texture2D(background,bgUv).rgb;
bool corner=(bgUv.x<.31&&bgUv.y>.54)||(bgUv.x>.76&&bgUv.y<.34);
float leaf=corner?smoothstep(.36,.48,(bg.g-bg.b)/max(bg.g,.01)):0.;float petal=corner?smoothstep(.98,1.18,bg.r/max(bg.g,.01)):0.;return bg;}
float foliage(vec2 uv){vec2 bgUv=(uv-.5)*cover+.5;vec3 bg=texture2D(background,bgUv).rgb;bool corner=(bgUv.x<.31&&bgUv.y>.54)||(bgUv.x>.76&&bgUv.y<.34);float leaf=corner?smoothstep(.36,.48,(bg.g-bg.b)/max(bg.g,.01)):0.;float petal=corner?smoothstep(.98,1.18,bg.r/max(bg.g,.01)):0.;return max(leaf,petal);}
void main(){float left=texture2D(state,vUv-vec2(texel.x,0.)).r,right=texture2D(state,vUv+vec2(texel.x,0.)).r,bottom=texture2D(state,vUv-vec2(0.,texel.y)).r,top=texture2D(state,vUv+vec2(0.,texel.y)).r;
vec2 slope=vec2(left-right,bottom-top)*7.;vec3 color=pond(clamp(vUv+slope*.004,0.,1.));vec3 normal=normalize(vec3(slope,1.)),light=normalize(vec3(-.35,.5,1.));float diffuse=dot(normal,light)-light.z;
vec3 halfLight=normalize(vec3(-.12,.18,1.));float crest=pow(max(0.,dot(normal,halfLight)),42.),calm=pow(halfLight.z,42.);
color+=diffuse*.18; color+=vec3(.73,.86,.76)*max(0.,crest-calm)*.25;color-=vec3(.05,.09,.07)*max(0.,calm-crest)*.3;
gl_FragColor=vec4(clamp(color,0.,1.),max(foliage(vUv),min(.85,length(slope)*1.7)));
#include <colorspace_fragment>
}`;

// Fixed-step height/velocity simulation on GPU, interpolated into every display frame.
export class WaterSurface {
  constructor(canvas,fishCanvas,onFailure){
    this.canvas=canvas;this.fishCanvas=fishCanvas;this.onFailure=onFailure;this.ready=false;this.pending=[];this.accumulator=0;this.steps=0;
    this.renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:false,powerPreference:'high-performance'});
    if(!this.renderer.extensions.has('EXT_color_buffer_float'))throw new Error('显卡不支持浮点水面渲染');
    canvas.style.zIndex='2';fishCanvas.style.zIndex='1';this.renderer.setClearColor(0,0);this.renderer.outputColorSpace=THREE.SRGBColorSpace;this.camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1);
    const geometry=new THREE.PlaneGeometry(2,2);
    this.impacts=Array.from({length:12},()=>new THREE.Vector4());
    this.waveMaterial=new THREE.ShaderMaterial({vertexShader:vertex,fragmentShader:wave,depthTest:false,depthWrite:false,uniforms:{state:{value:null},texel:{value:new THREE.Vector2()},impacts:{value:this.impacts},impactCount:{value:0}}});
    this.waveScene=new THREE.Scene();this.waveScene.add(new THREE.Mesh(geometry,this.waveMaterial));
    this.surfaceMaterial=new THREE.ShaderMaterial({vertexShader:vertex,fragmentShader:surface,transparent:true,depthTest:false,depthWrite:false,uniforms:{background:{value:null},state:{value:null},texel:{value:new THREE.Vector2()},cover:{value:new THREE.Vector2(1,1)}}});
    this.scene=new THREE.Scene();this.scene.add(new THREE.Mesh(geometry,this.surfaceMaterial));
    new THREE.TextureLoader().load('pond.jpg',texture=>{texture.colorSpace=THREE.SRGBColorSpace;texture.minFilter=THREE.LinearFilter;texture.generateMipmaps=false;this.background=texture;this.surfaceMaterial.uniforms.background.value=texture;this.ready=true;this.resize(this.width||innerWidth,this.height||innerHeight);fishCanvas.style.opacity='1';document.body.dataset.waterEngine='three-webgl';},undefined,()=>this.fail('水面背景加载失败'));
    canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();this.fail('显卡上下文丢失，已切换兼容渲染');});
  }
  fail(message){this.ready=false;this.canvas.style.display='none';this.fishCanvas.style.opacity='1';document.body.dataset.waterEngine='canvas-fallback';this.onFailure?.(message);}
  resize(w,h){
    this.width=w;this.height=h;this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.5));this.renderer.setSize(w,h,false);
    const gw=768,gh=Math.max(96,Math.round(gw*h/w));if(this.targets)this.targets.forEach(t=>t.dispose());
    this.targets=[0,1].map(()=>new THREE.WebGLRenderTarget(gw,gh,{type:THREE.HalfFloatType,minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,depthBuffer:false,stencilBuffer:false}));this.read=0;
    this.renderer.setClearColor(0,0);for(const target of this.targets){this.renderer.setRenderTarget(target);this.renderer.clear();}this.renderer.setRenderTarget(null);
    this.waveMaterial.uniforms.texel.value.set(1/gw,1/gh);this.surfaceMaterial.uniforms.texel.value.set(1/gw,1/gh);
    if(this.background){const image=this.background.image,scale=Math.max(w/image.width,h/image.height);this.surfaceMaterial.uniforms.cover.value.set(w/(image.width*scale),h/(image.height*scale));}this.pending.length=0;
  }
  render(sim,dt){
    if(!this.ready||!this.targets)return;
    for(const drop of sim.rainDrops)if(drop.age>=0&&!drop.waterImpact){drop.waterImpact=true;this.pending.push([drop.x/this.width,1-drop.y/this.height,-.14*drop.size,1.6+drop.size]);}
    for(const r of sim.ripples)if(!r.waterImpact){r.waterImpact=true;this.pending.push([r.x/this.width,1-r.y/this.height,-r.strength*.9,2.5*r.scale]);}
    this.accumulator=Math.min(.05,this.accumulator+dt);while(this.accumulator>=1/60){const batch=this.pending.splice(0,12);batch.forEach((d,i)=>this.impacts[i].set(...d));this.waveMaterial.uniforms.impactCount.value=batch.length;this.waveMaterial.uniforms.state.value=this.targets[this.read].texture;this.renderer.setRenderTarget(this.targets[1-this.read]);this.renderer.render(this.waveScene,this.camera);this.read=1-this.read;this.accumulator-=1/60;this.steps++;}
    this.surfaceMaterial.uniforms.state.value=this.targets[this.read].texture;this.renderer.setRenderTarget(null);this.renderer.render(this.scene,this.camera);
  }
}
