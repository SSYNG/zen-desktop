import * as THREE from './lib/three.module.js';
import {CloudsEffect,AerialPerspectiveEffect,PrecomputedTexturesLoader,Ellipsoid,Geodetic,STBNLoader,EffectComposer,RenderPass,NormalPass,EffectPass,Effect,BlendFunction,ToneMappingEffect,ToneMappingMode} from './lib/cloud-engine.js';
import {cloudMinutes,cloudLight} from './cloud-time.js';
const asset=name=>new URL('./cloud-assets/'+name,import.meta.url).href;
const smooth=(a,b,x)=>{const t=THREE.MathUtils.clamp((x-a)/(b-a),0,1);return t*t*(3-2*t);};
function hash(x,z){return THREE.MathUtils.euclideanModulo(Math.sin(x*127.1+z*311.7)*43758.5453,1);}
function noise(x,z){const i=Math.floor(x),j=Math.floor(z),a=smooth(0,1,x-i),b=smooth(0,1,z-j);return THREE.MathUtils.lerp(THREE.MathUtils.lerp(hash(i,j),hash(i+1,j),a),THREE.MathUtils.lerp(hash(i,j+1),hash(i+1,j+1),a),b);}
function height(x,z){
  const peak=(cx,cz,h,sx,sz)=>h*Math.exp(-(((x-cx)/sx)**2+((z-cz)/sz)**2));
  const ridge=Math.max(peak(-3700,800,2700,2100,3900),peak(1200,2200,1450,1700,1900),peak(1800,-11000,2200,3600,2200),peak(6500,-30000,2400,6800,4400),peak(-15000,-22000,1750,6200,5800));
  const n=noise(x/950,z/950)*.54+noise(x/330,z/330)*.27+noise(x/110,z/110)*.13+noise(x/40,z/40)*.06;
  return 200+ridge*(.73+n*.42);
}
function mountains(){
  const geometry=new THREE.PlaneGeometry(46000,54000,280,320);geometry.rotateX(-Math.PI/2);geometry.translate(0,0,-18000);
  const position=geometry.attributes.position,colors=new Float32Array(position.count*3),c=new THREE.Color(),rock=new THREE.Color(.16,.17,.16);
  for(let i=0;i<position.count;i++){const x=position.getX(i),z=position.getZ(i),y=height(x,z);position.setY(i,y);const slope=Math.hypot(height(x+30,z)-height(x-30,z),height(x,z+30)-height(x,z-30))/60,n=noise(x/28,z/28);c.setRGB(.045+n*.045,.075+n*.06,.062+n*.04);if(slope>.65)c.lerp(rock,Math.min(.85,(slope-.65)*.65));colors.set([c.r,c.g,c.b],i*3);}
  geometry.setAttribute('color',new THREE.BufferAttribute(colors,3));geometry.computeVertexNormals();
  // AerialPerspective adds physical sun/sky irradiance to these albedo colours.
  return new THREE.Mesh(geometry,new THREE.MeshBasicMaterial({vertexColors:true}));
}
class NightColour extends Effect {
  constructor(){super('ZenNight',`uniform float night;void mainImage(const vec4 inputColor,const vec2 uv,out vec4 outputColor){float l=dot(inputColor.rgb,vec3(.2126,.7152,.0722));vec3 moonlit=vec3(.08,.14,.24)*l*.12+vec3(.0006,.0012,.0028);vec2 p=uv*vec2(360.,200.),cell=floor(p);float h=fract(sin(dot(cell,vec2(127.1,311.7)))*43758.5453);float star=(1.-smoothstep(.02,.14,length(fract(p)-vec2(h,fract(h*17.)))))*step(.998,h)*smoothstep(.57,.64,uv.y);moonlit+=vec3(.022,.028,.04)*star;outputColor=vec4(mix(inputColor.rgb,moonlit,night),inputColor.a);}`,{blendFunction:BlendFunction.NORMAL,uniforms:new Map([['night',new THREE.Uniform(0)]])});}
}
export class CloudSeaRenderer {
  constructor(canvas,onFailure){
    this.canvas=canvas;this.onFailure=onFailure;this.ready=false;this.elapsed=0;this.frames=0;this.disposed=false;this.textures=[];
    this.renderer=new THREE.WebGLRenderer({canvas,alpha:false,antialias:false,powerPreference:'high-performance'});this.renderer.setPixelRatio(1);this.renderer.outputColorSpace=THREE.SRGBColorSpace;this.renderer.toneMappingExposure=8;
    this.scene=new THREE.Scene();this.scene.background=new THREE.Color('#718baf');this.mountain=mountains();this.scene.add(this.mountain);
    this.camera=new THREE.PerspectiveCamera(48,16/9,10,180000);this.camera.position.set(0,2450,3700);this.camera.lookAt(0,1840,-8000);this.camera.updateMatrixWorld();
    const origin=new Geodetic(THREE.MathUtils.degToRad(110),THREE.MathUtils.degToRad(30),0).toECEF();
    this.worldToECEF=Ellipsoid.WGS84.getEastNorthUpFrame(origin).multiply(new THREE.Matrix4().makeRotationX(Math.PI/2));this.rotation=new THREE.Matrix3().setFromMatrix4(this.worldToECEF);
    this.clouds=new CloudsEffect(this.camera);this.clouds.qualityPreset='high';this.clouds.lightShafts=false;this.clouds.temporalUpscale=false;this.clouds.coverage=.76;this.clouds.cloudsPass.resolveMaterial.uniforms.temporalAlpha.value=.06;
    this.clouds.worldToECEFMatrix.copy(this.worldToECEF);this.clouds.shadow.mapSize.set(256,256);this.clouds.shadow.cascadeCount=2;this.clouds.clouds.maxIterationCount=300;this.clouds.clouds.minStepSize=35;this.clouds.clouds.accurateSunSkyLight=false;this.clouds.clouds.maxIterationCountToGround=1;
    this.clouds.cloudLayers.set([
      {channel:'r',altitude:850,height:950,densityScale:.12,shapeAmount:1,shapeDetailAmount:1.2,coverageFilterWidth:.8,shadow:true},
      {channel:'g',altitude:1550,height:500,densityScale:.035,shapeAmount:.7,shapeDetailAmount:1.3,coverageFilterWidth:.85,shadow:true},
      {channel:'a',altitude:900,height:1300,densityScale:.0006,shapeAmount:.35,shapeDetailAmount:.7,coverageFilterWidth:1,shapeAlteringBias:.6,densityProfile:{constantTerm:.35,linearTerm:0}},
      {channel:'b',altitude:7300,height:0,densityScale:.002,shapeAmount:.4,shapeDetailAmount:0}
    ]);
    // The library advances texture coordinates, not metres: convert world wind.
    this.clouds.shapeVelocity.set(3,0,.75).multiply(this.clouds.shapeRepeat);this.clouds.shapeDetailVelocity.set(4,.15,1).multiply(this.clouds.shapeDetailRepeat);this.clouds.localWeatherVelocity.set(.000007,.000002);this.clouds.turbulenceDisplacement=200;
    this.atmosphere=new AerialPerspectiveEffect(this.camera,{sky:true,sunLight:true,skyLight:true,ground:false});this.atmosphere.worldToECEFMatrix.copy(this.worldToECEF);
    this.nightColour=new NightColour();this.tone=new ToneMappingEffect({mode:ToneMappingMode.ACES_FILMIC});
    this.composer=new EffectComposer(this.renderer,{frameBufferType:THREE.HalfFloatType,multisampling:0});this.composer.addPass(new RenderPass(this.scene,this.camera));this.normalPass=new NormalPass(this.scene,this.camera);this.composer.addPass(this.normalPass);this.atmosphere.normalBuffer=this.normalPass.texture;
    // Separate passes ensure the cloud overlay for THIS frame is available.
    this.composer.addPass(new EffectPass(this.camera,this.clouds));this.composer.addPass(new EffectPass(this.camera,this.atmosphere));this.composer.addPass(new EffectPass(this.camera,this.nightColour,this.tone));
    this.clouds.events.addEventListener('change',()=>{this.atmosphere.overlay=this.clouds.atmosphereOverlay;this.atmosphere.shadow=this.clouds.atmosphereShadow;});
    this.gl=this.renderer.getContext();this.timer=this.gl.getExtension('EXT_disjoint_timer_query_webgl2');this.queries=[];this.gpuMs=null;
    this.contextLost=event=>{event.preventDefault();this.ready=false;this.onFailure?.('云海显卡上下文丢失，已切回赏鱼');};canvas.addEventListener('webglcontextlost',this.contextLost);
    this.loading=this.load().catch(error=>{if(!this.disposed){this.error=error.message;this.onFailure?.('云海资源加载失败：'+error.message);}});
  }
  async load(){
    const loader=new THREE.TextureLoader();
    const image=async name=>{const t=await loader.loadAsync(asset(name));t.minFilter=THREE.LinearMipmapLinearFilter;t.magFilter=THREE.LinearFilter;t.wrapS=t.wrapT=THREE.RepeatWrapping;t.colorSpace=THREE.NoColorSpace;return t;};
    const volume=async(name,size)=>{const response=await fetch(asset(name));if(!response.ok)throw Error(name+' '+response.status);const data=new Uint8Array(await response.arrayBuffer());if(data.length!==size**3)throw Error('无效云体资源：'+name);const t=new THREE.Data3DTexture(data,size,size,size);t.format=THREE.RedFormat;t.minFilter=t.magFilter=THREE.LinearFilter;t.wrapS=t.wrapT=t.wrapR=THREE.RepeatWrapping;t.unpackAlignment=1;t.needsUpdate=true;return t;};
    const results=await Promise.allSettled([image('local_weather.png'),volume('shape.bin',128),volume('shape_detail.bin',32),image('turbulence.png'),new STBNLoader().loadAsync(asset('stbn.bin')),new PrecomputedTexturesLoader({format:'binary',higherOrderScattering:false}).loadAsync(asset(''))]);
    this.textures=results.filter(r=>r.status==='fulfilled').flatMap((r,i)=>r.value?.isTexture?[r.value]:Object.values(r.value));
    if(this.disposed){for(const t of this.textures)t?.dispose();return;}const rejected=results.find(r=>r.status==='rejected');if(rejected)throw rejected.reason;
    const [weather,shape,detail,turbulence,stbn,atmosphere]=results.map(r=>r.value);
    Object.assign(this.clouds,{localWeatherTexture:weather,shapeTexture:shape,shapeDetailTexture:detail,turbulenceTexture:turbulence,stbnTexture:stbn,...atmosphere});Object.assign(this.atmosphere,{stbnTexture:stbn,...atmosphere});this.ready=true;
  }
  resize(w,h){this.width=w;this.height=h;const scale=Math.min(1,1440/w);this.renderer.setSize(Math.round(w*scale),Math.round(h*scale),false);this.composer.setSize(Math.round(w*scale),Math.round(h*scale));this.camera.aspect=w/h;this.camera.updateProjectionMatrix();}
  render(config,dt){
    this.clock={minutes:cloudMinutes(config.cloudMode,config.cloudTime),mode:config.cloudMode};const light=cloudLight(this.clock.minutes);this.clock.phase=light.phase;
    if(!this.ready){this.renderer.setClearColor('#718baf');this.renderer.clear();return;}
    this.elapsed+=dt;const actualSun=new THREE.Vector3(...light.sunDirection),moon=new THREE.Vector3(.35,.25,-1).normalize();
    this.atmosphere.sunDirection.copy(actualSun).applyMatrix3(this.rotation);this.atmosphere.moonDirection.copy(moon).applyMatrix3(this.rotation);
    this.clouds.sunDirection.copy(actualSun).lerp(moon,light.night).normalize().applyMatrix3(this.rotation);this.nightColour.uniforms.get('night').value=light.night;
    this.renderer.toneMappingExposure=THREE.MathUtils.lerp(3.3,8,1-light.daylight)+THREE.MathUtils.lerp(0,4,1-smooth(0,.4,Math.abs(actualSun.y)))*light.daylight;
    const jump=this.lastMinutes!=null&&Math.abs(this.clock.minutes-this.lastMinutes)>2;this.clouds.cloudsPass.resolveMaterial.uniforms.temporalAlpha.value=jump?1:.06;this.lastMinutes=this.clock.minutes;
    const gl=this.gl;let query;if(this.timer){while(this.queries.length&&gl.getQueryParameter(this.queries[0],gl.QUERY_RESULT_AVAILABLE)){const q=this.queries.shift();if(!gl.getParameter(this.timer.GPU_DISJOINT_EXT)){const ms=gl.getQueryParameter(q,gl.QUERY_RESULT)/1e6;if(ms<100)this.gpuMs=this.gpuMs==null?ms:this.gpuMs*.8+ms*.2;}gl.deleteQuery(q);}if(this.frames>60&&this.frames%30===0&&this.queries.length<4){query=gl.createQuery();gl.beginQuery(this.timer.TIME_ELAPSED_EXT,query);}}
    try{this.composer.render(dt);}finally{if(query){gl.endQuery(this.timer.TIME_ELAPSED_EXT);this.queries.push(query);}}this.frames++;
  }
  dispose(){this.disposed=true;this.ready=false;this.canvas.removeEventListener('webglcontextlost',this.contextLost);for(const q of this.queries)this.gl.deleteQuery(q);this.composer.dispose();this.mountain.geometry.dispose();this.mountain.material.dispose();for(const t of this.textures)t?.dispose();this.renderer.dispose();}
}
