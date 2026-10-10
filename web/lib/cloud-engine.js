import{DepthStencilFormat as pc,DepthTexture as rn,FloatType as gc,LinearFilter as ya,SRGBColorSpace as Er,UnsignedByteType as nn,UnsignedInt248Type as vc,Vector2 as Xt,WebGLRenderTarget as Ca}from"./three.module.js";import{BasicDepthPacking as Ac,BufferAttribute as Da,BufferGeometry as Tc,Material as Sc,Mesh as xc,OrthographicCamera as Ec,Scene as Ra,Texture as wc,WebGLRenderTarget as yc}from"./three.module.js";import{LinearFilter as Ia,SRGBColorSpace as _a,UnsignedByteType as Rc,WebGLRenderTarget as Ic}from"./three.module.js";import{AlwaysDepth as _c,NoBlending as Mc,ShaderMaterial as Pc,Uniform as pi}from"./three.module.js";import{Color as Oc}from"./three.module.js";import{LinearSRGBColorSpace as Gc}from"./three.module.js";import{BackSide as gi,DoubleSide as vi,FrontSide as kc,ShaderMaterial as Wc}from"./three.module.js";import{EventDispatcher as Vc,Vector2 as on}from"./three.module.js";import{EventDispatcher as Yc,Uniform as Xc}from"./three.module.js";import{Color as i0,Uniform as n0,Vector2 as a0,Vector4 as s0}from"./three.module.js";import{CanvasTexture as c0,RepeatWrapping as l0}from"./three.module.js";import{BasicDepthPacking as Rl,EventDispatcher as Il,LinearSRGBColorSpace as _l,Material as Ml,NoColorSpace as Pl,Texture as Nl,WebGLRenderTarget as bl}from"./three.module.js";import{SRGBColorSpace as d0,Uniform as f0,WebGLRenderTarget as m0}from"./three.module.js";import{SRGBColorSpace as g0,UnsignedByteType as v0,WebGLRenderTarget as A0}from"./three.module.js";import{NoBlending as S0,ShaderMaterial as x0,Uniform as E0,Vector4 as w0}from"./three.module.js";import{UnsignedByteType as Ol,WebGLRenderTarget as Ul}from"./three.module.js";import{NoBlending as Ll,REVISION as Bl,ShaderMaterial as Fl,Uniform as Ai}from"./three.module.js";import{SRGBColorSpace as I0,UnsignedByteType as _0,Vector2 as M0,WebGLRenderTarget as P0}from"./three.module.js";import{NoBlending as b0,ShaderMaterial as O0,Uniform as U0,Vector2 as L0}from"./three.module.js";import{NoBlending as F0,ShaderMaterial as H0,Uniform as G0,Vector2 as z0}from"./three.module.js";import{Uniform as W0}from"./three.module.js";import{SRGBColorSpace as Y0,Uniform as X0}from"./three.module.js";import{Uniform as Z0}from"./three.module.js";import{Uniform as j0,Vector2 as q0}from"./three.module.js";import{BasicDepthPacking as $0,SRGBColorSpace as em,Uniform as tm,UnsignedByteType as rm,Vector3 as im,WebGLRenderTarget as nm}from"./three.module.js";import{NoBlending as sm,ShaderMaterial as om,Uniform as cm,Vector2 as lm}from"./three.module.js";import{BasicDepthPacking as hm,NoBlending as dm,PerspectiveCamera as fm,ShaderMaterial as mm,Uniform as pm}from"./three.module.js";import{NoBlending as vm,ShaderMaterial as Am,Uniform as Tm,UnsignedByteType as Sm}from"./three.module.js";import{UnsignedByteType as kl}from"./three.module.js";import{Uniform as wm,Vector2 as ym}from"./three.module.js";import{Uniform as Dm}from"./three.module.js";import{NearestFilter as Im,RepeatWrapping as _m,RGBAFormat as Mm,Uniform as Pm,Vector2 as Nm}from"./three.module.js";import{DataTexture as Om,RedFormat as Um,RGFormat as Lm,RGBAFormat as Bm,UnsignedByteType as Fm}from"./three.module.js";import{BasicDepthPacking as Gm,DepthTexture as zm,Matrix4 as km,Scene as Wm,SRGBColorSpace as Vm,Uniform as Ym,Vector2 as Xm,Vector3 as Qm,Vector4 as Zm,WebGLRenderTarget as Km}from"./three.module.js";import{NoBlending as qm,ShaderMaterial as Jm,Uniform as $m}from"./three.module.js";import{Uniform as tp,Vector2 as rp}from"./three.module.js";import{Uniform as np,Vector3 as ap}from"./three.module.js";import{Uniform as op,Vector2 as cp}from"./three.module.js";import{FloatType as up,HalfFloatType as hp,Uniform as dp}from"./three.module.js";import{Data3DTexture as mp,FloatType as pp,HalfFloatType as gp,LinearFilter as vp,NearestFilter as Ap,SRGBColorSpace as Tp,Uniform as Sp,Vector3 as xp}from"./three.module.js";import{Color as wp,ClampToEdgeWrapping as yp,DataTexture as Cp,Data3DTexture as Dp,FloatType as Rp,LinearFilter as Ip,LinearSRGBColorSpace as _p,RGBAFormat as Mp,SRGBColorSpace as Pp,UnsignedByteType as Np,Vector3 as bp}from"./three.module.js";import{Color as Up,RepeatWrapping as Lp,Uniform as Bp,UnsignedByteType as Fp,WebGLRenderTarget as Hp}from"./three.module.js";import{NoBlending as zp,PerspectiveCamera as kp,RGBADepthPacking as Wp,ShaderMaterial as Vp,Uniform as Yp}from"./three.module.js";import{NoBlending as Qp,ShaderMaterial as Zp,Uniform as Kp,Vector2 as jp}from"./three.module.js";import{Color as Jp,MeshDepthMaterial as $p,NearestFilter as e1,RGBADepthPacking as t1,WebGLRenderTarget as r1}from"./three.module.js";import{Uniform as n1,Vector2 as a1,Vector4 as s1}from"./three.module.js";import{Uniform as c1,Vector4 as l1}from"./three.module.js";import{Uniform as h1,Vector2 as d1}from"./three.module.js";import{Uniform as m1,Vector2 as p1,Vector3 as g1}from"./three.module.js";import{BasicDepthPacking as T1,Color as S1,NotEqualDepth as x1,EqualDepth as E1,RGBADepthPacking as w1,SRGBColorSpace as y1,WebGLRenderTarget as C1}from"./three.module.js";import{AlwaysDepth as R1,BasicDepthPacking as I1,EqualDepth as _1,GreaterDepth as M1,GreaterEqualDepth as P1,LessDepth as N1,LessEqualDepth as b1,NeverDepth as O1,NoBlending as U1,NotEqualDepth as L1,PerspectiveCamera as B1,ShaderMaterial as F1,Uniform as H1,Vector2 as G1}from"./three.module.js";import{Uniform as k1,Vector3 as W1}from"./three.module.js";import{BasicDepthPacking as Y1,Color as X1,LinearFilter as Q1,LoadingManager as Z1,NearestFilter as K1,Texture as j1,Uniform as q1,WebGLRenderTarget as J1}from"./three.module.js";import{BasicDepthPacking as eg,NoBlending as tg,REVISION as rg,ShaderMaterial as ig,Uniform as ng,Vector2 as ag}from"./three.module.js";import{NoBlending as og,ShaderMaterial as cg,Uniform as lg,Vector2 as ug}from"./three.module.js";import{BasicDepthPacking as dg,Color as fg,RepeatWrapping as mg,RGBAFormat as pg,Uniform as gg,WebGLRenderTarget as vg}from"./three.module.js";import{BasicDepthPacking as Tg,Matrix4 as Sg,NoBlending as xg,PerspectiveCamera as Eg,ShaderMaterial as wg,Uniform as yg,Vector2 as Cg}from"./three.module.js";import{BasicDepthPacking as Rg,FloatType as Ig,NearestFilter as _g,WebGLRenderTarget as Mg}from"./three.module.js";import{BasicDepthPacking as Ng,NoBlending as bg,ShaderMaterial as Og,Uniform as Ug,Vector2 as Lg}from"./three.module.js";import{Uniform as Fg,UnsignedByteType as Hg}from"./three.module.js";import{SRGBColorSpace as zg,Uniform as kg,Vector2 as Wg,WebGLRenderTarget as Vg}from"./three.module.js";import{Uniform as Xg,Vector2 as Qg,Vector4 as Zg}from"./three.module.js";import{LinearMipmapLinearFilter as Wl,REVISION as Vl,Uniform as wr,WebGLRenderTarget as Yl}from"./three.module.js";import{NearestFilter as Na,WebGLRenderTarget as Xl}from"./three.module.js";import{NoBlending as Ql,ShaderMaterial as Zl,Uniform as yr}from"./three.module.js";import{Uniform as $g}from"./three.module.js";import{FileLoader as tv,Loader as rv,LoadingManager as iv}from"./three.module.js";import{FileLoader as av,Loader as sv,LoadingManager as ov,Vector3 as cv}from"./three.module.js";import{Loader as uv,LoadingManager as hv}from"./three.module.js";import{NoBlending as fv,PerspectiveCamera as mv,ShaderMaterial as pv,Uniform as gv,Vector2 as vv}from"./three.module.js";import{BasicDepthPacking as Tv,NoBlending as Sv,ShaderMaterial as xv,Uniform as Ev,Vector2 as wv}from"./three.module.js";import{BasicDepthPacking as eu,NoBlending as tu,PerspectiveCamera as ru,REVISION as iu,ShaderMaterial as nu,Uniform as It,Vector2 as ba}from"./three.module.js";import{NoBlending as Dv,ShaderMaterial as Rv,Uniform as Iv,Vector2 as _v}from"./three.module.js";import{BasicDepthPacking as Pv,SRGBColorSpace as Nv,UnsignedByteType as bv,WebGLRenderTarget as Ov}from"./three.module.js";import{BasicDepthPacking as Lv,FloatType as Bv,REVISION as cu,RGBADepthPacking as Fv}from"./three.module.js";import{BasicDepthPacking as Gv,FloatType as zv,NearestFilter as kv,RGBADepthPacking as Wv,UnsignedByteType as Vv,WebGLRenderTarget as Yv}from"./three.module.js";import{BasicDepthPacking as lu,NoColorSpace as uu,SRGBColorSpace as Ba,UnsignedByteType as hu}from"./three.module.js";import{SRGBColorSpace as qv,UnsignedByteType as Jv,WebGLRenderTarget as $v}from"./three.module.js";import{Color as mu,MeshNormalMaterial as pu,NearestFilter as Ua,WebGLRenderTarget as gu}from"./three.module.js";import{LoadingManager as u2}from"./three.module.js";var Cc=(()=>{let t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),r=new Tc;return r.setAttribute("position",new Da(t,3)),r.setAttribute("uv",new Da(e,2)),r})(),_e=class ln{static get fullscreenGeometry(){return Cc}constructor(e="Pass",r=new Ra,i=new Ec){this.name=e,this.renderer=null,this.scene=r,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){let r=this.fullscreenMaterial;r!==null&&(r.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let r=this.screen;r!==null?r.material=e:(r=new xc(ln.fullscreenGeometry,e),r.frustumCulled=!1,this.scene===null&&(this.scene=new Ra),this.scene.add(r),this.screen=r)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,r=Ac){}render(e,r,i,a,s){throw new Error("Render method not implemented!")}setSize(e,r){}initialize(e,r,i){}dispose(){for(let e of Object.keys(this)){let r=this[e];(r instanceof yc||r instanceof Sc||r instanceof wc||r instanceof ln)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},Dc=class extends _e{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(t,e,r,i,a){let s=t.state.buffers.stencil;s.setLocked(!1),s.setTest(!1)}},Nc=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,un="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",bc=class extends Pc{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new pi(null),depthBuffer:new pi(null),channelWeights:new pi(null),opacity:new pi(1)},blending:Mc,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Nc,vertexShader:un}),this.depthFunc=_c}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(t){let e=t!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){let e=t!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=t}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(t){this.colorSpaceConversion!==t&&(t?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(t){t!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=t):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(t){this.uniforms.inputBuffer.value=t}getOpacity(t){return this.uniforms.opacity.value}setOpacity(t){this.uniforms.opacity.value=t}},La=class extends _e{constructor(t,e=!0){super("CopyPass"),this.fullscreenMaterial=new bc,this.needsSwap=!1,this.renderTarget=t,t===void 0&&(this.renderTarget=new Ic(1,1,{minFilter:Ia,magFilter:Ia,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(t){this.autoResize=t}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(t){this.autoResize=t}render(t,e,r,i,a){this.fullscreenMaterial.inputBuffer=e.texture,t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){this.autoResize&&this.renderTarget.setSize(t,e)}initialize(t,e,r){r!==void 0&&(this.renderTarget.texture.type=r,r!==Rc?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":t!==null&&t.outputColorSpace===_a&&(this.renderTarget.texture.colorSpace=_a))}},Ma=new Oc,hn=class extends _e{constructor(t=!0,e=!0,r=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=t,this.depth=e,this.stencil=r,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(t,e,r){this.color=t,this.depth=e,this.stencil=r}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(t){this.overrideClearColor=t}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(t){this.overrideClearAlpha=t}render(t,e,r,i,a){let s=this.overrideClearColor,o=this.overrideClearAlpha,u=t.getClearAlpha(),f=s!==null,p=o>=0;f?(t.getClearColor(Ma),t.setClearColor(s,p?o:u)):p&&t.setClearAlpha(o),t.setRenderTarget(this.renderToScreen?null:e),t.clear(this.color,this.depth,this.stencil),f?t.setClearColor(Ma,u):p&&t.setClearAlpha(u)}},Uc=class extends _e{constructor(t,e){super("MaskPass",t,e),this.needsSwap=!1,this.clearPass=new hn(!1,!1,!0),this.inverse=!1}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get inverted(){return this.inverse}set inverted(t){this.inverse=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(t){this.inverted=t}render(t,e,r,i,a){let s=t.getContext(),o=t.state.buffers,u=this.scene,f=this.camera,p=this.clearPass,x=this.inverted?0:1,y=1-x;o.color.setMask(!1),o.depth.setMask(!1),o.color.setLocked(!0),o.depth.setLocked(!0),o.stencil.setTest(!0),o.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.stencil.setFunc(s.ALWAYS,x,4294967295),o.stencil.setClear(y),o.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?p.render(t,null):(p.render(t,e),p.render(t,r))),this.renderToScreen?(t.setRenderTarget(null),t.render(u,f)):(t.setRenderTarget(e),t.render(u,f),t.setRenderTarget(r),t.render(u,f)),o.color.setLocked(!1),o.depth.setLocked(!1),o.stencil.setLocked(!1),o.stencil.setFunc(s.EQUAL,1,4294967295),o.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.stencil.setLocked(!0)}};function Lc(t,e){let r=t.getContext();if(e<=0||typeof r.renderbufferStorageMultisample!="function")return 0;let i=r.getParameter(r.MAX_SAMPLES),a=Math.min(e,i);if(a<=0)return 0;let s=r.getParameter(r.RENDERBUFFER_BINDING),o=r.createRenderbuffer();try{return r.bindRenderbuffer(r.RENDERBUFFER,o),r.renderbufferStorageMultisample(r.RENDERBUFFER,a,r.RGBA8,1,1),a}catch{return 0}finally{r.bindRenderbuffer(r.RENDERBUFFER,s),r.deleteRenderbuffer(o)}}var an=1/1e3,Bc=1e3,Fc=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(t){typeof document<"u"&&document.hidden!==void 0&&(t?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=t)}get delta(){return this._delta*an}get fixedDelta(){return this._fixedDelta*an}set fixedDelta(t){this._fixedDelta=t*Bc}get elapsed(){return this._elapsed*an}update(t){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(t!==void 0?t:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(t){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},Hc=class{constructor(t=null,{depthBuffer:e=!0,stencilBuffer:r=!1,multisampling:i=0,frameBufferType:a=nn}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,r,a,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new La,this.depthRenderTarget=null,this.passes=[],this.timer=new Fc,this.autoRenderToScreen=!0,this.setRenderer(t)}get stableDepthTexture(){return this.depthRenderTarget===null?null:this.depthRenderTarget.depthTexture}get multisampling(){return this.inputBuffer.samples}set multisampling(t){let e=this.renderer===null?t:Lc(this.renderer,t);this.multisampling!==e&&(this.inputBuffer.samples=e,this.outputBuffer.samples=e,this.inputBuffer.dispose(),this.outputBuffer.dispose())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(t){if(this.renderer=t,t!==null){let e=t.getSize(new Xt),r=t.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===nn&&t.outputColorSpace===Er&&(this.inputBuffer.texture.colorSpace=Er,this.outputBuffer.texture.colorSpace=Er,this.inputBuffer.dispose(),this.outputBuffer.dispose());let a=this.multisampling;this.multisampling=a,t.autoClear=!1,this.setSize(e.width,e.height);for(let s of this.passes)s.initialize(t,r,i)}}replaceRenderer(t,e=!0){let r=this.renderer,i=r.domElement.parentNode;return this.setRenderer(t),e&&i!==null&&(i.removeChild(r.domElement),i.appendChild(t.domElement)),r}createDepthTexture(){let t=new rn;t.name="EffectComposer.InputDepth",this.inputBuffer.stencilBuffer?(t.format=pc,t.type=vc):t.type=gc;let e=new rn;e.format=t.format,e.type=t.type,e.name="EffectComposer.OutputDepth";let r=new rn;r.format=t.format,r.type=t.type,r.name="EffectComposer.StableDepth",this.inputBuffer.depthTexture=t,this.outputBuffer.depthTexture=e,this.inputBuffer.dispose(),this.outputBuffer.dispose();let{width:i,height:a}=this.inputBuffer;this.depthRenderTarget=new Ca(i,a,{depthBuffer:!0,stencilBuffer:this.inputBuffer.stencilBuffer,depthTexture:r})}blitDepthBuffer(t){let e=this.renderer,r=this.depthRenderTarget,i=e.properties,a=e.getContext();e.setRenderTarget(r);let s=i.get(t).__webglFramebuffer,o=i.get(r).__webglFramebuffer,u=t.stencilBuffer?a.DEPTH_BUFFER_BIT|a.STENCIL_BUFFER_BIT:a.DEPTH_BUFFER_BIT;a.bindFramebuffer(a.READ_FRAMEBUFFER,s),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,o),a.blitFramebuffer(0,0,t.width,t.height,0,0,r.width,r.height,u,a.NEAREST),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){let t=this.stableDepthTexture;for(let e of this.passes)e.getDepthTexture()===t&&e.setDepthTexture(null);this.depthRenderTarget!==null&&(this.depthRenderTarget.dispose(),this.depthRenderTarget=null),this.inputBuffer.depthTexture!==null&&(this.inputBuffer.depthTexture.dispose(),this.inputBuffer.depthTexture=null),this.outputBuffer.depthTexture!==null&&(this.outputBuffer.depthTexture.dispose(),this.outputBuffer.depthTexture=null)}createBuffer(t,e,r,i){let a=this.renderer,s=a===null?new Xt:a.getDrawingBufferSize(new Xt),o=new Ca(s.width,s.height,{minFilter:ya,magFilter:ya,samples:i,stencilBuffer:e,depthBuffer:t,type:r});return r===nn&&a!==null&&a.outputColorSpace===Er&&(o.texture.colorSpace=Er),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(t){for(let e of this.passes)e.mainScene=t}setMainCamera(t){for(let e of this.passes)e.mainCamera=t}addPass(t,e){let r=this.passes,i=this.renderer,a=i.getDrawingBufferSize(new Xt),s=i.getContext().getContextAttributes().alpha,o=this.inputBuffer.texture.type;if(t.renderer=i,t.setSize(a.width,a.height),t.initialize(i,s,o),this.autoRenderToScreen&&(r.length>0&&(r[r.length-1].renderToScreen=!1),t.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?r.splice(e,0,t):r.push(t),this.autoRenderToScreen&&(r[r.length-1].renderToScreen=!0),t.needsDepthTexture||this.depthRenderTarget!==null)if(this.depthRenderTarget===null){this.createDepthTexture();for(let u of r)u.setDepthTexture(this.stableDepthTexture)}else t.setDepthTexture(this.stableDepthTexture)}removePass(t){let e=this.passes,r=e.indexOf(t);if(r!==-1&&e.splice(r,1).length>0){let s=this.stableDepthTexture;if(s!==null){let o=(f,p)=>f||p.needsDepthTexture;e.reduce(o,!1)||(t.getDepthTexture()===s&&t.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&r===e.length&&(t.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){let t=this.passes;this.deleteDepthTexture(),t.length>0&&(this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!1),this.passes=[])}render(t){let e=this.renderer,r=this.copyPass,i=this.inputBuffer,a=this.outputBuffer,s,o=!1;t===void 0&&(this.timer.update(),t=this.timer.getDelta());for(let u of this.passes)if(u.enabled){if(u.render(e,i,a,t,o),u.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),u.needsSwap){if(o){r.renderToScreen=u.renderToScreen;let f=e.getContext(),p=e.state.buffers.stencil;p.setFunc(f.NOTEQUAL,1,4294967295),r.render(e,i,a,t,o),p.setFunc(f.EQUAL,1,4294967295)}s=i,i=a,a=s}u instanceof Uc?o=!0:u instanceof Dc&&(o=!1)}}setSize(t,e,r){let i=this.renderer,a=i.getSize(new Xt);(t===void 0||e===void 0)&&(t=a.width,e=a.height),(a.width!==t||a.height!==e)&&i.setSize(t,e,r);let s=i.getDrawingBufferSize(new Xt);this.inputBuffer.setSize(s.width,s.height),this.outputBuffer.setSize(s.width,s.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(s.width,s.height);for(let o of this.passes)o.setSize(s.width,s.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(let t of this.passes)t.dispose();this.deleteDepthTexture(),this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.copyPass.dispose(),this.timer.dispose(),this.passes=[],_e.fullscreenGeometry.dispose()}},je={NONE:0,DEPTH:1,CONVOLUTION:2},K={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},zc=class{constructor(){this.shaderParts=new Map([[K.FRAGMENT_HEAD,null],[K.FRAGMENT_MAIN_UV,null],[K.FRAGMENT_MAIN_IMAGE,null],[K.VERTEX_HEAD,null],[K.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=je.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Gc}};var sn=!1,Pa=class{constructor(t=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(t),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let r;if(e.material.flatShading)switch(e.material.side){case vi:r=this.materialsFlatShadedDoubleSide;break;case gi:r=this.materialsFlatShadedBackSide;break;default:r=this.materialsFlatShaded;break}else switch(e.material.side){case vi:r=this.materialsDoubleSide;break;case gi:r=this.materialsBackSide;break;default:r=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=r[2]:e.isInstancedMesh?e.material=r[1]:e.material=r[0],++this.meshCount}}}cloneMaterial(t){if(!(t instanceof Wc))return t.clone();let e=t.uniforms,r=new Map;for(let a in e){let s=e[a].value;s.isRenderTargetTexture&&(e[a].value=null,r.set(a,s))}let i=t.clone();for(let a of r)e[a[0]].value=a[1],i.uniforms[a[0]].value=a[1];return i}setMaterial(t){if(this.disposeMaterials(),this.material=t,t!==null){let e=this.materials=[this.cloneMaterial(t),this.cloneMaterial(t),this.cloneMaterial(t)];for(let r of e)r.uniforms=Object.assign({},t.uniforms),r.side=kc;e[2].skinning=!0,this.materialsBackSide=e.map(r=>{let i=this.cloneMaterial(r);return i.uniforms=Object.assign({},t.uniforms),i.side=gi,i}),this.materialsDoubleSide=e.map(r=>{let i=this.cloneMaterial(r);return i.uniforms=Object.assign({},t.uniforms),i.side=vi,i}),this.materialsFlatShaded=e.map(r=>{let i=this.cloneMaterial(r);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(r=>{let i=this.cloneMaterial(r);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=gi,i}),this.materialsFlatShadedDoubleSide=e.map(r=>{let i=this.cloneMaterial(r);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=vi,i})}}render(t,e,r){let i=t.shadowMap.enabled;if(t.shadowMap.enabled=!1,sn){let a=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),t.render(e,r);for(let s of a)s[0].material=s[1];this.meshCount!==a.size&&a.clear()}else{let a=e.overrideMaterial;e.overrideMaterial=this.material,t.render(e,r),e.overrideMaterial=a}t.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){let t=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(let e of t)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return sn}static set workaroundEnabled(t){sn=t}};var Rt=-1,st=class extends Vc{constructor(t=null,e=Rt,r=Rt,i=1){super(),t!==null&&this.addEventListener("change",()=>t.setSize(this.baseSize.width,this.baseSize.height)),this.baseSize=new on(1,1),this.preferredSize=new on(e,r),this.target=this.preferredSize,this.s=i,this.effectiveSize=new on,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){let t=this.baseSize,e=this.preferredSize,r=this.effectiveSize,i=this.scale;e.width!==Rt?r.width=e.width:e.height!==Rt?r.width=Math.round(e.height*(t.width/Math.max(t.height,1))):r.width=Math.round(t.width*i),e.height!==Rt?r.height=e.height:e.width!==Rt?r.height=Math.round(e.width/Math.max(t.width/Math.max(t.height,1),1)):r.height=Math.round(t.height*i)}get width(){return this.effectiveSize.width}set width(t){this.preferredWidth=t}get height(){return this.effectiveSize.height}set height(t){this.preferredHeight=t}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(t){this.s!==t&&(this.s=t,this.preferredSize.setScalar(Rt),this.dispatchEvent({type:"change"}))}getScale(){return this.scale}setScale(t){this.scale=t}get baseWidth(){return this.baseSize.width}set baseWidth(t){this.baseSize.width!==t&&(this.baseSize.width=t,this.dispatchEvent({type:"change"}))}getBaseWidth(){return this.baseWidth}setBaseWidth(t){this.baseWidth=t}get baseHeight(){return this.baseSize.height}set baseHeight(t){this.baseSize.height!==t&&(this.baseSize.height=t,this.dispatchEvent({type:"change"}))}getBaseHeight(){return this.baseHeight}setBaseHeight(t){this.baseHeight=t}setBaseSize(t,e){(this.baseSize.width!==t||this.baseSize.height!==e)&&(this.baseSize.set(t,e),this.dispatchEvent({type:"change"}))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(t){this.preferredSize.width!==t&&(this.preferredSize.width=t,this.dispatchEvent({type:"change"}))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(t){this.preferredWidth=t}get preferredHeight(){return this.preferredSize.height}set preferredHeight(t){this.preferredSize.height!==t&&(this.preferredSize.height=t,this.dispatchEvent({type:"change"}))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(t){this.preferredHeight=t}setPreferredSize(t,e){(this.preferredSize.width!==t||this.preferredSize.height!==e)&&(this.preferredSize.set(t,e),this.dispatchEvent({type:"change"}))}copy(t){this.s=t.scale,this.baseSize.set(t.baseWidth,t.baseHeight),this.preferredSize.set(t.preferredWidth,t.preferredHeight),this.dispatchEvent({type:"change"})}static get AUTO_SIZE(){return Rt}};var z={SKIP:9,SET:30,ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},Qc="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Zc="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",Kc="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",jc="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qc="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Jc="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$c="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",el="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",tl="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",rl="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",il="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",nl="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",al="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",sl="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ol="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",cl="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ll="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ul="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",hl="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",dl="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",fl="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ml="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",pl="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",gl="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",vl="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Al="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Tl="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Sl="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",xl="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",El="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",wl="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yl="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Cl=new Map([[z.ADD,Qc],[z.ALPHA,Zc],[z.AVERAGE,Kc],[z.COLOR,jc],[z.COLOR_BURN,qc],[z.COLOR_DODGE,Jc],[z.DARKEN,$c],[z.DIFFERENCE,el],[z.DIVIDE,tl],[z.DST,null],[z.EXCLUSION,rl],[z.HARD_LIGHT,il],[z.HARD_MIX,nl],[z.HUE,al],[z.INVERT,sl],[z.INVERT_RGB,ol],[z.LIGHTEN,cl],[z.LINEAR_BURN,ll],[z.LINEAR_DODGE,ul],[z.LINEAR_LIGHT,hl],[z.LUMINOSITY,dl],[z.MULTIPLY,fl],[z.NEGATION,ml],[z.NORMAL,pl],[z.OVERLAY,gl],[z.PIN_LIGHT,vl],[z.REFLECT,Al],[z.SATURATION,Tl],[z.SCREEN,Sl],[z.SOFT_LIGHT,xl],[z.SRC,El],[z.SUBTRACT,wl],[z.VIVID_LIGHT,yl]]),Dl=class extends Yc{constructor(t,e=1){super(),this._blendFunction=t,this.opacity=new Xc(e)}getOpacity(){return this.opacity.value}setOpacity(t){this.opacity.value=t}get blendFunction(){return this._blendFunction}set blendFunction(t){this._blendFunction=t,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t}getShaderCode(){return Cl.get(this.blendFunction)}};var Qt=class extends Il{constructor(t,e,{attributes:r=je.NONE,blendFunction:i=z.NORMAL,defines:a=new Map,uniforms:s=new Map,extensions:o=null,vertexShader:u=null}={}){super(),this.name=t,this.renderer=null,this.attributes=r,this.fragmentShader=e,this.vertexShader=u,this.defines=a,this.uniforms=s,this.extensions=o,this.blendMode=new Dl(i),this.blendMode.addEventListener("change",f=>this.setChanged()),this._inputColorSpace=_l,this._outputColorSpace=Pl}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(t){this._inputColorSpace=t,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t,this.setChanged()}set mainScene(t){}set mainCamera(t){}getName(){return this.name}setRenderer(t){this.renderer=t}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(t){this.attributes=t,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(t){this.fragmentShader=t,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(t){this.vertexShader=t,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(t,e=Rl){}update(t,e,r){}setSize(t,e){}initialize(t,e,r){}dispose(){for(let t of Object.keys(this)){let e=this[t];(e instanceof bl||e instanceof Ml||e instanceof Nl||e instanceof _e)&&this[t].dispose()}}};var y0=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])];var Hl=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,Gl=class extends Fl{constructor(t=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:Bl.replace(/\D+/g,"")},uniforms:{inputBuffer:new Ai(null),threshold:new Ai(0),smoothing:new Ai(1),range:new Ai(null)},blending:Ll,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Hl,vertexShader:un}),this.colorOutput=t,this.luminanceRange=e}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get threshold(){return this.uniforms.threshold.value}set threshold(t){this.smoothing>0||t>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=t}getThreshold(){return this.threshold}setThreshold(t){this.threshold=t}get smoothing(){return this.uniforms.smoothing.value}set smoothing(t){this.threshold>0||t>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=t}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(t){this.smoothing=t}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(t){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(t){t?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(t){return this.colorOutput}setColorOutputEnabled(t){this.colorOutput=t}get useRange(){return this.luminanceRange!==null}set useRange(t){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(t){t!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=t,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(t){this.luminanceRange=t}},zl=class extends _e{constructor({renderTarget:t,luminanceRange:e,colorOutput:r,resolutionScale:i=1,width:a=st.AUTO_SIZE,height:s=st.AUTO_SIZE,resolutionX:o=a,resolutionY:u=s}={}){super("LuminancePass"),this.fullscreenMaterial=new Gl(r,e),this.needsSwap=!1,this.renderTarget=t,this.renderTarget===void 0&&(this.renderTarget=new Ul(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");let f=this.resolution=new st(this,o,u,i);f.addEventListener("change",p=>this.setSize(f.baseWidth,f.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(t,e,r,i,a){let s=this.fullscreenMaterial;s.inputBuffer=e.texture,t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){let r=this.resolution;r.setBaseSize(t,e),this.renderTarget.setSize(r.width,r.height)}initialize(t,e,r){r!==void 0&&r!==Ol&&(this.renderTarget.texture.type=r,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}};var Cr=class extends _e{constructor(t,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=t,this.input=e}setInput(t){this.input=t}render(t,e,r,i,a){let s=this.fullscreenMaterial.uniforms;e!==null&&s!==void 0&&s[this.input]!==void 0&&(s[this.input].value=e.texture),t.setRenderTarget(this.renderToScreen?null:r),t.render(this.scene,this.camera)}initialize(t,e,r){r!==void 0&&r!==kl&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}};var dn=class extends _e{constructor(t,e,r=null){super("RenderPass",t,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new hn,this.overrideMaterialManager=r===null?null:new Pa(r),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get renderToScreen(){return super.renderToScreen}set renderToScreen(t){super.renderToScreen=t,this.clearPass.renderToScreen=t}get overrideMaterial(){let t=this.overrideMaterialManager;return t!==null?t.material:null}set overrideMaterial(t){let e=this.overrideMaterialManager;t!==null?e!==null?e.setMaterial(t):this.overrideMaterialManager=new Pa(t):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(t){this.overrideMaterial=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getSelection(){return this.selection}setSelection(t){this.selection=t}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(t){this.ignoreBackground=t}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(t){this.skipShadowMapUpdate=t}getClearPass(){return this.clearPass}render(t,e,r,i,a){let s=this.scene,o=this.camera,u=this.selection,f=o.layers.mask,p=s.background,x=t.shadowMap.autoUpdate,y=this.renderToScreen?null:e;u!==null&&o.layers.set(u.getLayer()),this.skipShadowMapUpdate&&(t.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(s.background=null),this.clearPass.enabled&&this.clearPass.render(t,e),t.setRenderTarget(y),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(t,s,o):t.render(s,o),o.layers.mask=f,s.background=p,t.shadowMap.autoUpdate=x}};var Ne={LINEAR:0,REINHARD:1,REINHARD2:2,REINHARD2_ADAPTIVE:3,UNCHARTED2:4,OPTIMIZED_CINEON:5,CINEON:5,ACES_FILMIC:6,AGX:7,NEUTRAL:8};var v1=Math.PI*.5;var Kl=`#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,jl=class extends Zl{constructor(){super({name:"AdaptiveLuminanceMaterial",defines:{MIP_LEVEL_1X1:"0.0"},uniforms:{luminanceBuffer0:new yr(null),luminanceBuffer1:new yr(null),minLuminance:new yr(.01),deltaTime:new yr(0),tau:new yr(1)},extensions:{shaderTextureLOD:!0},blending:Ql,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Kl,vertexShader:un})}set luminanceBuffer0(t){this.uniforms.luminanceBuffer0.value=t}setLuminanceBuffer0(t){this.uniforms.luminanceBuffer0.value=t}set luminanceBuffer1(t){this.uniforms.luminanceBuffer1.value=t}setLuminanceBuffer1(t){this.uniforms.luminanceBuffer1.value=t}set mipLevel1x1(t){this.defines.MIP_LEVEL_1X1=t.toFixed(1),this.needsUpdate=!0}setMipLevel1x1(t){this.mipLevel1x1=t}set deltaTime(t){this.uniforms.deltaTime.value=t}setDeltaTime(t){this.uniforms.deltaTime.value=t}get minLuminance(){return this.uniforms.minLuminance.value}set minLuminance(t){this.uniforms.minLuminance.value=t}getMinLuminance(){return this.uniforms.minLuminance.value}setMinLuminance(t){this.uniforms.minLuminance.value=t}get adaptationRate(){return this.uniforms.tau.value}set adaptationRate(t){this.uniforms.tau.value=t}getAdaptationRate(){return this.uniforms.tau.value}setAdaptationRate(t){this.uniforms.tau.value=t}},ql=class extends _e{constructor(t,{minLuminance:e=.01,adaptationRate:r=1}={}){super("AdaptiveLuminancePass"),this.fullscreenMaterial=new jl,this.needsSwap=!1,this.renderTargetPrevious=new Xl(1,1,{minFilter:Na,magFilter:Na,depthBuffer:!1}),this.renderTargetPrevious.texture.name="Luminance.Previous";let i=this.fullscreenMaterial;i.luminanceBuffer0=this.renderTargetPrevious.texture,i.luminanceBuffer1=t,i.minLuminance=e,i.adaptationRate=r,this.renderTargetAdapted=this.renderTargetPrevious.clone(),this.renderTargetAdapted.texture.name="Luminance.Adapted",this.copyPass=new La(this.renderTargetPrevious,!1)}get texture(){return this.renderTargetAdapted.texture}getTexture(){return this.renderTargetAdapted.texture}set mipLevel1x1(t){this.fullscreenMaterial.mipLevel1x1=t}get adaptationRate(){return this.fullscreenMaterial.adaptationRate}set adaptationRate(t){this.fullscreenMaterial.adaptationRate=t}render(t,e,r,i,a){this.fullscreenMaterial.deltaTime=i,t.setRenderTarget(this.renderToScreen?null:this.renderTargetAdapted),t.render(this.scene,this.camera),this.copyPass.render(t,this.renderTargetAdapted)}},Jl=`#include <tonemapping_pars_fragment>
uniform float whitePoint;
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
uniform float middleGrey;
#if TONE_MAPPING_MODE == 3
uniform lowp sampler2D luminanceBuffer;
#else
uniform float averageLuminance;
#endif
vec3 Reinhard2ToneMapping(vec3 color){color*=toneMappingExposure;float l=luminance(color);
#if TONE_MAPPING_MODE == 3
float lumAvg=unpackRGBAToFloat(texture2D(luminanceBuffer,vec2(0.5)));
#else
float lumAvg=averageLuminance;
#endif
float lumScaled=(l*middleGrey)/max(lumAvg,1e-6);float lumCompressed=lumScaled*(1.0+lumScaled/(whitePoint*whitePoint));lumCompressed/=(1.0+lumScaled);return clamp(lumCompressed*color,0.0,1.0);}
#elif TONE_MAPPING_MODE == 4
#define A 0.15
#define B 0.50
#define C 0.10
#define D 0.20
#define E 0.02
#define F 0.30
vec3 Uncharted2Helper(const in vec3 x){return((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;}vec3 Uncharted2ToneMapping(vec3 color){color*=toneMappingExposure;return clamp(Uncharted2Helper(color)/Uncharted2Helper(vec3(whitePoint)),0.0,1.0);}
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
outputColor=vec4(Reinhard2ToneMapping(inputColor.rgb),inputColor.a);
#elif TONE_MAPPING_MODE == 4
outputColor=vec4(Uncharted2ToneMapping(inputColor.rgb),inputColor.a);
#else
outputColor=vec4(toneMapping(inputColor.rgb),inputColor.a);
#endif
}`,$l=class extends Qt{constructor({blendFunction:t=z.SRC,adaptive:e=!1,mode:r=e?Ne.REINHARD2_ADAPTIVE:Ne.AGX,resolution:i=256,maxLuminance:a=4,whitePoint:s=a,middleGrey:o=.6,minLuminance:u=.01,averageLuminance:f=1,adaptationRate:p=1}={}){super("ToneMappingEffect",Jl,{blendFunction:t,uniforms:new Map([["luminanceBuffer",new wr(null)],["maxLuminance",new wr(a)],["whitePoint",new wr(s)],["middleGrey",new wr(o)],["averageLuminance",new wr(f)]])}),this.renderTargetLuminance=new Yl(1,1,{minFilter:Wl,depthBuffer:!1}),this.renderTargetLuminance.texture.generateMipmaps=!0,this.renderTargetLuminance.texture.name="Luminance",this.luminancePass=new zl({renderTarget:this.renderTargetLuminance}),this.adaptiveLuminancePass=new ql(this.luminancePass.texture,{minLuminance:u,adaptationRate:p}),this.uniforms.get("luminanceBuffer").value=this.adaptiveLuminancePass.texture,this.resolution=i,this.mode=r}get mode(){return Number(this.defines.get("TONE_MAPPING_MODE"))}set mode(t){if(this.mode===t)return;let r=Vl.replace(/\D+/g,"")>=168?"CineonToneMapping(texel)":"OptimizedCineonToneMapping(texel)";switch(this.defines.clear(),this.defines.set("TONE_MAPPING_MODE",t.toFixed(0)),t){case Ne.LINEAR:this.defines.set("toneMapping(texel)","LinearToneMapping(texel)");break;case Ne.REINHARD:this.defines.set("toneMapping(texel)","ReinhardToneMapping(texel)");break;case Ne.CINEON:case Ne.OPTIMIZED_CINEON:this.defines.set("toneMapping(texel)",r);break;case Ne.ACES_FILMIC:this.defines.set("toneMapping(texel)","ACESFilmicToneMapping(texel)");break;case Ne.AGX:this.defines.set("toneMapping(texel)","AgXToneMapping(texel)");break;case Ne.NEUTRAL:this.defines.set("toneMapping(texel)","NeutralToneMapping(texel)");break;default:this.defines.set("toneMapping(texel)","texel");break}this.adaptiveLuminancePass.enabled=t===Ne.REINHARD2_ADAPTIVE,this.setChanged()}getMode(){return this.mode}setMode(t){this.mode=t}get whitePoint(){return this.uniforms.get("whitePoint").value}set whitePoint(t){this.uniforms.get("whitePoint").value=t}get middleGrey(){return this.uniforms.get("middleGrey").value}set middleGrey(t){this.uniforms.get("middleGrey").value=t}get averageLuminance(){return this.uniforms.get("averageLuminance").value}set averageLuminance(t){this.uniforms.get("averageLuminance").value=t}get adaptiveLuminanceMaterial(){return this.adaptiveLuminancePass.fullscreenMaterial}getAdaptiveLuminanceMaterial(){return this.adaptiveLuminanceMaterial}get resolution(){return this.luminancePass.resolution.width}set resolution(t){let e=Math.max(0,Math.ceil(Math.log2(t))),r=Math.pow(2,e);this.luminancePass.resolution.setPreferredSize(r,r),this.adaptiveLuminanceMaterial.mipLevel1x1=e}getResolution(){return this.resolution}setResolution(t){this.resolution=t}get adaptive(){return this.mode===Ne.REINHARD2_ADAPTIVE}set adaptive(t){this.mode=t?Ne.REINHARD2_ADAPTIVE:Ne.REINHARD2}get adaptationRate(){return this.adaptiveLuminanceMaterial.adaptationRate}set adaptationRate(t){this.adaptiveLuminanceMaterial.adaptationRate=t}get distinction(){return console.warn(this.name,"distinction was removed."),1}set distinction(t){console.warn(this.name,"distinction was removed.")}update(t,e,r){this.adaptiveLuminancePass.enabled&&(this.luminancePass.render(t,e),this.adaptiveLuminancePass.render(t,null,null,r))}initialize(t,e,r){this.adaptiveLuminancePass.initialize(t,e,r)}};var au=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,su="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",ou=class extends nu{constructor(t,e,r,i,a=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:iu.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new It(null),depthBuffer:new It(null),resolution:new It(new ba),texelSize:new It(new ba),cameraNear:new It(.3),cameraFar:new It(1e3),aspect:new It(1),time:new It(0)},blending:tu,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:a}),t&&this.setShaderParts(t),e&&this.setDefines(e),r&&this.setUniforms(r),this.copyCameraSettings(i)}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){this.uniforms.depthBuffer.value=t}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}setDepthBuffer(t,e=eu){this.depthBuffer=t,this.depthPacking=e}setShaderData(t){this.setShaderParts(t.shaderParts),this.setDefines(t.defines),this.setUniforms(t.uniforms),this.setExtensions(t.extensions)}setShaderParts(t){return this.fragmentShader=au.replace(K.FRAGMENT_HEAD,t.get(K.FRAGMENT_HEAD)||"").replace(K.FRAGMENT_MAIN_UV,t.get(K.FRAGMENT_MAIN_UV)||"").replace(K.FRAGMENT_MAIN_IMAGE,t.get(K.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=su.replace(K.VERTEX_HEAD,t.get(K.VERTEX_HEAD)||"").replace(K.VERTEX_MAIN_SUPPORT,t.get(K.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(t){for(let e of t.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(t){for(let e of t.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(t){this.extensions={};for(let e of t)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(t){this.encodeOutput!==t&&(t?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(t){return this.encodeOutput}setOutputEncodingEnabled(t){this.encodeOutput=t}get time(){return this.uniforms.time.value}set time(t){this.uniforms.time.value=t}setDeltaTime(t){this.uniforms.time.value+=t}adoptCameraSettings(t){this.copyCameraSettings(t)}copyCameraSettings(t){t&&(this.uniforms.cameraNear.value=t.near,this.uniforms.cameraFar.value=t.far,t instanceof ru?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(t,e){let r=this.uniforms;r.resolution.value.set(t,e),r.texelSize.value.set(1/t,1/e),r.aspect.value=t/e}static get Section(){return K}};var Xv=Number(cu.replace(/\D+/g,"")),Ot=255/256,Qv=new Float32Array([Ot/256**3,Ot/256**2,Ot/256,Ot]),Zv=new Float32Array([Ot,Ot/256,Ot/256**2,1/256**3]);function Oa(t,e,r){for(let i of e){let a="$1"+t+i.charAt(0).toUpperCase()+i.slice(1),s=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(let o of r.entries())o[1]!==null&&r.set(o[0],o[1].replace(s,a))}}function du(t,e,r){let i=e.getFragmentShader(),a=e.getVertexShader(),s=i!==void 0&&/mainImage/.test(i),o=i!==void 0&&/mainUv/.test(i);if(r.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(o&&(r.attributes&je.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!s&&!o)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{let u=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,f=r.shaderParts,p=f.get(K.FRAGMENT_HEAD)||"",x=f.get(K.FRAGMENT_MAIN_UV)||"",y=f.get(K.FRAGMENT_MAIN_IMAGE)||"",U=f.get(K.VERTEX_HEAD)||"",V=f.get(K.VERTEX_MAIN_SUPPORT)||"",se=new Set,j=new Set;if(o&&(x+=`	${t}MainUv(UV);
`,r.uvTransformation=!0),a!==null&&/mainSupport/.test(a)){let ie=/mainSupport *\([\w\s]*?uv\s*?\)/.test(a);V+=`	${t}MainSupport(`,V+=ie?`vUv);
`:`);
`;for(let X of a.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(let de of X[1].split(/\s*,\s*/))r.varyings.add(de),se.add(de),j.add(de);for(let X of a.matchAll(u))j.add(X[1])}for(let ie of i.matchAll(u))j.add(ie[1]);for(let ie of e.defines.keys())j.add(ie.replace(/\([\w\s,]*\)/g,""));for(let ie of e.uniforms.keys())j.add(ie);j.delete("while"),j.delete("for"),j.delete("if"),e.uniforms.forEach((ie,X)=>r.uniforms.set(t+X.charAt(0).toUpperCase()+X.slice(1),ie)),e.defines.forEach((ie,X)=>r.defines.set(t+X.charAt(0).toUpperCase()+X.slice(1),ie));let he=new Map([["fragment",i],["vertex",a]]);Oa(t,j,r.defines),Oa(t,j,he),i=he.get("fragment"),a=he.get("vertex");let ge=e.blendMode;if(r.blendModes.set(ge.blendFunction,ge),s){e.inputColorSpace!==null&&e.inputColorSpace!==r.colorSpace&&(y+=e.inputColorSpace===Ba?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==uu?r.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(r.colorSpace=e.inputColorSpace);let ie=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;y+=`${t}MainImage(color0, UV, `,(r.attributes&je.DEPTH)!==0&&ie.test(i)&&(y+="depth, ",r.readDepth=!0),y+=`color1);
	`;let X=t+"BlendOpacity";r.uniforms.set(X,ge.opacity),y+=`color0 = blend${ge.blendFunction}(color0, color1, ${X});

	`,p+=`uniform float ${X};

`}if(p+=i+`
`,a!==null&&(U+=a+`
`),f.set(K.FRAGMENT_HEAD,p),f.set(K.FRAGMENT_MAIN_UV,x),f.set(K.FRAGMENT_MAIN_IMAGE,y),f.set(K.VERTEX_HEAD,U),f.set(K.VERTEX_MAIN_SUPPORT,V),e.extensions!==null)for(let ie of e.extensions)r.extensions.add(ie)}}var fu=class extends _e{constructor(t,...e){super("EffectPass"),this.fullscreenMaterial=new ou(null,null,null,t),this.listener=r=>this.handleEvent(r),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(t){for(let e of this.effects)e.mainScene=t}set mainCamera(t){this.fullscreenMaterial.copyCameraSettings(t);for(let e of this.effects)e.mainCamera=t}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(t){this.fullscreenMaterial.encodeOutput=t}get dithering(){return this.fullscreenMaterial.dithering}set dithering(t){let e=this.fullscreenMaterial;e.dithering=t,e.needsUpdate=!0}setEffects(t){for(let e of this.effects)e.removeEventListener("change",this.listener);this.effects=t.sort((e,r)=>r.attributes-e.attributes);for(let e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){let t=new zc,e=0;for(let o of this.effects)if(o.blendMode.blendFunction===z.DST)t.attributes|=o.getAttributes()&je.DEPTH;else{if((t.attributes&o.getAttributes()&je.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${o.name})`);du("e"+e++,o,t)}let r=t.shaderParts.get(K.FRAGMENT_HEAD),i=t.shaderParts.get(K.FRAGMENT_MAIN_IMAGE),a=t.shaderParts.get(K.FRAGMENT_MAIN_UV),s=/\bblend\b/g;for(let o of t.blendModes.values())r+=o.getShaderCode().replace(s,`blend${o.blendFunction}`)+`
`;(t.attributes&je.DEPTH)!==0?(t.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,t.colorSpace===Ba&&(i+=`color0 = sRGBToLinear(color0);
	`),t.uvTransformation?(a=`vec2 transformedUv = vUv;
`+a,t.defines.set("UV","transformedUv")):t.defines.set("UV","vUv"),t.shaderParts.set(K.FRAGMENT_HEAD,r),t.shaderParts.set(K.FRAGMENT_MAIN_IMAGE,i),t.shaderParts.set(K.FRAGMENT_MAIN_UV,a);for(let[o,u]of t.shaderParts)u!==null&&t.shaderParts.set(o,u.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(t)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(t,e=lu){this.fullscreenMaterial.depthBuffer=t,this.fullscreenMaterial.depthPacking=e;for(let r of this.effects)r.setDepthTexture(t,e)}render(t,e,r,i,a){for(let s of this.effects)s.update(t,e,i);if(!this.skipRendering||this.renderToScreen){let s=this.fullscreenMaterial;s.inputBuffer=e.texture,s.time+=i*this.timeScale,t.setRenderTarget(this.renderToScreen?null:r),t.render(this.scene,this.camera)}}setSize(t,e){this.fullscreenMaterial.setSize(t,e);for(let r of this.effects)r.setSize(t,e)}initialize(t,e,r){this.renderer=t;for(let i of this.effects)i.initialize(t,e,r);this.updateMaterial(),r!==void 0&&r!==hu&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(let t of this.effects)t.removeEventListener("change",this.listener),t.dispose()}handleEvent(t){t.type==="change"&&this.recompile()}};var vu=class extends _e{constructor(t,e,{renderTarget:r,resolutionScale:i=1,width:a=st.AUTO_SIZE,height:s=st.AUTO_SIZE,resolutionX:o=a,resolutionY:u=s}={}){super("NormalPass"),this.needsSwap=!1,this.renderPass=new dn(t,e,new pu);let f=this.renderPass;f.ignoreBackground=!0,f.skipShadowMapUpdate=!0;let p=f.getClearPass();p.overrideClearColor=new mu(7829503),p.overrideClearAlpha=1,this.renderTarget=r,this.renderTarget===void 0&&(this.renderTarget=new gu(1,1,{minFilter:Ua,magFilter:Ua}),this.renderTarget.texture.name="NormalPass.Target");let x=this.resolution=new st(this,o,u,i);x.addEventListener("change",y=>this.setSize(x.baseWidth,x.baseHeight))}set mainScene(t){this.renderPass.mainScene=t}set mainCamera(t){this.renderPass.mainCamera=t}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(t){this.resolution.scale=t}render(t,e,r,i,a){let s=this.renderToScreen?null:this.renderTarget;this.renderPass.render(t,s,s)}setSize(t,e){let r=this.resolution;r.setBaseSize(t,e),this.renderTarget.setSize(r.width,r.height)}},t2=[new Float32Array(3),new Float32Array(3)],r2=[new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3)],i2=[[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([0,1,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([0,1,1]),new Float32Array([1,1,1])]];var n2=[new Float32Array(2),new Float32Array(2)];var a2=new Float32Array([0,-.25,.25,-.125,.125,-.375,.375]),s2=[new Float32Array([0,0]),new Float32Array([.25,-.25]),new Float32Array([-.25,.25]),new Float32Array([.125,-.125]),new Float32Array([-.125,.125])],o2=[new Uint8Array([0,0]),new Uint8Array([3,0]),new Uint8Array([0,3]),new Uint8Array([3,3]),new Uint8Array([1,0]),new Uint8Array([4,0]),new Uint8Array([1,3]),new Uint8Array([4,3]),new Uint8Array([0,1]),new Uint8Array([3,1]),new Uint8Array([0,4]),new Uint8Array([3,4]),new Uint8Array([1,1]),new Uint8Array([4,1]),new Uint8Array([1,4]),new Uint8Array([4,4])],c2=[new Uint8Array([0,0]),new Uint8Array([1,0]),new Uint8Array([0,2]),new Uint8Array([1,2]),new Uint8Array([2,0]),new Uint8Array([3,0]),new Uint8Array([2,2]),new Uint8Array([3,2]),new Uint8Array([0,1]),new Uint8Array([1,1]),new Uint8Array([0,3]),new Uint8Array([1,3]),new Uint8Array([2,1]),new Uint8Array([3,1]),new Uint8Array([2,3]),new Uint8Array([3,3])];var h2=new Map([[Re(0,0,0,0),new Float32Array([0,0,0,0])],[Re(0,0,0,1),new Float32Array([0,0,0,1])],[Re(0,0,1,0),new Float32Array([0,0,1,0])],[Re(0,0,1,1),new Float32Array([0,0,1,1])],[Re(0,1,0,0),new Float32Array([0,1,0,0])],[Re(0,1,0,1),new Float32Array([0,1,0,1])],[Re(0,1,1,0),new Float32Array([0,1,1,0])],[Re(0,1,1,1),new Float32Array([0,1,1,1])],[Re(1,0,0,0),new Float32Array([1,0,0,0])],[Re(1,0,0,1),new Float32Array([1,0,0,1])],[Re(1,0,1,0),new Float32Array([1,0,1,0])],[Re(1,0,1,1),new Float32Array([1,0,1,1])],[Re(1,1,0,0),new Float32Array([1,1,0,0])],[Re(1,1,0,1),new Float32Array([1,1,0,1])],[Re(1,1,1,0),new Float32Array([1,1,1,0])],[Re(1,1,1,1),new Float32Array([1,1,1,1])]]);function cn(t,e,r){return t+(e-t)*r}function Re(t,e,r,i){let a=cn(t,e,.75),s=cn(r,i,1-.25);return cn(a,s,1-.125)}import{Vector3 as le,Vector2 as ue,Matrix4 as pe,Object3D as Ao,Box3 as Yd,Uniform as w,GLSL3 as ji,Vector4 as Oe,RawShaderMaterial as fa,Camera as Do,WebGLRenderTarget as Xd,HalfFloatType as Ro,LinearFilter as Yi,RedFormat as Qd,WebGLArrayRenderTarget as Zd,EventDispatcher as Kd,Matrix3 as jd,Texture as To,Data3DTexture as So}from"./three.module.js";import{Vector3 as ce,Color as oo,Uniform as N,Camera as Ad,Vector2 as co,Matrix4 as Ye,RawShaderMaterial as Td,Quaternion as FA,HalfFloatType as qs,MeshBasicMaterial as HA,DepthTexture as GA,UnsignedIntType as zA,WebGLRenderTarget as kA,RedFormat as WA,RGBADepthPacking as VA,LessEqualDepth as YA,BasicDepthPacking as XA,Matrix3 as QA,Mesh as ZA,PlaneGeometry as KA,Scene as jA,FloatType as Js,GLSL3 as lo,CustomBlending as qA,NoBlending as JA,AddEquation as $A,OneFactor as eT,RGBAFormat as tT,LinearFilter as $s,ClampToEdgeWrapping as rT,NoColorSpace as iT,WebGL3DRenderTarget as nT,Loader as Sd,Data3DTexture as Jn,DataTexture as eo,LightProbe as aT,BufferGeometry as sT,InterleavedBuffer as oT,InterleavedBufferAttribute as cT,Sphere as lT,DirectionalLight as uT}from"./three.module.js";import{Loader as Hr,FileLoader as ku,BufferGeometry as iA,BufferAttribute as nA,Box3 as aA,Vector3 as sA,Sphere as oA,WebGLRenderer as Wu,LinearFilter as $a,RGBAFormat as Vu,ByteType as Yu,UnsignedByteType as es,ShortType as Xu,UnsignedShortType as Qu,IntType as Zu,UnsignedIntType as Ku,HalfFloatType as ju,FloatType as ts,MathUtils as rt,Material as Ni,Data3DTexture as qu,DataTexture as Ju,Quaternion as cA,Matrix4 as lA,Ray as uA,Vector2 as hA}from"./three.module.js";var Au=!0,fn="Invariant failed";function _t(t,e){if(!t){if(Au)throw new Error(fn);var r=typeof e=="function"?e():e,i=r?"".concat(fn,": ").concat(r):fn;throw new Error(i)}}import{BufferGeometry as B2,Sphere as F2,Vector3 as H2,Float32BufferAttribute as G2,Loader as Tu,Data3DTexture as Su,FileLoader as xu,UnsignedByteType as Eu,RedFormat as wu,NearestFilter as Fa,RepeatWrapping as mn}from"./three.module.js";var Ha=128,Ga=128,za=64,yu="9627216cc50057994c98a2118f3c4a23765d43b9",Cu=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${yu}/packages/core/assets/stbn.bin`;var Ti=class extends Tu{load(e,r,i,a){let s=new Su,o=new xu(this.manager);return o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.setResponseType("arraybuffer"),o.load(e,u=>{_t(u instanceof ArrayBuffer),s.image.data=new Uint8Array(u),s.image.width=Ha,s.image.height=Ga,s.image.depth=za,s.type=Eu,s.format=wu,s.minFilter=Fa,s.magFilter=Fa,s.wrapS=mn,s.wrapT=mn,s.wrapR=mn,s.needsUpdate=!0,r?.(s)},i,a),s}};import{Vector3 as ve,Matrix4 as ka,BufferGeometry as V2,BufferAttribute as Y2}from"./three.module.js";var Du=new ve;function Va(t,e,r=new ve,i){let{x:a,y:s,z:o}=t,u=e.x,f=e.y,p=e.z,x=a*a*u,y=s*s*f,U=o*o*p,V=x+y+U,se=Math.sqrt(1/V);if(!Number.isFinite(se))return;let j=Du.copy(t).multiplyScalar(se);if(V<(i?.centerTolerance??.1))return r.copy(j);let he=j.multiply(e).multiplyScalar(2),ge=(1-se)*t.length()/(he.length()/2),ie=0,X,de,fe,Le;do{ge-=ie,X=1/(1+ge*u),de=1/(1+ge*f),fe=1/(1+ge*p);let Xe=X*X,Qe=de*de,we=fe*fe,Be=Xe*X,Te=Qe*de,wt=we*fe;Le=x*Xe+y*Qe+U*we-1,ie=Le/((x*Be*u+y*Te*f+U*wt*p)*-2)}while(Math.abs(Le)>1e-12);return r.set(a*X,s*de,o*fe)}var Zt=new ve,pn=new ve,gn=new ve,vn=class{constructor(e,r,i){this.radii=new ve(e,r,i)}get minimumRadius(){return Math.min(this.radii.x,this.radii.y,this.radii.z)}get maximumRadius(){return Math.max(this.radii.x,this.radii.y,this.radii.z)}get flattening(){return 1-this.minimumRadius/this.maximumRadius}get eccentricity(){return Math.sqrt(this.eccentricitySquared)}get eccentricitySquared(){let e=this.maximumRadius**2,r=this.minimumRadius**2;return(e-r)/e}reciprocalRadii(e=new ve){let{x:r,y:i,z:a}=this.radii;return e.set(1/r,1/i,1/a)}reciprocalRadiiSquared(e=new ve){let{x:r,y:i,z:a}=this.radii;return e.set(1/r**2,1/i**2,1/a**2)}projectOnSurface(e,r=new ve,i){return Va(e,this.reciprocalRadiiSquared(),r,i)}getSurfaceNormal(e,r=new ve){return r.multiplyVectors(this.reciprocalRadiiSquared(Zt),e).normalize()}getEastNorthUpVectors(e,r=new ve,i=new ve,a=new ve){this.getSurfaceNormal(e,a),r.set(-e.y,e.x,0).normalize(),i.crossVectors(a,r).normalize()}getEastNorthUpFrame(e,r=new ka){let i=Zt,a=pn,s=gn;return this.getEastNorthUpVectors(e,i,a,s),r.makeBasis(i,a,s).setPosition(e)}getNorthUpEastFrame(e,r=new ka){let i=Zt,a=pn,s=gn;return this.getEastNorthUpVectors(e,i,a,s),r.makeBasis(a,s,i).setPosition(e)}getIntersection(e,r=new ve){let i=this.reciprocalRadii(Zt),a=pn.copy(i).multiply(e.origin),s=gn.copy(i).multiply(e.direction),o=a.lengthSq(),u=s.lengthSq(),f=a.dot(s),p=f**2-u*(o-1);if(o===1)return r.copy(e.origin);if(o>1){if(f>=0||p<0)return;let x=Math.sqrt(p),y=(-f-x)/u,U=(-f+x)/u;return e.at(Math.min(y,U),r)}if(o<1){let x=f**2-u*(o-1),y=Math.sqrt(x),U=(-f+y)/u;return e.at(U,r)}if(f<0)return e.at(-f/u,r)}getOsculatingSphereCenter(e,r,i=new ve){_t(this.radii.x===this.radii.y);let a=this.radii.x**2,s=this.radii.z**2,o=Zt.set(e.x/a,e.y/a,e.z/s).normalize();return i.copy(o.multiplyScalar(-r).add(e))}getNormalAtHorizon(e,r,i=new ve){_t(this.radii.x===this.radii.y);let a=this.radii.x**2,s=this.radii.z**2,o=e,u=r,f=(o.x*u.x+o.y*u.y)/a+o.z*u.z/s;f/=(o.x**2+o.y**2)/a+o.z**2/s;let p=Zt.copy(u).multiplyScalar(-f).add(e);return i.set(p.x/a,p.y/a,p.z/s).normalize()}};vn.WGS84=new vn(6378137,6378137,6356752314245179e-9);var ft=vn;var Si=new ve,Wa=new ve,Dr=class An{constructor(e=0,r=0,i=0){this.longitude=e,this.latitude=r,this.height=i}set(e,r,i){return this.longitude=e,this.latitude=r,i!=null&&(this.height=i),this}clone(){return new An(this.longitude,this.latitude,this.height)}copy(e){return this.longitude=e.longitude,this.latitude=e.latitude,this.height=e.height,this}equals(e){return e.longitude===this.longitude&&e.latitude===this.latitude&&e.height===this.height}setLongitude(e){return this.longitude=e,this}setLatitude(e){return this.latitude=e,this}setHeight(e){return this.height=e,this}normalize(){return this.longitude<An.MIN_LONGITUDE&&(this.longitude+=Math.PI*2),this}setFromECEF(e,r){let i=(r?.ellipsoid??ft.WGS84).reciprocalRadiiSquared(Si),a=Va(e,i,Wa,r);if(a==null)throw new Error(`Could not project position to ellipsoid surface: ${e.toArray()}`);let s=Si.multiplyVectors(a,i).normalize();this.longitude=Math.atan2(s.y,s.x),this.latitude=Math.asin(s.z);let o=Si.subVectors(e,a);return this.height=Math.sign(o.dot(e))*o.length(),this}toECEF(e=new ve,r){let i=r?.ellipsoid??ft.WGS84,a=Si.multiplyVectors(i.radii,i.radii),s=Math.cos(this.latitude),o=Wa.set(s*Math.cos(this.longitude),s*Math.sin(this.longitude),Math.sin(this.latitude)).normalize();return e.multiplyVectors(a,o),e.divideScalar(Math.sqrt(o.dot(e))).add(o.multiplyScalar(this.height))}fromArray(e,r=0){return this.longitude=e[r],this.latitude=e[r+1],this.height=e[r+2],this}toArray(e=[],r=0){return e[r]=this.longitude,e[r+1]=this.latitude,e[r+2]=this.height,e}*[Symbol.iterator](){yield this.longitude,yield this.latitude,yield this.height}};Dr.MIN_LONGITUDE=-Math.PI,Dr.MAX_LONGITUDE=Math.PI,Dr.MIN_LATITUDE=-Math.PI/2,Dr.MAX_LATITUDE=Math.PI/2;var qe=Dr;import{DataTextureLoader as zu,DataUtils as Ut,FloatType as En,HalfFloatType as _r,LinearFilter as Ja,LinearSRGBColorSpace as Lt,RedFormat as xi,RGFormat as Mr,RGBAFormat as Bt}from"./three.module.js";var ke=Uint8Array,Kt=Uint16Array,Ru=Int32Array,Ya=new ke([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Xa=new ke([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Iu=new ke([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Qa=function(t,e){for(var r=new Kt(31),i=0;i<31;++i)r[i]=e+=1<<t[i-1];for(var a=new Ru(r[30]),i=1;i<30;++i)for(var s=r[i];s<r[i+1];++s)a[s]=s-r[i]<<5|i;return{b:r,r:a}},Za=Qa(Ya,2),Ka=Za.b,_u=Za.r;Ka[28]=258,_u[258]=28;var ja=Qa(Xa,0),Mu=ja.b,K2=ja.r,xn=new Kt(32768);for(q=0;q<32768;++q)mt=(q&43690)>>1|(q&21845)<<1,mt=(mt&52428)>>2|(mt&13107)<<2,mt=(mt&61680)>>4|(mt&3855)<<4,xn[q]=((mt&65280)>>8|(mt&255)<<8)>>1;var mt,q,Rr=(function(t,e,r){for(var i=t.length,a=0,s=new Kt(e);a<i;++a)t[a]&&++s[t[a]-1];var o=new Kt(e);for(a=1;a<e;++a)o[a]=o[a-1]+s[a-1]<<1;var u;if(r){u=new Kt(1<<e);var f=15-e;for(a=0;a<i;++a)if(t[a])for(var p=a<<4|t[a],x=e-t[a],y=o[t[a]-1]++<<x,U=y|(1<<x)-1;y<=U;++y)u[xn[y]>>f]=p}else for(u=new Kt(i),a=0;a<i;++a)t[a]&&(u[a]=xn[o[t[a]-1]++]>>15-t[a]);return u}),Ir=new ke(288);for(q=0;q<144;++q)Ir[q]=8;var q;for(q=144;q<256;++q)Ir[q]=9;var q;for(q=256;q<280;++q)Ir[q]=7;var q;for(q=280;q<288;++q)Ir[q]=8;var q,qa=new ke(32);for(q=0;q<32;++q)qa[q]=5;var q;var Pu=Rr(Ir,9,1);var Nu=Rr(qa,5,1),Tn=function(t){for(var e=t[0],r=1;r<t.length;++r)t[r]>e&&(e=t[r]);return e},Je=function(t,e,r){var i=e/8|0;return(t[i]|t[i+1]<<8)>>(e&7)&r},Sn=function(t,e){var r=e/8|0;return(t[r]|t[r+1]<<8|t[r+2]<<16)>>(e&7)},bu=function(t){return(t+7)/8|0},Ou=function(t,e,r){return(e==null||e<0)&&(e=0),(r==null||r>t.length)&&(r=t.length),new ke(t.subarray(e,r))};var Uu=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],$e=function(t,e,r){var i=new Error(e||Uu[t]);if(i.code=t,Error.captureStackTrace&&Error.captureStackTrace(i,$e),!r)throw i;return i},Lu=function(t,e,r,i){var a=t.length,s=i?i.length:0;if(!a||e.f&&!e.l)return r||new ke(0);var o=!r,u=o||e.i!=2,f=e.i;o&&(r=new ke(a*3));var p=function(ii){var Ar=r.length;if(ii>Ar){var ni=new ke(Math.max(Ar*2,ii));ni.set(r),r=ni}},x=e.f||0,y=e.p||0,U=e.b||0,V=e.l,se=e.d,j=e.m,he=e.n,ge=a*8;do{if(!V){x=Je(t,y,1);var ie=Je(t,y+1,3);if(y+=3,ie)if(ie==1)V=Pu,se=Nu,j=9,he=5;else if(ie==2){var Le=Je(t,y,31)+257,Xe=Je(t,y+10,15)+4,Qe=Le+Je(t,y+5,31)+1;y+=14;for(var we=new ke(Qe),Be=new ke(19),Te=0;Te<Xe;++Te)Be[Iu[Te]]=Je(t,y+Te*3,7);y+=Xe*3;for(var wt=Tn(Be),Ze=(1<<wt)-1,ri=Rr(Be,wt,1),Te=0;Te<Qe;){var yt=ri[Je(t,y,Ze)];y+=yt&15;var X=yt>>4;if(X<16)we[Te++]=X;else{var Ct=0,zt=0;for(X==16?(zt=3+Je(t,y,3),y+=2,Ct=we[Te-1]):X==17?(zt=3+Je(t,y,7),y+=3):X==18&&(zt=11+Je(t,y,127),y+=7);zt--;)we[Te++]=Ct}}var vr=we.subarray(0,Le),Ke=we.subarray(Le);j=Tn(vr),he=Tn(Ke),V=Rr(vr,j,1),se=Rr(Ke,he,1)}else $e(1);else{var X=bu(y)+4,de=t[X-4]|t[X-3]<<8,fe=X+de;if(fe>a){f&&$e(0);break}u&&p(U+de),r.set(t.subarray(X,fe),U),e.b=U+=de,e.p=y=fe*8,e.f=x;continue}if(y>ge){f&&$e(0);break}}u&&p(U+131072);for(var Ji=(1<<j)-1,it=(1<<he)-1,Nt=y;;Nt=y){var Ct=V[Sn(t,y)&Ji],Ie=Ct>>4;if(y+=Ct&15,y>ge){f&&$e(0);break}if(Ct||$e(2),Ie<256)r[U++]=Ie;else if(Ie==256){Nt=y,V=null;break}else{var kt=Ie-254;if(Ie>264){var Te=Ie-257,ut=Ya[Te];kt=Je(t,y,(1<<ut)-1)+Ka[Te],y+=ut}var Wt=se[Sn(t,y)&it],te=Wt>>4;Wt||$e(3),y+=Wt&15;var Ke=Mu[te];if(te>3){var ut=Xa[te];Ke+=Sn(t,y)&(1<<ut)-1,y+=ut}if(y>ge){f&&$e(0);break}u&&p(U+131072);var ht=U+kt;if(U<Ke){var dt=s-Ke,$i=Math.min(Ke,ht);for(dt+U<0&&$e(3);U<$i;++U)r[U]=i[dt+U]}for(;U<ht;++U)r[U]=r[U-Ke]}}e.l=V,e.p=Nt,e.b=U,e.f=x,V&&(x=1,e.m=j,e.d=se,e.n=he)}while(!x);return U!=r.length&&o?Ou(r,0,U):r.subarray(0,U)};var Bu=new ke(0);var Fu=function(t,e){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&$e(6,"invalid zlib data"),(t[1]>>5&1)==+!e&&$e(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};function jt(t,e){return Lu(t.subarray(Fu(t,e&&e.dictionary),-4),{i:2},e&&e.out,e&&e.dictionary)}var Hu=typeof TextDecoder<"u"&&new TextDecoder,Gu=0;try{Hu.decode(Bu,{stream:!0}),Gu=1}catch{}var Pr=class extends zu{constructor(e){super(e),this.type=_r,this.outputFormat=Bt,this.part=0}parse(e){let we=Math.pow(2.7182818,2.2),Be=null;function Te(n,c){let l=0;for(let m=0;m<65536;++m)(m==0||n[m>>3]&1<<(m&7))&&(c[l++]=m);let d=l-1;for(;l<65536;)c[l++]=0;return d}function wt(n){for(let c=0;c<16384;c++)n[c]={},n[c].len=0,n[c].lit=0,n[c].p=null}let Ze={l:0,c:0,lc:0};function ri(n,c,l,d,m){for(;l<n;)c=c<<8|Ta(d,m),l+=8;l-=n,Ze.l=c>>l&(1<<n)-1,Ze.c=c,Ze.lc=l}let yt=new Array(59);function Ct(n){for(let l=0;l<=58;++l)yt[l]=0;for(let l=0;l<65537;++l)yt[n[l]]+=1;let c=0;for(let l=58;l>0;--l){let d=c+yt[l]>>1;yt[l]=c,c=d}for(let l=0;l<65537;++l){let d=n[l];d>0&&(n[l]=d|yt[d]++<<6)}}function zt(n,c,l,d,m,v){let h=c,T=0,g=0;for(;d<=m;d++){if(h.value-c.value>l)return!1;ri(6,T,g,n,h);let A=Ze.l;if(T=Ze.c,g=Ze.lc,v[d]=A,A==63){if(h.value-c.value>l)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");ri(8,T,g,n,h);let S=Ze.l+6;if(T=Ze.c,g=Ze.lc,d+S>m+1)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");for(;S--;)v[d++]=0;d--}else if(A>=59){let S=A-59+2;if(d+S>m+1)throw new Error("THREE.EXRLoader: Something wrong with hufUnpackEncTable");for(;S--;)v[d++]=0;d--}}Ct(v)}function vr(n){return n&63}function Ke(n){return n>>6}function Ji(n,c,l,d){for(;c<=l;c++){let m=Ke(n[c]),v=vr(n[c]);if(m>>v)throw new Error("THREE.EXRLoader: Invalid table entry");if(v>14){let h=d[m>>v-14];if(h.len)throw new Error("THREE.EXRLoader: Invalid table entry");if(h.lit++,h.p){let T=h.p;h.p=new Array(h.lit);for(let g=0;g<h.lit-1;++g)h.p[g]=T[g]}else h.p=new Array(1);h.p[h.lit-1]=c}else if(v){let h=0;for(let T=1<<14-v;T>0;T--){let g=d[(m<<14-v)+h];if(g.len||g.p)throw new Error("THREE.EXRLoader: Invalid table entry");g.len=v,g.lit=c,h++}}}return!0}let it={c:0,lc:0};function Nt(n,c,l,d){n=n<<8|Ta(l,d),c+=8,it.c=n,it.lc=c}let Ie={c:0,lc:0};function kt(n,c,l,d,m,v,h,T,g){if(n==c){d<8&&(Nt(l,d,m,v),l=it.c,d=it.lc),d-=8;let A=l>>d;if(A=new Uint8Array([A])[0],T.value+A>g)return!1;let S=h[T.value-1];for(;A-- >0;)h[T.value++]=S}else if(T.value<g)h[T.value++]=n;else return!1;Ie.c=l,Ie.lc=d}function ut(n){return n&65535}function Wt(n){let c=ut(n);return c>32767?c-65536:c}let te={a:0,b:0};function ht(n,c){let l=Wt(n),m=Wt(c),v=l+(m&1)+(m>>1),h=v,T=v-m;te.a=h,te.b=T}function dt(n,c){let l=ut(n),d=ut(c),m=l-(d>>1)&65535,v=d+m-32768&65535;te.a=v,te.b=m}function $i(n,c,l,d,m,v,h){let T=h<16384,g=l>m?m:l,A=1,S,C;for(;A<=g;)A<<=1;for(A>>=1,S=A,A>>=1;A>=1;){C=0;let E=C+v*(m-S),R=v*A,M=v*S,D=d*A,I=d*S,L,k,F,Q;for(;C<=E;C+=M){let b=C,P=C+d*(l-S);for(;b<=P;b+=I){let O=b+D,re=b+R,Z=re+D;T?(ht(n[b+c],n[re+c]),L=te.a,F=te.b,ht(n[O+c],n[Z+c]),k=te.a,Q=te.b,ht(L,k),n[b+c]=te.a,n[O+c]=te.b,ht(F,Q),n[re+c]=te.a,n[Z+c]=te.b):(dt(n[b+c],n[re+c]),L=te.a,F=te.b,dt(n[O+c],n[Z+c]),k=te.a,Q=te.b,dt(L,k),n[b+c]=te.a,n[O+c]=te.b,dt(F,Q),n[re+c]=te.a,n[Z+c]=te.b)}if(l&A){let O=b+R;T?ht(n[b+c],n[O+c]):dt(n[b+c],n[O+c]),L=te.a,n[O+c]=te.b,n[b+c]=L}}if(m&A){let b=C,P=C+d*(l-S);for(;b<=P;b+=I){let O=b+D;T?ht(n[b+c],n[O+c]):dt(n[b+c],n[O+c]),L=te.a,n[O+c]=te.b,n[b+c]=L}}S=A,A>>=1}return C}function ii(n,c,l,d,m,v,h,T,g){let A=0,S=0,C=h,E=Math.trunc(d.value+(m+7)/8);for(;d.value<E;)for(Nt(A,S,l,d),A=it.c,S=it.lc;S>=14;){let M=A>>S-14&16383,D=c[M];if(D.len)S-=D.len,kt(D.lit,v,A,S,l,d,T,g,C),A=Ie.c,S=Ie.lc;else{if(!D.p)throw new Error("THREE.EXRLoader: hufDecode issues");let I;for(I=0;I<D.lit;I++){let L=vr(n[D.p[I]]);for(;S<L&&d.value<E;)Nt(A,S,l,d),A=it.c,S=it.lc;if(S>=L&&Ke(n[D.p[I]])==(A>>S-L&(1<<L)-1)){S-=L,kt(D.p[I],v,A,S,l,d,T,g,C),A=Ie.c,S=Ie.lc;break}}if(I==D.lit)throw new Error("THREE.EXRLoader: hufDecode issues")}}let R=8-m&7;for(A>>=R,S-=R;S>0;){let M=c[A<<14-S&16383];if(M.len)S-=M.len,kt(M.lit,v,A,S,l,d,T,g,C),A=Ie.c,S=Ie.lc;else throw new Error("THREE.EXRLoader: hufDecode issues")}return!0}function Ar(n,c,l,d,m,v){let h={value:0},T=l.value,g=Fe(c,l),A=Fe(c,l);l.value+=4;let S=Fe(c,l);if(l.value+=4,g<0||g>=65537||A<0||A>=65537)throw new Error("THREE.EXRLoader: Something wrong with HUF_ENCSIZE");let C=new Array(65537),E=new Array(16384);wt(E);let R=d-(l.value-T);if(zt(n,l,R,g,A,C),S>8*(d-(l.value-T)))throw new Error("THREE.EXRLoader: Something wrong with hufUncompress");Ji(C,g,A,E),ii(C,E,n,l,S,A,v,m,h)}function ni(n,c,l){for(let d=0;d<l;++d)c[d]=n[c[d]]}function ai(n){for(let c=1;c<n.length;c++){let l=n[c-1]+n[c]-128;n[c]=l}}function si(n,c){let l=0,d=Math.floor((n.length+1)/2),m=0,v=n.length-1;for(;!(m>v||(c[m++]=n[l++],m>v));)c[m++]=n[d++]}function en(n){let c=n.byteLength,l=new Array,d=0,m=new DataView(n);for(;c>0;){let v=m.getInt8(d++);if(v<0){let h=-v;c-=h+1;for(let T=0;T<h;T++)l.push(m.getUint8(d++))}else{let h=v;c-=2;let T=m.getUint8(d++);for(let g=0;g<h+1;g++)l.push(T)}}return l}function Bo(n,c,l,d,m,v){let h=new DataView(v.buffer),T=l[n.idx[0]].width,g=l[n.idx[0]].height,A=3,S=Math.floor(T/8),C=Math.ceil(T/8),E=Math.ceil(g/8),R=T-(C-1)*8,M=g-(E-1)*8,D={value:0},I=new Array(A),L=new Array(A),k=new Array(A),F=new Array(A),Q=new Array(A);for(let P=0;P<A;++P)Q[P]=c[n.idx[P]],I[P]=P<1?0:I[P-1]+C*E,L[P]=new Float32Array(64),k[P]=new Uint16Array(64),F[P]=new Uint16Array(C*64);for(let P=0;P<E;++P){let O=8;P==E-1&&(O=M);let re=8;for(let H=0;H<C;++H){H==C-1&&(re=R);for(let W=0;W<A;++W)k[W].fill(0),k[W][0]=m[I[W]++],ma(D,d,k[W]),pa(k[W],L[W]),ga(L[W]);A==3&&Ho(L);for(let W=0;W<A;++W)va(L[W],F[W],H*64)}let Z=0;for(let H=0;H<A;++H){let W=l[n.idx[H]].type;for(let me=8*P;me<8*P+O;++me){Z=Q[H][me];for(let He=0;He<S;++He){let ne=He*64+(me&7)*8;h.setUint16(Z+0*W,F[H][ne+0],!0),h.setUint16(Z+2*W,F[H][ne+1],!0),h.setUint16(Z+4*W,F[H][ne+2],!0),h.setUint16(Z+6*W,F[H][ne+3],!0),h.setUint16(Z+8*W,F[H][ne+4],!0),h.setUint16(Z+10*W,F[H][ne+5],!0),h.setUint16(Z+12*W,F[H][ne+6],!0),h.setUint16(Z+14*W,F[H][ne+7],!0),Z+=16*W}}if(S!=C)for(let me=8*P;me<8*P+O;++me){let He=Q[H][me]+8*S*2*W,ne=S*64+(me&7)*8;for(let nt=0;nt<re;++nt)h.setUint16(He+nt*2*W,F[H][ne+nt],!0)}}}let b=new Uint16Array(T);h=new DataView(v.buffer);for(let P=0;P<A;++P){l[n.idx[P]].decoded=!0;let O=l[n.idx[P]].type;if(l[P].type==2)for(let re=0;re<g;++re){let Z=Q[P][re];for(let H=0;H<T;++H)b[H]=h.getUint16(Z+H*2*O,!0);for(let H=0;H<T;++H)h.setFloat32(Z+H*2*O,_(b[H]),!0)}}}function Fo(n,c,l,d,m,v){let h=new DataView(v.buffer),T=l[n],g=T.width,A=T.height,S=Math.ceil(g/8),C=Math.ceil(A/8),E=Math.floor(g/8),R=g-(S-1)*8,M=A-(C-1)*8,D={value:0},I=0,L=new Float32Array(64),k=new Uint16Array(64),F=new Uint16Array(S*64);for(let Q=0;Q<C;++Q){let b=8;Q==C-1&&(b=M);for(let P=0;P<S;++P)k.fill(0),k[0]=m[I++],ma(D,d,k),pa(k,L),ga(L),va(L,F,P*64);for(let P=8*Q;P<8*Q+b;++P){let O=c[n][P];for(let re=0;re<E;++re){let Z=re*64+(P&7)*8;for(let H=0;H<8;++H)h.setUint16(O+H*2*T.type,F[Z+H],!0);O+=16*T.type}if(S!=E){let re=E*64+(P&7)*8;for(let Z=0;Z<R;++Z)h.setUint16(O+Z*2*T.type,F[re+Z],!0)}}}T.decoded=!0}function ma(n,c,l){let d,m=1;for(;m<64;)d=c[n.value],d==65280?m=64:d>>8==255?m+=d&255:(l[m]=d,m++),n.value++}function pa(n,c){c[0]=_(n[0]),c[1]=_(n[1]),c[2]=_(n[5]),c[3]=_(n[6]),c[4]=_(n[14]),c[5]=_(n[15]),c[6]=_(n[27]),c[7]=_(n[28]),c[8]=_(n[2]),c[9]=_(n[4]),c[10]=_(n[7]),c[11]=_(n[13]),c[12]=_(n[16]),c[13]=_(n[26]),c[14]=_(n[29]),c[15]=_(n[42]),c[16]=_(n[3]),c[17]=_(n[8]),c[18]=_(n[12]),c[19]=_(n[17]),c[20]=_(n[25]),c[21]=_(n[30]),c[22]=_(n[41]),c[23]=_(n[43]),c[24]=_(n[9]),c[25]=_(n[11]),c[26]=_(n[18]),c[27]=_(n[24]),c[28]=_(n[31]),c[29]=_(n[40]),c[30]=_(n[44]),c[31]=_(n[53]),c[32]=_(n[10]),c[33]=_(n[19]),c[34]=_(n[23]),c[35]=_(n[32]),c[36]=_(n[39]),c[37]=_(n[45]),c[38]=_(n[52]),c[39]=_(n[54]),c[40]=_(n[20]),c[41]=_(n[22]),c[42]=_(n[33]),c[43]=_(n[38]),c[44]=_(n[46]),c[45]=_(n[51]),c[46]=_(n[55]),c[47]=_(n[60]),c[48]=_(n[21]),c[49]=_(n[34]),c[50]=_(n[37]),c[51]=_(n[47]),c[52]=_(n[50]),c[53]=_(n[56]),c[54]=_(n[59]),c[55]=_(n[61]),c[56]=_(n[35]),c[57]=_(n[36]),c[58]=_(n[48]),c[59]=_(n[49]),c[60]=_(n[57]),c[61]=_(n[58]),c[62]=_(n[62]),c[63]=_(n[63])}function ga(n){let c=.5*Math.cos(.7853975),l=.5*Math.cos(3.14159/16),d=.5*Math.cos(3.14159/8),m=.5*Math.cos(3*3.14159/16),v=.5*Math.cos(5*3.14159/16),h=.5*Math.cos(3*3.14159/8),T=.5*Math.cos(7*3.14159/16),g=new Array(4),A=new Array(4),S=new Array(4),C=new Array(4);for(let E=0;E<8;++E){let R=E*8;g[0]=d*n[R+2],g[1]=h*n[R+2],g[2]=d*n[R+6],g[3]=h*n[R+6],A[0]=l*n[R+1]+m*n[R+3]+v*n[R+5]+T*n[R+7],A[1]=m*n[R+1]-T*n[R+3]-l*n[R+5]-v*n[R+7],A[2]=v*n[R+1]-l*n[R+3]+T*n[R+5]+m*n[R+7],A[3]=T*n[R+1]-v*n[R+3]+m*n[R+5]-l*n[R+7],S[0]=c*(n[R+0]+n[R+4]),S[3]=c*(n[R+0]-n[R+4]),S[1]=g[0]+g[3],S[2]=g[1]-g[2],C[0]=S[0]+S[1],C[1]=S[3]+S[2],C[2]=S[3]-S[2],C[3]=S[0]-S[1],n[R+0]=C[0]+A[0],n[R+1]=C[1]+A[1],n[R+2]=C[2]+A[2],n[R+3]=C[3]+A[3],n[R+4]=C[3]-A[3],n[R+5]=C[2]-A[2],n[R+6]=C[1]-A[1],n[R+7]=C[0]-A[0]}for(let E=0;E<8;++E)g[0]=d*n[16+E],g[1]=h*n[16+E],g[2]=d*n[48+E],g[3]=h*n[48+E],A[0]=l*n[8+E]+m*n[24+E]+v*n[40+E]+T*n[56+E],A[1]=m*n[8+E]-T*n[24+E]-l*n[40+E]-v*n[56+E],A[2]=v*n[8+E]-l*n[24+E]+T*n[40+E]+m*n[56+E],A[3]=T*n[8+E]-v*n[24+E]+m*n[40+E]-l*n[56+E],S[0]=c*(n[E]+n[32+E]),S[3]=c*(n[E]-n[32+E]),S[1]=g[0]+g[3],S[2]=g[1]-g[2],C[0]=S[0]+S[1],C[1]=S[3]+S[2],C[2]=S[3]-S[2],C[3]=S[0]-S[1],n[0+E]=C[0]+A[0],n[8+E]=C[1]+A[1],n[16+E]=C[2]+A[2],n[24+E]=C[3]+A[3],n[32+E]=C[3]-A[3],n[40+E]=C[2]-A[2],n[48+E]=C[1]-A[1],n[56+E]=C[0]-A[0]}function Ho(n){for(let c=0;c<64;++c){let l=n[0][c],d=n[1][c],m=n[2][c];n[0][c]=l+1.5747*m,n[1][c]=l-.1873*d-.4682*m,n[2][c]=l+1.8556*d}}function va(n,c,l){for(let d=0;d<64;++d)c[l+d]=Ut.toHalfFloat(Go(n[d]))}function Go(n){return n<=1?Math.sign(n)*Math.pow(Math.abs(n),2.2):Math.sign(n)*Math.pow(we,Math.abs(n)-1)}function oi(n){return new DataView(n.array.buffer,n.offset.value,n.size)}function zo(n){let c=n.viewer.buffer.slice(n.offset.value,n.offset.value+n.size),l=new Uint8Array(en(c)),d=new Uint8Array(l.length);return ai(l),si(l,d),new DataView(d.buffer)}function tn(n){let c=n.array.slice(n.offset.value,n.offset.value+n.size),l=jt(c),d=new Uint8Array(l.length);return ai(l),si(l,d),new DataView(d.buffer)}function ko(n){let c=n.viewer,l={value:n.offset.value},d=new Uint16Array(n.columns*n.lines*(n.inputChannels.length*n.type)),m=new Uint8Array(8192),v=0,h=new Array(n.inputChannels.length);for(let M=0,D=n.inputChannels.length;M<D;M++)h[M]={},h[M].start=v,h[M].end=h[M].start,h[M].nx=n.columns,h[M].ny=n.lines,h[M].size=n.type,v+=h[M].nx*h[M].ny*h[M].size;let T=Tr(c,l),g=Tr(c,l);if(g>=8192)throw new Error("THREE.EXRLoader: Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(T<=g)for(let M=0;M<g-T+1;M++)m[M+T]=Dt(c,l);let A=new Uint16Array(65536),S=Te(m,A),C=Fe(c,l);Ar(n.array,c,l,C,d,v);for(let M=0;M<n.inputChannels.length;++M){let D=h[M];for(let I=0;I<h[M].size;++I)$i(d,D.start+I,D.nx,D.size,D.ny,D.nx*D.size,S)}ni(A,d,v);let E=0,R=new Uint8Array(d.buffer.byteLength);for(let M=0;M<n.lines;M++)for(let D=0;D<n.inputChannels.length;D++){let I=h[D],L=I.nx*I.size,k=new Uint8Array(d.buffer,I.end*2,L*2);R.set(k,E),E+=L*2,I.end+=L}return new DataView(R.buffer)}function Wo(n){let c=n.array.slice(n.offset.value,n.offset.value+n.size),l=jt(c),d=n.inputChannels.length*n.lines*n.columns*n.totalBytes,m=new ArrayBuffer(d),v=new DataView(m),h=0,T=0,g=new Array(4);for(let A=0;A<n.lines;A++)for(let S=0;S<n.inputChannels.length;S++){let C=0;switch(n.inputChannels[S].pixelType){case 1:g[0]=h,g[1]=g[0]+n.columns,h=g[1]+n.columns;for(let R=0;R<n.columns;++R){let M=l[g[0]++]<<8|l[g[1]++];C+=M,v.setUint16(T,C,!0),T+=2}break;case 2:g[0]=h,g[1]=g[0]+n.columns,g[2]=g[1]+n.columns,h=g[2]+n.columns;for(let R=0;R<n.columns;++R){let M=l[g[0]++]<<24|l[g[1]++]<<16|l[g[2]++]<<8;C+=M,v.setUint32(T,C,!0),T+=4}break}}return v}function Vo(n){let c=n.array,l=n.offset.value,d=n.columns,m=n.lines,v=n.inputChannels,h=n.totalBytes,T=De.compression==="B44A_COMPRESSION",g=new Uint8Array(m*d*h),A=new Uint16Array(16),S=0;for(let C=0;C<v.length;C++){let E=v[C],R=E.pixelType*2,M=Math.ceil(d/E.xSampling),D=Math.ceil(m/E.ySampling),I=E.xSampling===1&&E.ySampling===1;if(E.pixelType!==1){for(let F=0;F<D;F++)if(I){let Q=F*d*h+S*d;for(let b=0;b<M*R;b++)g[Q+b]=c[l++]}else l+=M*R;S+=R;continue}let L=Math.ceil(M/4),k=Math.ceil(D/4);for(let F=0;F<k;F++)for(let Q=0;Q<L;Q++){if(T&&c[l+2]>=52){let b=c[l]<<8|c[l+1],P=b&32768?b&32767:~b&65535;A.fill(P),l+=3}else{let b=c[l]<<8|c[l+1],P=c[l+2]>>2,O=32<<P,re=b+((c[l+2]<<4|c[l+3]>>4)&63)*(1<<P)-O&65535,Z=re+((c[l+3]<<2|c[l+4]>>6)&63)*(1<<P)-O&65535,H=Z+(c[l+4]&63)*(1<<P)-O&65535,W=b+(c[l+5]>>2&63)*(1<<P)-O&65535,me=re+((c[l+5]<<4|c[l+6]>>4)&63)*(1<<P)-O&65535,He=Z+((c[l+6]<<2|c[l+7]>>6)&63)*(1<<P)-O&65535,ne=H+(c[l+7]&63)*(1<<P)-O&65535,nt=W+(c[l+8]>>2&63)*(1<<P)-O&65535,Vt=me+((c[l+8]<<4|c[l+9]>>4)&63)*(1<<P)-O&65535,Sr=He+((c[l+9]<<2|c[l+10]>>6)&63)*(1<<P)-O&65535,at=ne+(c[l+10]&63)*(1<<P)-O&65535,bt=nt+(c[l+11]>>2&63)*(1<<P)-O&65535,di=Vt+((c[l+11]<<4|c[l+12]>>4)&63)*(1<<P)-O&65535,fi=Sr+((c[l+12]<<2|c[l+13]>>6)&63)*(1<<P)-O&65535,mi=at+(c[l+13]&63)*(1<<P)-O&65535,xr=[b,W,nt,bt,re,me,Vt,di,Z,He,Sr,fi,H,ne,at,mi];for(let Yt=0;Yt<16;Yt++)A[Yt]=xr[Yt]&32768?xr[Yt]&32767:~xr[Yt]&65535;l+=14}if(E.pLinear){if(Be===null){Be=new Uint16Array(65536);for(let b=0;b<65536;b++)if((b&31744)===31744||b>32768)Be[b]=0;else{let P=_(b);Be[b]=P<=0?0:Ut.toHalfFloat(8*Math.log(P))}}for(let b=0;b<16;b++)A[b]=Be[A[b]]}for(let b=0;b<4;b++){let P=F*4+b;if(!(P>=D))for(let O=0;O<4;O++){let re=Q*4+O;if(re>=M)continue;let Z=A[b*4+O];for(let H=0;H<E.ySampling;H++){let W=P*E.ySampling+H;if(!(W>=m))for(let me=0;me<E.xSampling;me++){let He=re*E.xSampling+me;if(He>=d)continue;let ne=W*d*h+S*d+He*2;g[ne]=Z&255,g[ne+1]=Z>>8&255}}}}}S+=2}return new DataView(g.buffer)}function Aa(n){let c=n.viewer,l={value:n.offset.value},d=new Uint8Array(n.columns*n.lines*(n.inputChannels.length*n.type*2)),m={version:Se(c,l),unknownUncompressedSize:Se(c,l),unknownCompressedSize:Se(c,l),acCompressedSize:Se(c,l),dcCompressedSize:Se(c,l),rleCompressedSize:Se(c,l),rleUncompressedSize:Se(c,l),rleRawSize:Se(c,l),totalAcUncompressedCount:Se(c,l),totalDcUncompressedCount:Se(c,l),acCompression:Se(c,l)};if(m.version<2)throw new Error("THREE.EXRLoader: "+De.compression+" version "+m.version+" is unsupported");let v=new Array,h=Tr(c,l)-2;for(;h>0;){let D=ci(c.buffer,l),I=Dt(c,l),L=I>>2&3,k=(I>>4)-1,F=new Int8Array([k])[0],Q=Dt(c,l);v.push({name:D,index:F,type:Q,compression:L}),h-=D.length+3}let T=De.channels,g=new Array(n.inputChannels.length);for(let D=0;D<n.inputChannels.length;++D){let I=g[D]={},L=T[D];I.name=L.name,I.compression=0,I.decoded=!1,I.type=L.pixelType,I.pLinear=L.pLinear,I.width=n.columns,I.height=n.lines}let A={idx:new Array(3)};for(let D=0;D<n.inputChannels.length;++D){let I=g[D],L=I.name.lastIndexOf("."),k=L>=0?I.name.substring(L+1):I.name;for(let F=0;F<v.length;++F){let Q=v[F];k===Q.name&&I.type===Q.type&&(I.compression=Q.compression,Q.index>=0&&(A.idx[Q.index]=D),I.offset=D)}}let S,C,E;if(m.acCompressedSize>0)switch(m.acCompression){case 0:S=new Uint16Array(m.totalAcUncompressedCount),Ar(n.array,c,l,m.acCompressedSize,S,m.totalAcUncompressedCount);break;case 1:let D=n.array.slice(l.value,l.value+m.totalAcUncompressedCount),I=jt(D);S=new Uint16Array(I.buffer),l.value+=m.totalAcUncompressedCount;break}if(m.dcCompressedSize>0){let D={array:n.array,offset:l,size:m.dcCompressedSize};C=new Uint16Array(tn(D).buffer),l.value+=m.dcCompressedSize}if(m.rleRawSize>0){let D=n.array.slice(l.value,l.value+m.rleCompressedSize),I=jt(D);E=en(I.buffer),l.value+=m.rleCompressedSize}let R=0,M=new Array(g.length);for(let D=0;D<M.length;++D)M[D]=new Array;for(let D=0;D<n.lines;++D)for(let I=0;I<g.length;++I)M[I].push(R),R+=g[I].width*n.type*2;A.idx[0]!==void 0&&g[A.idx[0]]&&Bo(A,M,g,S,C,d);for(let D=0;D<g.length;++D){let I=g[D];if(!I.decoded)switch(I.compression){case 2:let L=0,k=0;for(let F=0;F<n.lines;++F){let Q=M[D][L];for(let b=0;b<I.width;++b){for(let P=0;P<2*I.type;++P)d[Q++]=E[k+P*I.width*I.height];k++}L++}break;case 1:Fo(D,M,g,S,C,d);break;default:throw new Error("THREE.EXRLoader: unsupported channel compression")}}return new DataView(d.buffer)}function ci(n,c){let l=new Uint8Array(n),d=0;for(;l[c.value+d]!=0;)d+=1;let m=new TextDecoder().decode(l.slice(c.value,c.value+d));return c.value=c.value+d+1,m}function Yo(n,c,l){let d=new TextDecoder().decode(new Uint8Array(n).slice(c.value,c.value+l));return c.value=c.value+l,d}function Xo(n,c){let l=Pe(n,c),d=Fe(n,c);return[l,d]}function Qo(n,c){let l=Fe(n,c),d=Fe(n,c);return[l,d]}function Pe(n,c){let l=n.getInt32(c.value,!0);return c.value=c.value+4,l}function Fe(n,c){let l=n.getUint32(c.value,!0);return c.value=c.value+4,l}function Ta(n,c){let l=n[c.value];return c.value=c.value+1,l}function Dt(n,c){let l=n.getUint8(c.value);return c.value=c.value+1,l}let Se=function(n,c){let l=Number(n.getBigInt64(c.value,!0));return c.value+=8,l};function Ce(n,c){let l=n.getFloat32(c.value,!0);return c.value+=4,l}function Zo(n,c){return Ut.toHalfFloat(Ce(n,c))}function _(n){let c=(n&31744)>>10,l=n&1023;return(n>>15?-1:1)*(c?c===31?l?NaN:1/0:Math.pow(2,c-15)*(1+l/1024):6103515625e-14*(l/1024))}function Tr(n,c){let l=n.getUint16(c.value,!0);return c.value+=2,l}function Ko(n,c){return _(Tr(n,c))}function jo(n,c,l,d){let m=l.value,v=[];for(;l.value<m+d-1;){let h=ci(c,l),T=Pe(n,l),g=Dt(n,l);l.value+=3;let A=Pe(n,l),S=Pe(n,l);v.push({name:h,pixelType:T,pLinear:g,xSampling:A,ySampling:S})}return l.value+=1,v}function qo(n,c){let l=Ce(n,c),d=Ce(n,c),m=Ce(n,c),v=Ce(n,c),h=Ce(n,c),T=Ce(n,c),g=Ce(n,c),A=Ce(n,c);return{redX:l,redY:d,greenX:m,greenY:v,blueX:h,blueY:T,whiteX:g,whiteY:A}}function Jo(n,c){let l=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],d=Dt(n,c);return l[d]}function $o(n,c){let l=Pe(n,c),d=Pe(n,c),m=Pe(n,c),v=Pe(n,c);return{xMin:l,yMin:d,xMax:m,yMax:v}}function ec(n,c){let l=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],d=Dt(n,c);return l[d]}function tc(n,c){let l=["ENVMAP_LATLONG","ENVMAP_CUBE"],d=Dt(n,c);return l[d]}function rc(n,c){let l=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],d=["ROUND_DOWN","ROUND_UP"],m=Fe(n,c),v=Fe(n,c),h=Dt(n,c);return{xSize:m,ySize:v,levelMode:l[h&15],roundingMode:d[h>>4]}}function ic(n,c){let l=Ce(n,c),d=Ce(n,c);return[l,d]}function nc(n,c){let l=Ce(n,c),d=Ce(n,c),m=Ce(n,c);return[l,d,m]}function ac(n,c,l,d,m){if(d==="string"||d==="stringvector"||d==="iccProfile")return Yo(c,l,m);if(d==="chlist")return jo(n,c,l,m);if(d==="chromaticities")return qo(n,l);if(d==="compression")return Jo(n,l);if(d==="box2i")return $o(n,l);if(d==="envmap")return tc(n,l);if(d==="tiledesc")return rc(n,l);if(d==="lineOrder")return ec(n,l);if(d==="float")return Ce(n,l);if(d==="v2f")return ic(n,l);if(d==="v3f")return nc(n,l);if(d==="int")return Pe(n,l);if(d==="rational")return Xo(n,l);if(d==="timecode")return Qo(n,l);if(d==="preview"||d==="deepImageState"||d==="idmanifest")return l.value+=m,"skipped";l.value+=m}function sc(n,c){let l=Math.log2(n);return c=="ROUND_DOWN"?Math.floor(l):Math.ceil(l)}function oc(n,c,l){let d=0;switch(n.levelMode){case"ONE_LEVEL":d=1;break;case"MIPMAP_LEVELS":d=sc(Math.max(c,l),n.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return d}function Sa(n,c,l,d){let m=new Array(n);for(let v=0;v<n;v++){let h=1<<v,T=c/h|0;d=="ROUND_UP"&&T*h<c&&(T+=1);let g=Math.max(T,1);m[v]=(g+l-1)/l|0}return m}function cc(){let n=this,c=n.offset,l={value:0};for(let d=0;d<n.tileCount;d++){let m=Pe(n.viewer,c),v=Pe(n.viewer,c);c.value+=8,n.size=Fe(n.viewer,c);let h=m*n.blockWidth,T=v*n.blockHeight;n.columns=h+n.blockWidth>n.width?n.width-h:n.blockWidth,n.lines=T+n.blockHeight>n.height?n.height-T:n.blockHeight;let g=n.columns*n.totalBytes,S=n.size<n.lines*g?n.uncompress(n):oi(n);c.value+=n.size;for(let C=0;C<n.lines;C++){let E=C*n.columns*n.totalBytes;for(let R=0;R<n.inputChannels.length;R++){let M=De.channels[R].name,D=n.channelByteOffsets[M]*n.columns,I=n.decodeChannels[M];if(I===void 0)continue;l.value=E+D;let L=(n.height-(1+T+C))*n.outLineWidth;for(let k=0;k<n.columns;k++){let F=L+(k+h)*n.outputChannels+I;n.byteArray[F]=n.getter(S,l)}}}}}function lc(){let n=this,c=n.offset,l={value:0};for(let d=0;d<n.height/n.blockHeight;d++){let m=Pe(n.viewer,c)-De.dataWindow.yMin;n.size=Fe(n.viewer,c),n.lines=m+n.blockHeight>n.height?n.height-m:n.blockHeight;let v=n.columns*n.totalBytes,T=n.size<n.lines*v?n.uncompress(n):oi(n);c.value+=n.size;for(let g=0;g<n.lines;g++){let A=m+g,S=g*v,C=(n.height-1-A)*n.outLineWidth;for(let E=0;E<n.inputChannels.length;E++){let R=De.channels[E].name,M=n.channelByteOffsets[R]*n.columns,D=n.decodeChannels[R];if(D!==void 0){l.value=S+M;for(let I=0;I<n.columns;I++){let L=C+I*n.outputChannels+D;n.byteArray[L]=n.getter(T,l)}}}}}}function uc(){let n=this,c=n.chunkOffsets,l={value:0};for(let d=0;d<c.length;d++){let m={value:c[d]};m.value+=4;let v=Pe(n.viewer,m)-De.dataWindow.yMin;n.size=Fe(n.viewer,m),n.lines=v+n.blockHeight>n.height?n.height-v:n.blockHeight;let h=n.columns*n.totalBytes,T=n.size<n.lines*h,g=n.offset;n.offset=m;let A=T?n.uncompress(n):oi(n);n.offset=g;for(let S=0;S<n.lines;S++){let C=v+S,E=S*h,R=(n.height-1-C)*n.outLineWidth;for(let M=0;M<n.inputChannels.length;M++){let D=De.channels[M].name,I=n.channelByteOffsets[D]*n.columns,L=n.decodeChannels[D];if(L!==void 0){l.value=E+I;for(let k=0;k<n.columns;k++){let F=R+k*n.outputChannels+L;n.byteArray[F]=n.getter(A,l)}}}}}}function xa(n,c,l,d){if(l===0)return null;let m=n.slice(c,c+l);switch(d){case"NO_COMPRESSION":return new DataView(m.buffer,m.byteOffset,m.byteLength);case"RLE_COMPRESSION":{let v=new Uint8Array(en(m.buffer.slice(m.byteOffset,m.byteOffset+m.byteLength))),h=new Uint8Array(v.length);return ai(v),si(v,h),new DataView(h.buffer)}case"ZIPS_COMPRESSION":{let v=jt(m),h=new Uint8Array(v.length);return ai(v),si(v,h),new DataView(h.buffer)}default:throw new Error("THREE.EXRLoader: "+d+" is unsupported for deep data")}}function hc(){let n=this,c=n.chunkOffsets,l=n.width,d=n.height,m=n.deepChannels,v=De.compression,h=n.multiPart,T=n.decodeChannels,g=n.outputChannels,A=n.byteArray instanceof Uint16Array,S=-1;for(let C=0;C<m.length;C++)if(m[C].name==="A"){S=C;break}for(let C=0;C<c.length;C++){let E={value:c[C]};h&&(E.value+=4);let R=Pe(n.viewer,E)-De.dataWindow.yMin,M=Se(n.viewer,E),D=Se(n.viewer,E);Se(n.viewer,E);let I=xa(n.array,E.value,M,v);if(E.value+=M,I===null)continue;let L=new Uint32Array(l);for(let O=0;O<l;O++)L[O]=I.getUint32(O*4,!0);let k=L[l-1];if(k===0){E.value+=D;continue}let F=xa(n.array,E.value,D,v),Q=[],b=0;for(let O=0;O<m.length;O++)Q.push(b),b+=k*m[O].bytesPerSample;let P=(d-1-R)*n.outLineWidth;for(let O=0;O<l;O++){let re=O===0?0:L[O-1],H=L[O]-re;if(H===0)continue;let W=new Float32Array(g),me=0;for(let ne=0;ne<H;ne++){let nt=re+ne,Vt=1-me;if(Vt<=0)break;let Sr=1;if(S>=0){let at=m[S].bytesPerSample,bt=Q[S]+nt*at;Sr=at===2?_(F.getUint16(bt,!0)):F.getFloat32(bt,!0)}for(let at=0;at<m.length;at++){let bt=m[at],di=T[bt.name];if(di===void 0)continue;let fi=bt.bytesPerSample,mi=Q[at]+nt*fi,xr=fi===2?_(F.getUint16(mi,!0)):F.getFloat32(mi,!0);W[di]+=xr*Vt}me+=Sr*Vt}T.A!==void 0&&(W[T.A]=me);let He=P+O*g;for(let ne=0;ne<g;ne++)n.byteArray[He+ne]=A?Ut.toHalfFloat(W[ne]):W[ne]}}}function Ea(n,c,l){let d={},m=!1;for(;;){let v=ci(c,l);if(v==="")break;m=!0;let h=ci(c,l),T=Fe(n,l),g=ac(n,c,l,h,T);g===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${h}'.`):d[v]=g}return m?d:null}function dc(n,c,l){if(n.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");let d=n.getUint8(4),m=n.getUint8(5),v={singleTile:!!(m&2),longName:!!(m&4),deepFormat:!!(m&8),multiPart:!!(m&16)};l.value=8;let h=[];if(v.multiPart){for(;;){let T=Ea(n,c,l);if(T===null)break;T.version=d,T.spec=v,h.push(T)}if(h.length===0)throw new Error("THREE.EXRLoader: No valid part headers found.")}else{let T=Ea(n,c,l);T.version=d,T.spec=v,h.push(T)}return h}function fc(n,c,l,d,m,v){let h={size:0,viewer:c,array:l,offset:d,width:n.dataWindow.xMax-n.dataWindow.xMin+1,height:n.dataWindow.yMax-n.dataWindow.yMin+1,inputChannels:n.channels,channelByteOffsets:{},shouldExpand:!1,yCbCr:!1,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Lt};switch(n.compression){case"NO_COMPRESSION":h.blockHeight=1,h.uncompress=oi;break;case"RLE_COMPRESSION":h.blockHeight=1,h.uncompress=zo;break;case"ZIPS_COMPRESSION":h.blockHeight=1,h.uncompress=tn;break;case"ZIP_COMPRESSION":h.blockHeight=16,h.uncompress=tn;break;case"PIZ_COMPRESSION":h.blockHeight=32,h.uncompress=ko;break;case"PXR24_COMPRESSION":h.blockHeight=16,h.uncompress=Wo;break;case"B44_COMPRESSION":case"B44A_COMPRESSION":h.blockHeight=32,h.uncompress=Vo;break;case"DWAA_COMPRESSION":h.blockHeight=32,h.uncompress=Aa;break;case"DWAB_COMPRESSION":h.blockHeight=256,h.uncompress=Aa;break;default:throw new Error("THREE.EXRLoader: "+n.compression+" is unsupported")}let T={};for(let E of n.channels)switch(E.name){case"BY":case"RY":case"Y":case"R":case"G":case"B":case"A":T[E.name]=!0,h.type=E.pixelType}let g=!1,A=!1;if(T.Y&&T.RY&&T.BY)h.outputChannels=4,h.yCbCr=!0;else if(T.R&&T.G&&T.B)h.outputChannels=4;else if(T.Y)h.outputChannels=1;else throw new Error("THREE.EXRLoader: file contains unsupported data channels.");switch(h.outputChannels){case 4:v==Bt?(g=!T.A,h.format=Bt,h.colorSpace=Lt,h.outputChannels=4,h.decodeChannels={R:0,G:1,B:2,A:3}):v==Mr?(h.format=Mr,h.colorSpace=Lt,h.outputChannels=2,h.decodeChannels={R:0,G:1}):v==xi?(h.format=xi,h.colorSpace=Lt,h.outputChannels=1,h.decodeChannels={R:0}):A=!0;break;case 1:v==Bt?(g=!0,h.format=Bt,h.colorSpace=Lt,h.outputChannels=4,h.shouldExpand=!0,h.decodeChannels={Y:0}):v==Mr?(h.format=Mr,h.colorSpace=Lt,h.outputChannels=2,h.shouldExpand=!0,h.decodeChannels={Y:0}):v==xi?(h.format=xi,h.colorSpace=Lt,h.outputChannels=1,h.decodeChannels={Y:0}):A=!0;break;default:A=!0}if(A)throw new Error("THREE.EXRLoader: invalid output format for specified file.");if(h.yCbCr&&(h.format=Bt,h.outputChannels=4,h.decodeChannels={Y:0,RY:1,BY:2},g=!0),h.type==1)switch(m){case En:h.getter=Ko;break;case _r:h.getter=Tr;break}else if(h.type==2)switch(m){case En:h.getter=Ce;break;case _r:h.getter=Zo}else throw new Error("THREE.EXRLoader: unsupported pixelType "+h.type+" for "+n.compression+".");h.columns=h.width;let S=h.width*h.height*h.outputChannels;switch(m){case En:h.byteArray=new Float32Array(S),g&&h.byteArray.fill(1,0,S);break;case _r:h.byteArray=new Uint16Array(S),g&&h.byteArray.fill(15360,0,S);break;default:console.error("THREE.EXRLoader: unsupported type: ",m);break}let C=0;for(let E of n.channels)h.decodeChannels[E.name]!==void 0&&(h.channelByteOffsets[E.name]=C),C+=E.pixelType*2;if(h.totalBytes=C,h.outLineWidth=h.width*h.outputChannels,n.spec.deepFormat){h.deepChannels=[];let E=0;for(let R of n.channels){let M=R.pixelType===0?4:R.pixelType*2;h.deepChannels.push({name:R.name,pixelType:R.pixelType,bytesPerSample:M}),E+=M}h.deepBytesPerSample=E,h.chunkOffsets=n._chunkOffsets,h.multiPart=n.spec.multiPart,h.decode=hc.bind(h)}else if(n.spec.singleTile){h.blockHeight=n.tiles.ySize,h.blockWidth=n.tiles.xSize;let E=oc(n.tiles,h.width,h.height),R=Sa(E,h.width,n.tiles.xSize,n.tiles.roundingMode),M=Sa(E,h.height,n.tiles.ySize,n.tiles.roundingMode);h.tileCount=R[0]*M[0];for(let D=0;D<E;D++)for(let I=0;I<M[D];I++)for(let L=0;L<R[D];L++)Se(c,d);h.decode=cc.bind(h)}else if(n.spec.multiPart)h.blockWidth=h.width,h.chunkOffsets=n._chunkOffsets,h.decode=uc.bind(h);else{h.blockWidth=h.width;let E=Math.ceil(h.height/h.blockHeight);for(let R=0;R<E;R++)Se(c,d);h.decode=lc.bind(h)}return h}let li={value:0},ui=new DataView(e),mc=new Uint8Array(e),hi=dc(ui,e,li),wa=Math.max(0,Math.min(this.part,hi.length-1)),De=hi[wa];if(De.spec.multiPart||De.spec.deepFormat)for(let n=0;n<hi.length;n++){let c=hi[n].chunkCount;if(n===wa){De._chunkOffsets=[];for(let l=0;l<c;l++)De._chunkOffsets.push(Se(ui,li))}else for(let l=0;l<c;l++)Se(ui,li)}let ze=fc(De,ui,mc,li,this.type,this.outputFormat);if(ze.decode(),ze.shouldExpand){let n=ze.byteArray;if(this.outputFormat==Bt)for(let c=0;c<n.length;c+=4)n[c+2]=n[c+1]=n[c];else if(this.outputFormat==Mr)for(let c=0;c<n.length;c+=2)n[c+1]=n[c]}if(ze.yCbCr){let n=ze.byteArray,c=ze.width*ze.height;if(this.type===_r)for(let l=0;l<c;l++){let d=l*4,m=_(n[d]),v=_(n[d+1]),h=_(n[d+2]),T=(1+v)*m,g=(1+h)*m,A=(m-T*.2126-g*.0722)/.7152;n[d]=Ut.toHalfFloat(Math.max(0,T)),n[d+1]=Ut.toHalfFloat(Math.max(0,A)),n[d+2]=Ut.toHalfFloat(Math.max(0,g))}else for(let l=0;l<c;l++){let d=l*4,m=n[d],v=n[d+1],h=n[d+2],T=(1+v)*m,g=(1+h)*m;n[d]=Math.max(0,T),n[d+1]=Math.max(0,(m-T*.2126-g*.0722)/.7152),n[d+2]=Math.max(0,g)}}return{header:De,width:ze.width,height:ze.height,data:ze.byteArray,format:ze.format,colorSpace:ze.colorSpace,type:this.type,minFilter:Ja,magFilter:Ja,generateMipmaps:!1,flipY:!1}}setDataType(e){return this.type=e,this}setOutputFormat(e){return this.outputFormat=e,this}setPart(e){return this.part=e,this}};var Rn=class extends Hr{load(e,r,i,a){let s=new ku(this.manager);s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,o=>{_t(o instanceof ArrayBuffer);try{r(o)}catch(u){a!=null?a(u):console.error(u),this.manager.itemError(e)}},i,a)}};function Ss(t){return t instanceof Wu?t.getContext().getExtension("OES_texture_float_linear")!=null:t.backend.hasFeature?.("float32-filterable")??!1}var $u="This is not an object",eh="This is not a Float16Array object",rs="This constructor is not a subclass of Float16Array",xs="The constructor property value is not an object",th="Species constructor didn't return TypedArray object",rh="Derived constructor created TypedArray object which was too small length",Ur="Attempting to access detached ArrayBuffer",In="Cannot convert undefined or null to object",_n="Cannot mix BigInt and other types, use explicit conversions",is="@@iterator property is not callable",ns="Reduce of empty array with no initial value",ih="The comparison function must be either a function or undefined",wn="Offset is out of bounds";function ae(t){return(e,...r)=>be(t,e,r)}function rr(t,e){return ae(Jt(t,e).get)}var{apply:be,construct:br,defineProperty:nh,get:yn,getOwnPropertyDescriptor:Jt,getPrototypeOf:Gr,has:Mn,ownKeys:Es,set:as,setPrototypeOf:ws}=Reflect,ah=Proxy,{EPSILON:sh,MAX_SAFE_INTEGER:ss,isFinite:ys,isNaN:$t}=Number,{iterator:ct,species:oh,toStringTag:Ln,for:ch}=Symbol,er=Object,{create:bi,defineProperty:zr,freeze:lh,is:os}=er,Pn=er.prototype,uh=Pn.__lookupGetter__?ae(Pn.__lookupGetter__):(t,e)=>{if(t==null)throw oe(In);let r=er(t);do{let i=Jt(r,e);if(i!==void 0)return gt(i,"get")?i.get:void 0}while((r=Gr(r))!==null)},gt=er.hasOwn||ae(Pn.hasOwnProperty),Cs=Array,Ds=Cs.isArray,Oi=Cs.prototype,hh=ae(Oi.join),dh=ae(Oi.push),fh=ae(Oi.toLocaleString),Bn=Oi[ct],mh=ae(Bn),{abs:ph,trunc:Rs}=Math,Ui=ArrayBuffer,gh=Ui.isView,Is=Ui.prototype,vh=ae(Is.slice),Ah=rr(Is,"byteLength"),Nn=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,Th=Nn&&rr(Nn.prototype,"byteLength"),Fn=Gr(Uint8Array),Sh=Fn.from,Ee=Fn.prototype,xh=Ee[ct],Eh=ae(Ee.keys),wh=ae(Ee.values),yh=ae(Ee.entries),Ch=ae(Ee.set),cs=ae(Ee.reverse),Dh=ae(Ee.fill),Rh=ae(Ee.copyWithin),ls=ae(Ee.sort),Nr=ae(Ee.slice),Ih=ae(Ee.subarray),xe=rr(Ee,"buffer"),Ft=rr(Ee,"byteOffset"),$=rr(Ee,"length"),_s=rr(Ee,Ln),_h=Uint8Array,Ge=Uint16Array,us=(...t)=>be(Sh,Ge,t),Hn=Uint32Array,Mh=Float32Array,Ht=Gr([][ct]()),Li=ae(Ht.next),Ph=ae((function*(){})().next),Nh=Gr(Ht),bh=DataView.prototype,Oh=ae(bh.getUint16),oe=TypeError,Cn=RangeError,Ms=WeakSet,Ps=Ms.prototype,Uh=ae(Ps.add),Lh=ae(Ps.has),Bi=WeakMap,Gn=Bi.prototype,Di=ae(Gn.get),Bh=ae(Gn.has),zn=ae(Gn.set),Ns=new Bi,Fh=bi(null,{next:{value:function(){let t=Di(Ns,this);return Li(t)}},[ct]:{value:function(){return this}}});function Or(t){if(t[ct]===Bn&&Ht.next===Li)return t;let e=bi(Fh);return zn(Ns,e,mh(t)),e}var bs=new Bi,Os=bi(Nh,{next:{value:function(){let t=Di(bs,this);return Ph(t)},writable:!0,configurable:!0}});for(let t of Es(Ht))t!=="next"&&zr(Os,t,Jt(Ht,t));function hs(t){let e=bi(Os);return zn(bs,e,t),e}function Ri(t){return t!==null&&typeof t=="object"||typeof t=="function"}function ds(t){return t!==null&&typeof t=="object"}function Ii(t){return _s(t)!==void 0}function bn(t){let e=_s(t);return e==="BigInt64Array"||e==="BigUint64Array"}function Hh(t){try{return Ds(t)?!1:(Ah(t),!0)}catch{return!1}}function Us(t){if(Nn===null)return!1;try{return Th(t),!0}catch{return!1}}function Gh(t){return Hh(t)||Us(t)}function fs(t){return Ds(t)?t[ct]===Bn&&Ht.next===Li:!1}function zh(t){return Ii(t)?t[ct]===xh&&Ht.next===Li:!1}function Ei(t){if(typeof t!="string")return!1;let e=+t;return t!==e+""||!ys(e)?!1:e===Rs(e)}var _i=ch("__Float16Array__");function kh(t){if(!ds(t))return!1;let e=Gr(t);if(!ds(e))return!1;let r=e.constructor;if(r===void 0)return!1;if(!Ri(r))throw oe(xs);return Mn(r,_i)}var On=1/sh;function Wh(t){return t+On-On}var Ls=6103515625e-14,Vh=65504,Bs=.0009765625,ms=Bs*Ls,Yh=Bs*On;function Xh(t){let e=+t;if(!ys(e)||e===0)return e;let r=e>0?1:-1,i=ph(e);if(i<Ls)return r*Wh(i/ms)*ms;let a=(1+Yh)*i,s=a-(a-i);return s>Vh||$t(s)?r*(1/0):r*s}var Fs=new Ui(4),Hs=new Mh(Fs),Gs=new Hn(Fs),et=new Ge(512),tt=new _h(512);for(let t=0;t<256;++t){let e=t-127;e<-24?(et[t]=0,et[t|256]=32768,tt[t]=24,tt[t|256]=24):e<-14?(et[t]=1024>>-e-14,et[t|256]=1024>>-e-14|32768,tt[t]=-e-1,tt[t|256]=-e-1):e<=15?(et[t]=e+15<<10,et[t|256]=e+15<<10|32768,tt[t]=13,tt[t|256]=13):e<128?(et[t]=31744,et[t|256]=64512,tt[t]=24,tt[t|256]=24):(et[t]=31744,et[t|256]=64512,tt[t]=13,tt[t|256]=13)}function ot(t){Hs[0]=Xh(t);let e=Gs[0],r=e>>23&511;return et[r]+((e&8388607)>>tt[r])}var kn=new Hn(2048);for(let t=1;t<1024;++t){let e=t<<13,r=0;for(;(e&8388608)===0;)e<<=1,r-=8388608;e&=-8388609,r+=947912704,kn[t]=e|r}for(let t=1024;t<2048;++t)kn[t]=939524096+(t-1024<<13);var ir=new Hn(64);for(let t=1;t<31;++t)ir[t]=t<<23;ir[31]=1199570944;ir[32]=2147483648;for(let t=33;t<63;++t)ir[t]=2147483648+(t-32<<23);ir[63]=3347054592;var zs=new Ge(64);for(let t=1;t<64;++t)t!==32&&(zs[t]=1024);function ee(t){let e=t>>10;return Gs[0]=kn[zs[e]+(t&1023)]+ir[e],Hs[0]}function pt(t){let e=+t;return $t(e)||e===0?0:Rs(e)}function Dn(t){let e=pt(t);return e<0?0:e<ss?e:ss}function wi(t,e){if(!Ri(t))throw oe($u);let r=t.constructor;if(r===void 0)return e;if(!Ri(r))throw oe(xs);return r[oh]??e}function Lr(t){if(Us(t))return!1;try{return vh(t,0,0),!1}catch{}return!0}function ps(t,e){let r=$t(t),i=$t(e);if(r&&i)return 0;if(r)return 1;if(i||t<e)return-1;if(t>e)return 1;if(t===0&&e===0){let a=os(t,0),s=os(e,0);if(!a&&s)return-1;if(a&&!s)return 1}return 0}var Wn=2,Mi=new Bi;function qt(t){return Bh(Mi,t)||!gh(t)&&kh(t)}function J(t){if(!qt(t))throw oe(eh)}function yi(t,e){let r=qt(t),i=Ii(t);if(!r&&!i)throw oe(th);if(typeof e=="number"){let a;if(r){let s=G(t);a=$(s)}else a=$(t);if(a<e)throw oe(rh)}if(bn(t))throw oe(_n)}function G(t){let e=Di(Mi,t);if(e!==void 0){let a=xe(e);if(Lr(a))throw oe(Ur);return e}let r=t.buffer;if(Lr(r))throw oe(Ur);let i=br(We,[r,t.byteOffset,t.length],t.constructor);return Di(Mi,i)}function gs(t){let e=$(t),r=[];for(let i=0;i<e;++i)r[i]=ee(t[i]);return r}var ks=new Ms;for(let t of Es(Ee)){if(t===Ln)continue;let e=Jt(Ee,t);gt(e,"get")&&typeof e.get=="function"&&Uh(ks,e.get)}var Qh=lh({get(t,e,r){return Ei(e)&&gt(t,e)?ee(yn(t,e)):Lh(ks,uh(t,e))?yn(t,e):yn(t,e,r)},set(t,e,r,i){return Ei(e)&&gt(t,e)?as(t,e,ot(r)):as(t,e,r,i)},getOwnPropertyDescriptor(t,e){if(Ei(e)&&gt(t,e)){let r=Jt(t,e);return r.value=ee(r.value),r}return Jt(t,e)},defineProperty(t,e,r){return Ei(e)&&gt(t,e)&&gt(r,"value")&&(r.value=ot(r.value)),nh(t,e,r)}}),We=class t{constructor(e,r,i){let a;if(qt(e))a=br(Ge,[G(e)],new.target);else if(Ri(e)&&!Gh(e)){let o,u;if(Ii(e)){o=e,u=$(e);let f=xe(e);if(Lr(f))throw oe(Ur);if(bn(e))throw oe(_n);let p=new Ui(u*Wn);a=br(Ge,[p],new.target)}else{let f=e[ct];if(f!=null&&typeof f!="function")throw oe(is);f!=null?fs(e)?(o=e,u=e.length):(o=[...e],u=o.length):(o=e,u=Dn(o.length)),a=br(Ge,[u],new.target)}for(let f=0;f<u;++f)a[f]=ot(o[f])}else a=br(Ge,arguments,new.target);let s=new ah(a,Qh);return zn(Mi,s,a),s}static from(e,...r){let i=this;if(!Mn(i,_i))throw oe(rs);if(i===t){if(qt(e)&&r.length===0){let x=G(e),y=new Ge(xe(x),Ft(x),$(x));return new t(xe(Nr(y)))}if(r.length===0)return new t(xe(us(e,ot)));let f=r[0],p=r[1];return new t(xe(us(e,function(x,...y){return ot(be(f,this,[x,...Or(y)]))},p)))}let a,s,o=e[ct];if(o!=null&&typeof o!="function")throw oe(is);if(o!=null)fs(e)?(a=e,s=e.length):zh(e)?(a=e,s=$(e)):(a=[...e],s=a.length);else{if(e==null)throw oe(In);a=er(e),s=Dn(a.length)}let u=new i(s);if(r.length===0)for(let f=0;f<s;++f)u[f]=a[f];else{let f=r[0],p=r[1];for(let x=0;x<s;++x)u[x]=be(f,p,[a[x],x])}return u}static of(...e){let r=this;if(!Mn(r,_i))throw oe(rs);let i=e.length;if(r===t){let s=new t(i),o=G(s);for(let u=0;u<i;++u)o[u]=ot(e[u]);return s}let a=new r(i);for(let s=0;s<i;++s)a[s]=e[s];return a}keys(){J(this);let e=G(this);return Eh(e)}values(){J(this);let e=G(this);return hs((function*(){for(let r of wh(e))yield ee(r)})())}entries(){J(this);let e=G(this);return hs((function*(){for(let[r,i]of yh(e))yield[r,ee(i)]})())}at(e){J(this);let r=G(this),i=$(r),a=pt(e),s=a>=0?a:i+a;if(!(s<0||s>=i))return ee(r[s])}with(e,r){J(this);let i=G(this),a=$(i),s=pt(e),o=s>=0?s:a+s,u=+r;if(o<0||o>=a)throw Cn(wn);let f=new Ge(xe(i),Ft(i),$(i)),p=new t(xe(Nr(f))),x=G(p);return x[o]=ot(u),p}map(e,...r){J(this);let i=G(this),a=$(i),s=r[0],o=wi(i,t);if(o===t){let f=new t(a),p=G(f);for(let x=0;x<a;++x){let y=ee(i[x]);p[x]=ot(be(e,s,[y,x,this]))}return f}let u=new o(a);yi(u,a);for(let f=0;f<a;++f){let p=ee(i[f]);u[f]=be(e,s,[p,f,this])}return u}filter(e,...r){J(this);let i=G(this),a=$(i),s=r[0],o=[];for(let p=0;p<a;++p){let x=ee(i[p]);be(e,s,[x,p,this])&&dh(o,x)}let u=wi(i,t),f=new u(o);return yi(f),f}reduce(e,...r){J(this);let i=G(this),a=$(i);if(a===0&&r.length===0)throw oe(ns);let s,o;r.length===0?(s=ee(i[0]),o=1):(s=r[0],o=0);for(let u=o;u<a;++u)s=e(s,ee(i[u]),u,this);return s}reduceRight(e,...r){J(this);let i=G(this),a=$(i);if(a===0&&r.length===0)throw oe(ns);let s,o;r.length===0?(s=ee(i[a-1]),o=a-2):(s=r[0],o=a-1);for(let u=o;u>=0;--u)s=e(s,ee(i[u]),u,this);return s}forEach(e,...r){J(this);let i=G(this),a=$(i),s=r[0];for(let o=0;o<a;++o)be(e,s,[ee(i[o]),o,this])}find(e,...r){J(this);let i=G(this),a=$(i),s=r[0];for(let o=0;o<a;++o){let u=ee(i[o]);if(be(e,s,[u,o,this]))return u}}findIndex(e,...r){J(this);let i=G(this),a=$(i),s=r[0];for(let o=0;o<a;++o){let u=ee(i[o]);if(be(e,s,[u,o,this]))return o}return-1}findLast(e,...r){J(this);let i=G(this),a=$(i),s=r[0];for(let o=a-1;o>=0;--o){let u=ee(i[o]);if(be(e,s,[u,o,this]))return u}}findLastIndex(e,...r){J(this);let i=G(this),a=$(i),s=r[0];for(let o=a-1;o>=0;--o){let u=ee(i[o]);if(be(e,s,[u,o,this]))return o}return-1}every(e,...r){J(this);let i=G(this),a=$(i),s=r[0];for(let o=0;o<a;++o)if(!be(e,s,[ee(i[o]),o,this]))return!1;return!0}some(e,...r){J(this);let i=G(this),a=$(i),s=r[0];for(let o=0;o<a;++o)if(be(e,s,[ee(i[o]),o,this]))return!0;return!1}set(e,...r){J(this);let i=G(this),a=pt(r[0]);if(a<0)throw Cn(wn);if(e==null)throw oe(In);if(bn(e))throw oe(_n);if(qt(e))return Ch(G(this),G(e),a);if(Ii(e)){let f=xe(e);if(Lr(f))throw oe(Ur)}let s=$(i),o=er(e),u=Dn(o.length);if(a===1/0||u+a>s)throw Cn(wn);for(let f=0;f<u;++f)i[f+a]=ot(o[f])}reverse(){J(this);let e=G(this);return cs(e),this}toReversed(){J(this);let e=G(this),r=new Ge(xe(e),Ft(e),$(e)),i=new t(xe(Nr(r))),a=G(i);return cs(a),i}fill(e,...r){J(this);let i=G(this);return Dh(i,ot(e),...Or(r)),this}copyWithin(e,r,...i){J(this);let a=G(this);return Rh(a,e,r,...Or(i)),this}sort(e){J(this);let r=G(this),i=e!==void 0?e:ps;return ls(r,(a,s)=>i(ee(a),ee(s))),this}toSorted(e){J(this);let r=G(this);if(e!==void 0&&typeof e!="function")throw new oe(ih);let i=e!==void 0?e:ps,a=new Ge(xe(r),Ft(r),$(r)),s=new t(xe(Nr(a))),o=G(s);return ls(o,(u,f)=>i(ee(u),ee(f))),s}slice(e,r){J(this);let i=G(this),a=wi(i,t);if(a===t){let se=new Ge(xe(i),Ft(i),$(i));return new t(xe(Nr(se,e,r)))}let s=$(i),o=pt(e),u=r===void 0?s:pt(r),f;o===-1/0?f=0:o<0?f=s+o>0?s+o:0:f=s<o?s:o;let p;u===-1/0?p=0:u<0?p=s+u>0?s+u:0:p=s<u?s:u;let x=p-f>0?p-f:0,y=new a(x);if(yi(y,x),x===0)return y;let U=xe(i);if(Lr(U))throw oe(Ur);let V=0;for(;f<p;)y[V]=ee(i[f]),++f,++V;return y}subarray(e,r){J(this);let i=G(this),a=wi(i,t),s=new Ge(xe(i),Ft(i),$(i)),o=Ih(s,e,r),u=new a(xe(o),Ft(o),$(o));return yi(u),u}indexOf(e,...r){J(this);let i=G(this),a=$(i),s=pt(r[0]);if(s===1/0)return-1;s<0&&(s+=a,s<0&&(s=0));for(let o=s;o<a;++o)if(gt(i,o)&&ee(i[o])===e)return o;return-1}lastIndexOf(e,...r){J(this);let i=G(this),a=$(i),s=r.length>=1?pt(r[0]):a-1;if(s===-1/0)return-1;s>=0?s=s<a-1?s:a-1:s+=a;for(let o=s;o>=0;--o)if(gt(i,o)&&ee(i[o])===e)return o;return-1}includes(e,...r){J(this);let i=G(this),a=$(i),s=pt(r[0]);if(s===1/0)return!1;s<0&&(s+=a,s<0&&(s=0));let o=$t(e);for(let u=s;u<a;++u){let f=ee(i[u]);if(o&&$t(f)||f===e)return!0}return!1}join(e){J(this);let r=G(this),i=gs(r);return hh(i,e)}toLocaleString(...e){J(this);let r=G(this),i=gs(r);return fh(i,...Or(e))}get[Ln](){if(qt(this))return"Float16Array"}};zr(We,"BYTES_PER_ELEMENT",{value:Wn});zr(We,_i,{});ws(We,Fn);var Pi=We.prototype;zr(Pi,"BYTES_PER_ELEMENT",{value:Wn});zr(Pi,ct,{value:Pi.values,writable:!0,configurable:!0});ws(Pi,Ee);function Zh(t,e,...r){return ee(Oh(t,e,...Or(r)))}var Un=class extends Hr{constructor(e,r){super(r),this.parser=e}load(e,r,i,a){let s=new Rn(this.manager);s.setRequestHeader(this.requestHeader),s.setPath(this.path),s.setWithCredentials(this.withCredentials),s.load(e,o=>{try{r(this.parser(o))}catch(u){a!=null?a(u):console.error(u),this.manager.itemError(e)}},i,a)}};function Kh(t){let e=t instanceof Int8Array?Yu:t instanceof Uint8Array?es:t instanceof Uint8ClampedArray?es:t instanceof Int16Array?Xu:t instanceof Uint16Array?Qu:t instanceof Int32Array?Zu:t instanceof Uint32Array?Ku:t instanceof We?ju:t instanceof Float32Array?ts:t instanceof Float64Array?ts:null;return _t(e!=null),e}var Mt=class extends Hr{constructor(e,r,i={},a){super(a),this.textureClass=e,this.parser=r,this.options={format:Vu,minFilter:$a,magFilter:$a,...i}}load(e,r,i,a){let s=new this.textureClass,o=new Un(this.parser,this.manager);return o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(this.withCredentials),o.load(e,u=>{s.image.data=u instanceof We?new Uint16Array(u.buffer):u;let{width:f,height:p,depth:x,...y}=this.options;f!=null&&(s.image.width=f),p!=null&&(s.image.height=p),"depth"in s.image&&x!=null&&(s.image.depth=x),s.type=Kh(u),Object.assign(s,y),s.needsUpdate=!0,r?.(s)},i,a),s}},Br=rt.clamp,vA=rt.euclideanModulo,AA=rt.inverseLerp,Vn=rt.lerp,Ws=rt.degToRad,TA=rt.radToDeg,SA=rt.isPowerOfTwo,xA=rt.ceilPowerOfTwo,EA=rt.floorPowerOfTwo,wA=rt.normalize;function Vs(t,e,r,i=0,a=1){return rt.mapLinear(t,e,r,i,a)}function Ys(t){return Math.min(Math.max(t,0),1)}function Y(t){return(e,r)=>{e instanceof Ni?Object.defineProperty(e,r,{enumerable:!0,get(){return this.defines?.[t]!=null},set(i){i!==this[r]&&(i?(this.defines??={},this.defines[t]="1"):delete this.defines?.[t],this.needsUpdate=!0)}}):Object.defineProperty(e,r,{enumerable:!0,get(){return this.defines.has(t)},set(i){i!==this[r]&&(i?this.defines.set(t,"1"):this.defines.delete(t),this.setChanged())}})}}function vs(t){return typeof t=="number"?Math.floor(t):typeof t=="string"?parseInt(t,10):typeof t=="boolean"?+t:0}function vt(t,{min:e=Number.MIN_SAFE_INTEGER,max:r=Number.MAX_SAFE_INTEGER}={}){return(i,a)=>{i instanceof Ni?Object.defineProperty(i,a,{enumerable:!0,get(){let s=this.defines?.[t];return s!=null?vs(s):0},set(s){let o=this[a];s!==o&&(this.defines??={},this.defines[t]=Br(s,e,r).toFixed(0),this.needsUpdate=!0)}}):Object.defineProperty(i,a,{enumerable:!0,get(){let s=this.defines.get(t);return s!=null?vs(s):0},set(s){let o=this[a];s!==o&&(this.defines.set(t,Br(s,e,r).toFixed(0)),this.setChanged())}})}}function As(t){return typeof t=="number"?t:typeof t=="string"?parseFloat(t):typeof t=="boolean"?+t:0}function Fi(t,{min:e=-1/0,max:r=1/0,precision:i=7}={}){return(a,s)=>{a instanceof Ni?Object.defineProperty(a,s,{enumerable:!0,get(){let o=this.defines?.[t];return o!=null?As(o):0},set(o){let u=this[s];o!==u&&(this.defines??={},this.defines[t]=Br(o,e,r).toFixed(i),this.needsUpdate=!0)}}):Object.defineProperty(a,s,{enumerable:!0,get(){let o=this.defines.get(t);return o!=null?As(o):0},set(o){let u=this[s];o!==u&&(this.defines.set(t,Br(o,e,r).toFixed(i)),this.setChanged())}})}}function Yn(t,{validate:e}={}){return(r,i)=>{r instanceof Ni?Object.defineProperty(r,i,{enumerable:!0,get(){return this.defines?.[t]},set(a){if(a!==this[i]){if(e?.(a)===!1){console.error(`Expression validation failed: ${a}`);return}this.defines??={},this.defines[t]=a,this.needsUpdate=!0}}}):Object.defineProperty(r,i,{enumerable:!0,get(){return this.defines.get(t)},set(a){if(a!==this[i]){if(e?.(a)===!1){console.error(`Expression validation failed: ${a}`);return}this.defines.set(t,a),this.setChanged()}}})}}function Xn(t,...e){let r={};for(let i=0;i<e.length;i+=2){let a=e[i],s=e[i+1];for(let o of s)r[o]={enumerable:!0,get:()=>a[o],set:u=>{a[o]=u}}}return Object.defineProperties(t,r),t}function Qn(t,e,r){let i={};for(let a of r)i[a]={enumerable:!0,get:()=>e.uniforms[a].value,set:s=>{e.uniforms[a].value=s}};return Object.defineProperties(t,i),t}var tr=class extends Hr{constructor(e={},r){super(r),this.options=e}load(e,r,i,a){let{width:s,height:o,depth:u}=this.options,f=new qu(null,s,o,u),p=new Pr(this.manager);return p.setRequestHeader(this.requestHeader),p.setPath(this.path),p.setWithCredentials(this.withCredentials),p.load(e,x=>{let{image:y}=x;f.image={data:y.data,width:s??y.width,height:o??y.height,depth:u??Math.sqrt(y.height)},f.type=x.type,f.format=x.format,f.colorSpace=x.colorSpace,f.needsUpdate=!0;try{r?.(f)}catch(U){a!=null?a(U):console.error(U),this.manager.itemError(e)}},i,a),f}},Fr=class extends Hr{constructor(e={},r){super(r),this.options=e}load(e,r,i,a){let{width:s,height:o}=this.options,u=new Ju(null,s,o),f=new Pr(this.manager);return f.setRequestHeader(this.requestHeader),f.setPath(this.path),f.setWithCredentials(this.withCredentials),f.load(e,p=>{let{image:x}=p;u.image={data:x.data,width:s??x.width,height:o??x.height},u.type=p.type,u.format=p.format,u.colorSpace=p.colorSpace,u.needsUpdate=!0;try{r?.(u)}catch(y){a!=null?a(y):console.error(y),this.manager.itemError(e)}},i,a),u}};var Ts=class Xs{constructor(e=0,r=0,i=0,a=0){this.west=e,this.south=r,this.east=i,this.north=a}get width(){let e=this.east;return e<this.west&&(e+=Math.PI*2),e-this.west}get height(){return this.north-this.south}set(e,r,i,a){return this.west=e,this.south=r,this.east=i,this.north=a,this}clone(){return new Xs(this.west,this.south,this.east,this.north)}copy(e){return this.west=e.west,this.south=e.south,this.east=e.east,this.north=e.north,this}equals(e){return e.west===this.west&&e.south===this.south&&e.east===this.east&&e.north===this.north}at(e,r,i=new qe){return i.set(this.west+(this.east-this.west)*e,this.north+(this.south-this.north)*r)}fromArray(e,r=0){return this.west=e[r],this.south=e[r+1],this.east=e[r+2],this.north=e[r+3],this}toArray(e=[],r=0){return e[r]=this.west,e[r+1]=this.south,e[r+2]=this.east,e[r+3]=this.north,e}*[Symbol.iterator](){yield this.west,yield this.south,yield this.east,yield this.north}};Ts.MAX=new Ts(qe.MIN_LONGITUDE,qe.MIN_LATITUDE,qe.MAX_LONGITUDE,qe.MAX_LATITUDE);var jh=/^[ \t]*#include +"([\w\d./]+)"/gm;function Ve(t,e){return t.replace(jh,(r,i)=>{let a=i.split("/").reduce((s,o)=>typeof s!="string"&&s!=null?s[o]:void 0,e);if(typeof a!="string")throw new Error(`Could not find include for ${i}.`);return Ve(a,e)})}var Ci;function qh(){if(Ci!=null)return Ci;let t=new Uint32Array([268435456]);return Ci=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)[0]===0,Ci}function Jh(t,e,r,i=!0){if(i===qh())return new e(t);let a=Object.assign(new DataView(t),{getFloat16(o,u){return Zh(this,o,u)}}),s=new e(a.byteLength/e.BYTES_PER_ELEMENT);for(let o=0,u=0;o<s.length;++o,u+=e.BYTES_PER_ELEMENT)s[o]=a[r](u,i);return s}var nr=(t,e)=>Jh(t,We,"getFloat16",e);var $h=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*(?:i\s*\+\+|\+\+\s*i)\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ed(t,e,r,i){let a="";for(let s=parseInt(e,10);s<parseInt(r,10);++s)a+=i.replace(/\[\s*i\s*\]/g,`[${s}]`).replace(/UNROLLED_LOOP_INDEX/g,`${s}`);return a}function Gt(t){return t.replace($h,ed)}var td=`// Reference: https://github.com/mrdoob/three.js/blob/r171/examples/jsm/csm/CSMShader.js

#ifndef SHADOW_CASCADE_COUNT
#error "SHADOW_CASCADE_COUNT macro must be defined."
#endif // SHADOW_CASCADE_COUNT

int getCascadeIndex(
  const mat4 viewMatrix,
  const vec3 worldPosition,
  const vec2 intervals[SHADOW_CASCADE_COUNT],
  const float near,
  const float far
) {
  vec4 viewPosition = viewMatrix * vec4(worldPosition, 1.0);
  float depth = viewZToOrthographicDepth(viewPosition.z, near, far);
  vec2 interval;
  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
    interval = intervals[i];
    if (depth >= interval.x && depth < interval.y) {
      return UNROLLED_LOOP_INDEX;
    }
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
  }
  #pragma unroll_loop_end
  return SHADOW_CASCADE_COUNT - 1;
}

int getFadedCascadeIndex(
  const mat4 viewMatrix,
  const vec3 worldPosition,
  const vec2 intervals[SHADOW_CASCADE_COUNT],
  const float near,
  const float far,
  const float jitter
) {
  vec4 viewPosition = viewMatrix * vec4(worldPosition, 1.0);
  float depth = viewZToOrthographicDepth(viewPosition.z, near, far);

  vec2 interval;
  float intervalCenter;
  float closestEdge;
  float margin;
  int nextIndex = -1;
  int prevIndex = -1;
  float alpha;

  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
    interval = intervals[i];
    intervalCenter = (interval.x + interval.y) * 0.5;
    closestEdge = depth < intervalCenter ? interval.x : interval.y;
    margin = closestEdge * closestEdge * 0.5;
    interval += margin * vec2(-0.5, 0.5);

    #if UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    if (depth >= interval.x && depth < interval.y) {
      prevIndex = nextIndex;
      nextIndex = UNROLLED_LOOP_INDEX;
      alpha = saturate(min(depth - interval.x, interval.y - depth) / margin);
    }
    #else // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    // Don't fade out the last cascade.
    if (depth >= interval.x) {
      prevIndex = nextIndex;
      nextIndex = UNROLLED_LOOP_INDEX;
      alpha = saturate((depth - interval.x) / margin);
    }
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT - 1
    #endif // UNROLLED_LOOP_INDEX < SHADOW_CASCADE_COUNT
  }
  #pragma unroll_loop_end

  return jitter <= alpha
    ? nextIndex
    : prevIndex;
}
`,rd=`// cSpell:words logdepthbuf

#ifdef DEPTH_PACKING
float readDepthValue(const sampler2D depthBuffer, const vec2 uv) {
  #if DEPTH_PACKING == 3201
  return unpackRGBAToDepth(texture(depthBuffer, uv));
  #else // DEPTH_PACKING == 3201
  return texture(depthBuffer, uv).r;
  #endif // DEPTH_PACKING == 3201
}
#endif // DEPTH_PACKING

float reverseLogDepth(const float depth, const float near, const float far) {
  #if defined(USE_LOGDEPTHBUF) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
  float d = pow(2.0, depth * log2(far + 1.0)) - 1.0;
  float a = far / (far - near);
  float b = far * near / (near - far);
  return a + b / d;
  #else // defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
  return depth;
  #endif // defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(USE_LOGARITHMIC_DEPTH_BUFFER)
}

float linearizeDepth(const float depth, const float near, const float far) {
  float ndc = depth * 2.0 - 1.0;
  return 2.0 * near * far / (far + near - ndc * (far - near));
}
`,id=`float checker(const vec2 uv, const vec2 repeats) {
  vec2 c = floor(repeats * uv);
  float result = mod(c.x + c.y, 2.0);
  return sign(result);
}

float checker(const vec2 uv, const float repeats) {
  return checker(uv, vec2(repeats));
}
`,nd=`// Reference: https://advances.realtimerendering.com/s2014/index.html#_NEXT_GENERATION_POST

float interleavedGradientNoise(const vec2 coord) {
  const vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(coord, magic.xy)));
}
`,ad=`#if !defined(saturate)
#define saturate(a) clamp(a, 0.0, 1.0)
#endif // !defined(saturate)

float remap(const float x, const float min1, const float max1, const float min2, const float max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec2 remap(const vec2 x, const vec2 min1, const vec2 max1, const vec2 min2, const vec2 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec3 remap(const vec3 x, const vec3 min1, const vec3 max1, const vec3 min2, const vec3 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

vec4 remap(const vec4 x, const vec4 min1, const vec4 max1, const vec4 min2, const vec4 max2) {
  return min2 + (x - min1) / (max1 - min1) * (max2 - min2);
}

float remapClamped(
  const float x,
  const float min1,
  const float max1,
  const float min2,
  const float max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec2 remapClamped(
  const vec2 x,
  const vec2 min1,
  const vec2 max1,
  const vec2 min2,
  const vec2 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec3 remapClamped(
  const vec3 x,
  const vec3 min1,
  const vec3 max1,
  const vec3 min2,
  const vec3 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

vec4 remapClamped(
  const vec4 x,
  const vec4 min1,
  const vec4 max1,
  const vec4 min2,
  const vec4 max2
) {
  return clamp(min2 + (x - min1) / (max1 - min1) * (max2 - min2), min2, max2);
}

// Implicitly remap to 0 and 1
float remap(const float x, const float min1, const float max1) {
  return (x - min1) / (max1 - min1);
}

vec2 remap(const vec2 x, const vec2 min1, const vec2 max1) {
  return (x - min1) / (max1 - min1);
}

vec3 remap(const vec3 x, const vec3 min1, const vec3 max1) {
  return (x - min1) / (max1 - min1);
}

vec4 remap(const vec4 x, const vec4 min1, const vec4 max1) {
  return (x - min1) / (max1 - min1);
}

float remapClamped(const float x, const float min1, const float max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec2 remapClamped(const vec2 x, const vec2 min1, const vec2 max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec3 remapClamped(const vec3 x, const vec3 min1, const vec3 max1) {
  return saturate((x - min1) / (max1 - min1));
}

vec4 remapClamped(const vec4 x, const vec4 min1, const vec4 max1) {
  return saturate((x - min1) / (max1 - min1));
}
`,sd=`// Reference: https://jcgt.org/published/0003/02/01/paper.pdf

vec2 signNotZero(vec2 v) {
  return vec2(v.x >= 0.0 ? 1.0 : -1.0, v.y >= 0.0 ? 1.0 : -1.0);
}

vec2 packNormalToVec2(vec3 v) {
  vec2 p = v.xy * (1.0 / (abs(v.x) + abs(v.y) + abs(v.z)));
  return v.z <= 0.0
    ? (1.0 - abs(p.yx)) * signNotZero(p)
    : p;
}

vec3 unpackVec2ToNormal(vec2 e) {
  vec3 v = vec3(e.xy, 1.0 - abs(e.x) - abs(e.y));
  if (v.z < 0.0) {
    v.xy = (1.0 - abs(v.yx)) * signNotZero(v.xy);
  }
  return normalize(v);
}
`,od=`float raySphereFirstIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  return discriminant < 0.0
    ? -1.0
    : (-b - sqrt(discriminant)) * 0.5;
}

float raySphereFirstIntersection(const vec3 origin, const vec3 direction, const float radius) {
  return raySphereFirstIntersection(origin, direction, vec3(0.0), radius);
}

vec4 raySphereFirstIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  return mix((-b - sqrt(max(vec4(0.0), discriminant))) * 0.5, vec4(-1.0), mask);
}

vec4 raySphereFirstIntersection(const vec3 origin, const vec3 direction, const vec4 radius) {
  return raySphereFirstIntersection(origin, direction, vec3(0.0), radius);
}

float raySphereSecondIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  return discriminant < 0.0
    ? -1.0
    : (-b + sqrt(discriminant)) * 0.5;
}

float raySphereSecondIntersection(const vec3 origin, const vec3 direction, const float radius) {
  return raySphereSecondIntersection(origin, direction, vec3(0.0), radius);
}

vec4 raySphereSecondIntersection(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  return mix((-b + sqrt(max(vec4(0.0), discriminant))) * 0.5, vec4(-1.0), mask);
}

vec4 raySphereSecondIntersection(const vec3 origin, const vec3 direction, const vec4 radius) {
  return raySphereSecondIntersection(origin, direction, vec3(0.0), radius);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const float radius,
  out float intersection1,
  out float intersection2
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  float c = dot(a, a) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  if (discriminant < 0.0) {
    intersection1 = -1.0;
    intersection2 = -1.0;
    return;
  } else {
    float Q = sqrt(discriminant);
    intersection1 = (-b - Q) * 0.5;
    intersection2 = (-b + Q) * 0.5;
  }
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const float radius,
  out float intersection1,
  out float intersection2
) {
  raySphereIntersections(origin, direction, vec3(0.0), radius, intersection1, intersection2);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec3 center,
  const vec4 radius,
  out vec4 intersection1,
  out vec4 intersection2
) {
  vec3 a = origin - center;
  float b = 2.0 * dot(direction, a);
  vec4 c = dot(a, a) - radius * radius;
  vec4 discriminant = b * b - 4.0 * c;
  vec4 mask = step(discriminant, vec4(0.0));
  vec4 Q = sqrt(max(vec4(0.0), discriminant));
  intersection1 = mix((-b - Q) * 0.5, vec4(-1.0), mask);
  intersection2 = mix((-b + Q) * 0.5, vec4(-1.0), mask);
}

void raySphereIntersections(
  const vec3 origin,
  const vec3 direction,
  const vec4 radius,
  out vec4 intersection1,
  out vec4 intersection2
) {
  raySphereIntersections(origin, direction, vec3(0.0), radius, intersection1, intersection2);
}
`,cd=`vec3 screenToView(
  const vec2 uv,
  const float depth,
  const float viewZ,
  const mat4 projectionMatrix,
  const mat4 inverseProjectionMatrix
) {
  vec4 clip = vec4(vec3(uv, depth) * 2.0 - 1.0, 1.0);
  float clipW = projectionMatrix[2][3] * viewZ + projectionMatrix[3][3];
  clip *= clipW;
  return (inverseProjectionMatrix * clip).xyz;
}
`,ld=`// A fifth-order polynomial approximation of Turbo color map.
// See: https://observablehq.com/@mbostock/turbo
// prettier-ignore
vec3 turbo(const float x) {
  float r = 0.1357 + x * (4.5974 - x * (42.3277 - x * (130.5887 - x * (150.5666 - x * 58.1375))));
  float g = 0.0914 + x * (2.1856 + x * (4.8052 - x * (14.0195 - x * (4.2109 + x * 2.7747))));
  float b = 0.1067 + x * (12.5925 - x * (60.1097 - x * (109.0745 - x * (88.5066 - x * 26.8183))));
  return vec3(r, g, b);
}
`,ud=`// Reference: https://www.gamedev.net/tutorials/programming/graphics/contact-hardening-soft-shadows-made-fast-r4906/

vec2 vogelDisk(const int index, const int sampleCount, const float phi) {
  const float goldenAngle = 2.39996322972865332;
  float r = sqrt(float(index) + 0.5) / sqrt(float(sampleCount));
  float theta = float(index) * goldenAngle + phi;
  return r * vec2(cos(theta), sin(theta));
}
`,Hi=td,Gi=rd,Qs=id,zi=nd,ar=ad,Zs=sd,sr=od,Ks=cd,Zn=ld,ki=ud;import{Matrix3 as RA,Vector3 as hd}from"./three.module.js";var js="eac103980f20c0956f2d3215833e73514be08462",dd=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${js}/packages/atmosphere/assets`,fd=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${js}/packages/atmosphere/assets/stars.bin`,kr=64,Wr=16,Vr=32,Yr=128,Xr=32,Qr=8,Kn=Qr*Xr,jn=Yr,qn=Vr,Zr=256,Kr=64,or=1/1e3;var md=new hd;function cr(t,e,r,i){let a=r.projectOnSurface(t,md);return a!=null?r.getOsculatingSphereCenter(a,e,i).negate():i.setScalar(0)}var pd=typeof window<"u"&&window.requestIdleCallback!=null?window.requestIdleCallback:function(t,e={}){let r=e.timeout??1,i=performance.now();return setTimeout(()=>{t({get didTimeout(){return e.timeout!=null?!1:performance.now()-i-1>r},timeRemaining(){return Math.max(0,1+(performance.now()-i))}})},1)};var lr=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/functions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Precomputed Atmospheric Scattering
 * Copyright (c) 2008 INRIA
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

Number ClampCosine(const Number mu) {
  return clamp(mu, Number(-1.0), Number(1.0));
}

Length ClampDistance(const Length d) {
  return max(d, 0.0 * m);
}

Length ClampRadius(const AtmosphereParameters atmosphere, const Length r) {
  return clamp(r, atmosphere.bottom_radius, atmosphere.top_radius);
}

Length SafeSqrt(const Area a) {
  return sqrt(max(a, 0.0 * m2));
}

Length DistanceToTopAtmosphereBoundary(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  Area discriminant = r * r * (mu * mu - 1.0) +
      atmosphere.top_radius * atmosphere.top_radius;
  return ClampDistance(-r * mu + SafeSqrt(discriminant));
}

Length DistanceToBottomAtmosphereBoundary(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  Area discriminant = r * r * (mu * mu - 1.0) +
      atmosphere.bottom_radius * atmosphere.bottom_radius;
  return ClampDistance(-r * mu - SafeSqrt(discriminant));
}

bool RayIntersectsGround(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  return mu < 0.0 && r * r * (mu * mu - 1.0) +
      atmosphere.bottom_radius * atmosphere.bottom_radius >= 0.0 * m2;
}

Number GetTextureCoordFromUnitRange(const Number x, const int texture_size) {
  return 0.5 / Number(texture_size) + x * (1.0 - 1.0 / Number(texture_size));
}

vec2 GetTransmittanceTextureUvFromRMu(const AtmosphereParameters atmosphere,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  // Distance to top atmosphere boundary for a horizontal ray at ground level.
  Length H = sqrt(atmosphere.top_radius * atmosphere.top_radius -
      atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the horizon.
  Length rho =
      SafeSqrt(r * r - atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the top atmosphere boundary for the ray (r,mu), and its minimum
  // and maximum values over all mu - obtained for (r,1) and (r,mu_horizon).
  Length d = DistanceToTopAtmosphereBoundary(atmosphere, r, mu);
  Length d_min = atmosphere.top_radius - r;
  Length d_max = rho + H;
  Number x_mu = (d - d_min) / (d_max - d_min);
  Number x_r = rho / H;
  return vec2(GetTextureCoordFromUnitRange(x_mu, TRANSMITTANCE_TEXTURE_WIDTH),
              GetTextureCoordFromUnitRange(x_r, TRANSMITTANCE_TEXTURE_HEIGHT));
}

DimensionlessSpectrum GetTransmittanceToTopAtmosphereBoundary(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  vec2 uv = GetTransmittanceTextureUvFromRMu(atmosphere, r, mu);
  // @shotamatsuda: Added for the precomputation stage in half-float precision.
  #ifdef TRANSMITTANCE_PRECISION_LOG
  // Manually interpolate the transmittance instead of the optical depth.
  const vec2 size = vec2(TRANSMITTANCE_TEXTURE_WIDTH, TRANSMITTANCE_TEXTURE_HEIGHT);
  const vec3 texel_size = vec3(1.0 / size, 0.0);
  vec2 coord = (uv * size) - 0.5;
  vec2 i = (floor(coord) + 0.5) * texel_size.xy;
  vec2 f = fract(coord);
  vec4 t1 = exp(-texture(transmittance_texture, i));
  vec4 t2 = exp(-texture(transmittance_texture, i + texel_size.xz));
  vec4 t3 = exp(-texture(transmittance_texture, i + texel_size.zy));
  vec4 t4 = exp(-texture(transmittance_texture, i + texel_size.xy));
  return DimensionlessSpectrum(mix(mix(t1, t2, f.x), mix(t3, t4, f.x), f.y));
  #else // TRANSMITTANCE_PRECISION_LOG
  return DimensionlessSpectrum(texture(transmittance_texture, uv));
  #endif // TRANSMITTANCE_PRECISION_LOG
}

DimensionlessSpectrum GetTransmittance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu, const Length d,
    const bool ray_r_mu_intersects_ground) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(d >= 0.0 * m);

  Length r_d = ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
  Number mu_d = ClampCosine((r * mu + d) / r_d);

  if (ray_r_mu_intersects_ground) {
    return min(
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r_d, -mu_d) /
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r, -mu),
        DimensionlessSpectrum(1.0));
  } else {
    return min(
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r, mu) /
        GetTransmittanceToTopAtmosphereBoundary(
            atmosphere, transmittance_texture, r_d, mu_d),
        DimensionlessSpectrum(1.0));
  }
}

DimensionlessSpectrum GetTransmittanceToSun(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu_s) {
  Number sin_theta_h = atmosphere.bottom_radius / r;
  Number cos_theta_h = -sqrt(max(1.0 - sin_theta_h * sin_theta_h, 0.0));
  return GetTransmittanceToTopAtmosphereBoundary(
          atmosphere, transmittance_texture, r, mu_s) *
      smoothstep(-sin_theta_h * atmosphere.sun_angular_radius / rad,
                 sin_theta_h * atmosphere.sun_angular_radius / rad,
                 mu_s - cos_theta_h);
}

InverseSolidAngle RayleighPhaseFunction(const Number nu) {
  InverseSolidAngle k = 3.0 / (16.0 * PI * sr);
  return k * (1.0 + nu * nu);
}

InverseSolidAngle MiePhaseFunction(const Number g, const Number nu) {
  InverseSolidAngle k = 3.0 / (8.0 * PI * sr) * (1.0 - g * g) / (2.0 + g * g);
  return k * (1.0 + nu * nu) / pow(1.0 + g * g - 2.0 * g * nu, 1.5);
}

vec4 GetScatteringTextureUvwzFromRMuMuSNu(const AtmosphereParameters atmosphere,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  assert(nu >= -1.0 && nu <= 1.0);

  // Distance to top atmosphere boundary for a horizontal ray at ground level.
  Length H = sqrt(atmosphere.top_radius * atmosphere.top_radius -
      atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the horizon.
  Length rho =
      SafeSqrt(r * r - atmosphere.bottom_radius * atmosphere.bottom_radius);
  Number u_r = GetTextureCoordFromUnitRange(rho / H, SCATTERING_TEXTURE_R_SIZE);

  // Discriminant of the quadratic equation for the intersections of the ray
  // (r,mu) with the ground (see RayIntersectsGround).
  Length r_mu = r * mu;
  Area discriminant =
      r_mu * r_mu - r * r + atmosphere.bottom_radius * atmosphere.bottom_radius;
  Number u_mu;
  if (ray_r_mu_intersects_ground) {
    // Distance to the ground for the ray (r,mu), and its minimum and maximum
    // values over all mu - obtained for (r,-1) and (r,mu_horizon).
    Length d = -r_mu - SafeSqrt(discriminant);
    Length d_min = r - atmosphere.bottom_radius;
    Length d_max = rho;
    u_mu = 0.5 - 0.5 * GetTextureCoordFromUnitRange(d_max == d_min ? 0.0 :
        (d - d_min) / (d_max - d_min), SCATTERING_TEXTURE_MU_SIZE / 2);
  } else {
    // Distance to the top atmosphere boundary for the ray (r,mu), and its
    // minimum and maximum values over all mu - obtained for (r,1) and
    // (r,mu_horizon).
    Length d = -r_mu + SafeSqrt(discriminant + H * H);
    Length d_min = atmosphere.top_radius - r;
    Length d_max = rho + H;
    u_mu = 0.5 + 0.5 * GetTextureCoordFromUnitRange(
        (d - d_min) / (d_max - d_min), SCATTERING_TEXTURE_MU_SIZE / 2);
  }

  Length d = DistanceToTopAtmosphereBoundary(
      atmosphere, atmosphere.bottom_radius, mu_s);
  Length d_min = atmosphere.top_radius - atmosphere.bottom_radius;
  Length d_max = H;
  Number a = (d - d_min) / (d_max - d_min);
  Length D = DistanceToTopAtmosphereBoundary(
      atmosphere, atmosphere.bottom_radius, atmosphere.mu_s_min);
  Number A = (D - d_min) / (d_max - d_min);
  // An ad-hoc function equal to 0 for mu_s = mu_s_min (because then d = D and
  // thus a = A), equal to 1 for mu_s = 1 (because then d = d_min and thus
  // a = 0), and with a large slope around mu_s = 0, to get more texture
  // samples near the horizon.
  Number u_mu_s = GetTextureCoordFromUnitRange(
      max(1.0 - a / A, 0.0) / (1.0 + a), SCATTERING_TEXTURE_MU_S_SIZE);

  Number u_nu = (nu + 1.0) / 2.0;
  return vec4(u_nu, u_mu_s, u_mu, u_r);
}

vec2 GetIrradianceTextureUvFromRMuS(const AtmosphereParameters atmosphere,
    const Length r, const Number mu_s) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  Number x_r = (r - atmosphere.bottom_radius) /
      (atmosphere.top_radius - atmosphere.bottom_radius);
  Number x_mu_s = mu_s * 0.5 + 0.5;
  return vec2(GetTextureCoordFromUnitRange(x_mu_s, IRRADIANCE_TEXTURE_WIDTH),
              GetTextureCoordFromUnitRange(x_r, IRRADIANCE_TEXTURE_HEIGHT));
}

IrradianceSpectrum GetIrradiance(
    const AtmosphereParameters atmosphere,
    const IrradianceTexture irradiance_texture,
    const Length r, const Number mu_s) {
  vec2 uv = GetIrradianceTextureUvFromRMuS(atmosphere, r, mu_s);
  return IrradianceSpectrum(texture(irradiance_texture, uv));
}
`,ur=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/definitions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

#define assert(x)

#define Length float
#define Wavelength float
#define Angle float
#define SolidAngle float
#define Power float
#define LuminousPower float

#define Number float
#define InverseLength float
#define Area float
#define Volume float
#define NumberDensity float
#define Irradiance float
#define Radiance float
#define SpectralPower float
#define SpectralIrradiance float
#define SpectralRadiance float
#define SpectralRadianceDensity float
#define ScatteringCoefficient float
#define InverseSolidAngle float
#define LuminousIntensity float
#define Luminance float
#define Illuminance float

// A generic function from Wavelength to some other type.
#define AbstractSpectrum vec3
// A function from Wavelength to Number.
#define DimensionlessSpectrum vec3
// A function from Wavelength to SpectralPower.
#define PowerSpectrum vec3
// A function from Wavelength to SpectralIrradiance.
#define IrradianceSpectrum vec3
// A function from Wavelength to SpectralRadiance.
#define RadianceSpectrum vec3
// A function from Wavelength to SpectralRadianceDensity.
#define RadianceDensitySpectrum vec3
// A function from Wavelength to ScatteringCoefficient.
#define ScatteringSpectrum vec3

// A position in 3D (3 length values).
#define Position vec3
// A unit direction vector in 3D (3 unit-less values).
#define Direction vec3
// A vector of 3 luminance values.
#define Luminance3 vec3
// A vector of 3 illuminance values.
#define Illuminance3 vec3

#define TransmittanceTexture sampler2D
#define AbstractScatteringTexture sampler3D
#define ReducedScatteringTexture sampler3D
#define ScatteringTexture sampler3D
#define ScatteringDensityTexture sampler3D
#define IrradianceTexture sampler2D

const Length m = 1.0;
const Wavelength nm = 1.0;
const Angle rad = 1.0;
const SolidAngle sr = 1.0;
const Power watt = 1.0;
const LuminousPower lm = 1.0;

#if !defined(PI)
const float PI = 3.14159265358979323846;
#endif // !defined(PI)

const Length km = 1000.0 * m;
const Area m2 = m * m;
const Volume m3 = m * m * m;
const Angle pi = PI * rad;
const Angle deg = pi / 180.0;
const Irradiance watt_per_square_meter = watt / m2;
const Radiance watt_per_square_meter_per_sr = watt / (m2 * sr);
const SpectralIrradiance watt_per_square_meter_per_nm = watt / (m2 * nm);
const SpectralRadiance watt_per_square_meter_per_sr_per_nm = watt / (m2 * sr * nm);
const SpectralRadianceDensity watt_per_cubic_meter_per_sr_per_nm = watt / (m3 * sr * nm);
const LuminousIntensity cd = lm / sr;
const LuminousIntensity kcd = 1000.0 * cd;
const Luminance cd_per_square_meter = cd / m2;
const Luminance kcd_per_square_meter = kcd / m2;

struct DensityProfileLayer {
  Length width;
  Number exp_term;
  InverseLength exp_scale;
  InverseLength linear_term;
  Number constant_term;
};

struct DensityProfile {
  DensityProfileLayer layers[2];
};

// See AtmosphereParameter.ts for further details.
struct AtmosphereParameters {
  IrradianceSpectrum solar_irradiance;
  Angle sun_angular_radius;
  Length bottom_radius;
  Length top_radius;
  DensityProfile rayleigh_density;
  ScatteringSpectrum rayleigh_scattering;
  DensityProfile mie_density;
  ScatteringSpectrum mie_scattering;
  ScatteringSpectrum mie_extinction;
  Number mie_phase_function_g;
  DensityProfile absorption_density;
  ScatteringSpectrum absorption_extinction;
  DimensionlessSpectrum ground_albedo;
  Number mu_s_min;
};
`,hr=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/functions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Precomputed Atmospheric Scattering
 * Copyright (c) 2008 INRIA
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifdef COMBINED_SCATTERING_TEXTURES
vec3 GetExtrapolatedSingleMieScattering(
    const AtmosphereParameters atmosphere, const vec4 scattering) {
  // Algebraically this can never be negative, but rounding errors can produce
  // that effect for sufficiently short view rays.
  // @shotamatsuda: Avoid division by infinitesimal values.
  // See https://github.com/takram-design-engineering/three-geospatial/issues/47
  if (scattering.r < 1e-5) {
    return vec3(0.0);
  }
  return scattering.rgb * scattering.a / scattering.r *
	    (atmosphere.rayleigh_scattering.r / atmosphere.mie_scattering.r) *
	    (atmosphere.mie_scattering / atmosphere.rayleigh_scattering);
}
#endif // COMBINED_SCATTERING_TEXTURES

IrradianceSpectrum GetCombinedScattering(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground,
    out IrradianceSpectrum single_mie_scattering) {
  vec4 uvwz = GetScatteringTextureUvwzFromRMuMuSNu(
      atmosphere, r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  Number tex_coord_x = uvwz.x * Number(SCATTERING_TEXTURE_NU_SIZE - 1);
  Number tex_x = floor(tex_coord_x);
  Number lerp = tex_coord_x - tex_x;
  vec3 uvw0 = vec3((tex_x + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  vec3 uvw1 = vec3((tex_x + 1.0 + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
#ifdef COMBINED_SCATTERING_TEXTURES
  vec4 combined_scattering =
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp;
  IrradianceSpectrum scattering = IrradianceSpectrum(combined_scattering);
  single_mie_scattering =
      GetExtrapolatedSingleMieScattering(atmosphere, combined_scattering);
#else // COMBINED_SCATTERING_TEXTURES
  IrradianceSpectrum scattering = IrradianceSpectrum(
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp);
  single_mie_scattering = IrradianceSpectrum(
      texture(single_mie_scattering_texture, uvw0) * (1.0 - lerp) +
      texture(single_mie_scattering_texture, uvw1) * lerp);
#endif // COMBINED_SCATTERING_TEXTURES
  return scattering;
}

// @shotamatsuda: Added for reading higher-order scattering texture.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
IrradianceSpectrum GetScattering(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture scattering_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground) {
  vec4 uvwz = GetScatteringTextureUvwzFromRMuMuSNu(
      atmosphere, r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  Number tex_coord_x = uvwz.x * Number(SCATTERING_TEXTURE_NU_SIZE - 1);
  Number tex_x = floor(tex_coord_x);
  Number lerp = tex_coord_x - tex_x;
  vec3 uvw0 = vec3((tex_x + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  vec3 uvw1 = vec3((tex_x + 1.0 + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  IrradianceSpectrum scattering = IrradianceSpectrum(
      texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp);
  return scattering;
}
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE

RadianceSpectrum GetSkyRadiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    Position camera, const Direction view_ray, const Length shadow_length,
    const Direction sun_direction,
    out DimensionlessSpectrum transmittance) {
  // Compute the distance to the top atmosphere boundary along the view ray,
  // assuming the viewer is in space (or NaN if the view ray does not intersect
  // the atmosphere).
  Length r = length(camera);
  Length rmu = dot(camera, view_ray);
  // @shotamatsuda: Use SafeSqrt instead.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/26
  Length distance_to_top_atmosphere_boundary = -rmu -
      SafeSqrt(rmu * rmu - r * r +
          atmosphere.top_radius * atmosphere.top_radius);
  // If the viewer is in space and the view ray intersects the atmosphere, move
  // the viewer to the top atmosphere boundary (along the view ray):
  if (distance_to_top_atmosphere_boundary > 0.0 * m) {
    camera = camera + view_ray * distance_to_top_atmosphere_boundary;
    r = atmosphere.top_radius;
    rmu += distance_to_top_atmosphere_boundary;
  } else if (r > atmosphere.top_radius) {
    // If the view ray does not intersect the atmosphere, simply return 0.
    transmittance = DimensionlessSpectrum(1.0);
    return RadianceSpectrum(0.0 * watt_per_square_meter_per_sr_per_nm);
  }
  // Compute the r, mu, mu_s and nu parameters needed for the texture lookups.
  Number mu = rmu / r;
  Number mu_s = dot(camera, sun_direction) / r;
  Number nu = dot(view_ray, sun_direction);

  // @shotamatsuda: For rendering points below the bottom atmosphere.
  #ifdef GROUND
  bool ray_r_mu_intersects_ground = RayIntersectsGround(atmosphere, r, mu);
  #else // GROUND
  bool ray_r_mu_intersects_ground = false;
  #endif // GROUND

  transmittance = ray_r_mu_intersects_ground ? DimensionlessSpectrum(0.0) :
      GetTransmittanceToTopAtmosphereBoundary(
          atmosphere, transmittance_texture, r, mu);
  IrradianceSpectrum single_mie_scattering;
  IrradianceSpectrum scattering;
  if (shadow_length == 0.0 * m) {
    scattering = GetCombinedScattering(
        atmosphere, scattering_texture, single_mie_scattering_texture,
        r, mu, mu_s, nu, ray_r_mu_intersects_ground,
        single_mie_scattering);
  } else {
    // Case of light shafts (shadow_length is the total length noted l in our
    // paper): we omit the scattering between the camera and the point at
    // distance l, by implementing Eq. (18) of the paper (shadow_transmittance
    // is the T(x,x_s) term, scattering is the S|x_s=x+lv term).
    Length d = shadow_length;
    Length r_p =
        ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
    Number mu_p = (r * mu + d) / r_p;
    Number mu_s_p = (r * mu_s + d * nu) / r_p;

    scattering = GetCombinedScattering(
        atmosphere, scattering_texture, single_mie_scattering_texture,
        r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground,
        single_mie_scattering);
    DimensionlessSpectrum shadow_transmittance =
        GetTransmittance(atmosphere, transmittance_texture,
            r, mu, shadow_length, ray_r_mu_intersects_ground);
    // @shotamatsuda: Occlude only single Rayleigh scattering by the shadow.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    IrradianceSpectrum higher_order_scattering = GetScattering(
        atmosphere, higher_order_scattering_texture,
        r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground);
    IrradianceSpectrum single_scattering = scattering - higher_order_scattering;
    scattering = single_scattering * shadow_transmittance + higher_order_scattering;
#else // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    scattering = scattering * shadow_transmittance;
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
    single_mie_scattering = single_mie_scattering * shadow_transmittance;
  }
  return scattering * RayleighPhaseFunction(nu) + single_mie_scattering *
      MiePhaseFunction(atmosphere.mie_phase_function_g, nu);
}

// @shotamatsuda: Returns the point on the ray closest to the origin.
vec3 ClosestPointOnRay(const Position camera, const Position point) {
  Position ray = point - camera;
  Number t = clamp(-dot(camera, ray) / dot(ray, ray), 0.0, 1.0);
  return camera + t * ray;
}

vec2 RaySphereIntersections(
    const Position camera, const Direction direction, const Length radius) {
  float b = 2.0 * dot(direction, camera);
  float c = dot(camera, camera) - radius * radius;
  float discriminant = b * b - 4.0 * c;
  float Q = sqrt(discriminant);
  return vec2(-b - Q, -b + Q) * 0.5;
}

// @shotamatsuda: Clip the view ray at the bottom atmosphere boundary.
bool ClipAtBottomAtmosphere(
    const AtmosphereParameters atmosphere,
    const Direction view_ray, inout Position camera, inout Position point) {
  const Length eps = 0.0;
  Length bottom_radius = atmosphere.bottom_radius + eps;
  Length r_camera = length(camera);
  Length r_point = length(point);
  bool camera_below = r_camera < bottom_radius;
  bool point_below = r_point < bottom_radius;

  vec2 t = RaySphereIntersections(camera, view_ray, bottom_radius);
  Position intersection = camera + view_ray * (camera_below ? t.y : t.x);
  camera = camera_below ? intersection : camera;
  point = point_below ? intersection : point;

  return camera_below && point_below;
}

RadianceSpectrum GetSkyRadianceToPoint(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ReducedScatteringTexture scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    Position camera, Position point, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  // @shotamatsuda: Avoid artifacts when the ray does not intersect the top
  // atmosphere boundary.
  if (length(ClosestPointOnRay(camera, point)) > atmosphere.top_radius) {
    transmittance = vec3(1.0);
    return vec3(0.0);
  }

  Direction view_ray = normalize(point - camera);
  if (ClipAtBottomAtmosphere(atmosphere, view_ray, camera, point)) {
    transmittance = vec3(1.0);
    return vec3(0.0);
  }

  // Compute the distance to the top atmosphere boundary along the view ray,
  // assuming the viewer is in space (or NaN if the view ray does not intersect
  // the atmosphere).
  Length r = length(camera);
  Length rmu = dot(camera, view_ray);
  // @shotamatsuda: Use SafeSqrt instead.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/26
  Length distance_to_top_atmosphere_boundary = -rmu -
      SafeSqrt(rmu * rmu - r * r +
          atmosphere.top_radius * atmosphere.top_radius);
  // If the viewer is in space and the view ray intersects the atmosphere, move
  // the viewer to the top atmosphere boundary (along the view ray):
  if (distance_to_top_atmosphere_boundary > 0.0 * m) {
    camera = camera + view_ray * distance_to_top_atmosphere_boundary;
    r = atmosphere.top_radius;
    rmu += distance_to_top_atmosphere_boundary;
  }

  // Compute the r, mu, mu_s and nu parameters for the first texture lookup.
  Number mu = rmu / r;
  Number mu_s = dot(camera, sun_direction) / r;
  Number nu = dot(view_ray, sun_direction);
  Length d = length(point - camera);
  bool ray_r_mu_intersects_ground = RayIntersectsGround(atmosphere, r, mu);

  // @shotamatsuda: Hack to avoid rendering artifacts near the horizon, due to
  // finite atmosphere texture resolution and finite floating point precision.
  // See: https://github.com/ebruneton/precomputed_atmospheric_scattering/pull/32
  if (!ray_r_mu_intersects_ground) {
    Number mu_horizon = -SafeSqrt(1.0 -
        (atmosphere.bottom_radius * atmosphere.bottom_radius) / (r * r));
    const Number eps = 0.004;
    mu = max(mu, mu_horizon + eps);
  }

  transmittance = GetTransmittance(atmosphere, transmittance_texture,
      r, mu, d, ray_r_mu_intersects_ground);

  IrradianceSpectrum single_mie_scattering;
  IrradianceSpectrum scattering = GetCombinedScattering(
      atmosphere, scattering_texture, single_mie_scattering_texture,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground,
      single_mie_scattering);

  // Compute the r, mu, mu_s and nu parameters for the second texture lookup.
  // If shadow_length is not 0 (case of light shafts), we want to ignore the
  // scattering along the last shadow_length meters of the view ray, which we
  // do by subtracting shadow_length from d (this way scattering_p is equal to
  // the S|x_s=x_0-lv term in Eq. (17) of our paper).
  d = max(d - shadow_length, 0.0 * m);
  Length r_p = ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
  Number mu_p = (r * mu + d) / r_p;
  Number mu_s_p = (r * mu_s + d * nu) / r_p;

  IrradianceSpectrum single_mie_scattering_p;
  IrradianceSpectrum scattering_p = GetCombinedScattering(
      atmosphere, scattering_texture, single_mie_scattering_texture,
      r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground,
      single_mie_scattering_p);

  // Combine the lookup results to get the scattering between camera and point.
  DimensionlessSpectrum shadow_transmittance = transmittance;
  if (shadow_length > 0.0 * m) {
    // This is the T(x,x_s) term in Eq. (17) of our paper, for light shafts.
    shadow_transmittance = GetTransmittance(atmosphere, transmittance_texture,
        r, mu, d, ray_r_mu_intersects_ground);
  }
  // @shotamatsuda: Occlude only single Rayleigh scattering by the shadow.
#ifdef HAS_HIGHER_ORDER_SCATTERING_TEXTURE
  IrradianceSpectrum higher_order_scattering = GetScattering(
      atmosphere, higher_order_scattering_texture,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  IrradianceSpectrum single_scattering = scattering - higher_order_scattering;
  IrradianceSpectrum higher_order_scattering_p = GetScattering(
      atmosphere, higher_order_scattering_texture,
      r_p, mu_p, mu_s_p, nu, ray_r_mu_intersects_ground);
  IrradianceSpectrum single_scattering_p =
      scattering_p - higher_order_scattering_p;
  scattering =
      single_scattering - shadow_transmittance * single_scattering_p +
      higher_order_scattering - transmittance * higher_order_scattering_p;
#else // HAS_HIGHER_ORDER_SCATTERING_TEXTURE
  scattering = scattering - shadow_transmittance * scattering_p;
#endif // HAS_HIGHER_ORDER_SCATTERING_TEXTURE

  single_mie_scattering =
      single_mie_scattering - shadow_transmittance * single_mie_scattering_p;
#ifdef COMBINED_SCATTERING_TEXTURES
  single_mie_scattering = GetExtrapolatedSingleMieScattering(
      atmosphere, vec4(scattering, single_mie_scattering.r));
#endif // COMBINED_SCATTERING_TEXTURES

  // Hack to avoid rendering artifacts when the sun is below the horizon.
  single_mie_scattering = single_mie_scattering *
      smoothstep(Number(0.0), Number(0.01), mu_s);

  return scattering * RayleighPhaseFunction(nu) + single_mie_scattering *
      MiePhaseFunction(atmosphere.mie_phase_function_g, nu);
}

IrradianceSpectrum GetSunAndSkyIrradiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const IrradianceTexture irradiance_texture,
    const Position point, const Direction normal, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  Length r = length(point);
  Number mu_s = dot(point, sun_direction) / r;

  // Indirect irradiance (approximated if the surface is not horizontal).
  sky_irradiance = GetIrradiance(atmosphere, irradiance_texture, r, mu_s) *
      (1.0 + dot(normal, point) / r) * 0.5;

  // Direct irradiance.
  return atmosphere.solar_irradiance *
      GetTransmittanceToSun(
          atmosphere, transmittance_texture, r, mu_s) *
      max(dot(normal, sun_direction), 0.0);
}

// @shotamatsuda: Added for the clouds.
IrradianceSpectrum GetSunAndSkyScalarIrradiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const IrradianceTexture irradiance_texture,
    const Position point, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  Length r = length(point);
  Number mu_s = dot(point, sun_direction) / r;

  // Indirect irradiance. Integral over sphere yields 2\u03C0.
  sky_irradiance = GetIrradiance(atmosphere, irradiance_texture, r, mu_s) *
      2.0 * PI;

  // Direct irradiance. Omit the cosine term.
  return atmosphere.solar_irradiance *
      GetTransmittanceToSun(atmosphere, transmittance_texture, r, mu_s);
}

Luminance3 GetSolarLuminance() {
  return ATMOSPHERE.solar_irradiance /
      (PI * ATMOSPHERE.sun_angular_radius * ATMOSPHERE.sun_angular_radius) *
      SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Luminance3 GetSkyLuminance(
    const Position camera, Direction view_ray, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  return GetSkyRadiance(ATMOSPHERE, transmittance_texture,
      scattering_texture, single_mie_scattering_texture,
      camera, view_ray, shadow_length, sun_direction,
      transmittance) * SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Luminance3 GetSkyLuminanceToPoint(
    const Position camera, const Position point, const Length shadow_length,
    const Direction sun_direction, out DimensionlessSpectrum transmittance) {
  return GetSkyRadianceToPoint(ATMOSPHERE, transmittance_texture,
      scattering_texture, single_mie_scattering_texture,
      camera, point, shadow_length, sun_direction, transmittance) *
      SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

Illuminance3 GetSunAndSkyIlluminance(
    const Position p, const Direction normal, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  IrradianceSpectrum sun_irradiance = GetSunAndSkyIrradiance(
      ATMOSPHERE, transmittance_texture, irradiance_texture, p, normal,
      sun_direction, sky_irradiance);
  sky_irradiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return sun_irradiance * SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

// @shotamatsuda: Added for the clouds.
Illuminance3 GetSunAndSkyScalarIlluminance(
    const Position p, const Direction sun_direction,
    out IrradianceSpectrum sky_irradiance) {
  IrradianceSpectrum sun_irradiance = GetSunAndSkyScalarIrradiance(
      ATMOSPHERE, transmittance_texture, irradiance_texture, p,
      sun_direction, sky_irradiance);
  sky_irradiance *= SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return sun_irradiance * SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
}

#define GetSolarRadiance GetSolarLuminance
#define GetSkyRadiance GetSkyLuminance
#define GetSkyRadianceToPoint GetSkyLuminanceToPoint
#define GetSunAndSkyIrradiance GetSunAndSkyIlluminance
#define GetSunAndSkyScalarIrradiance GetSunAndSkyScalarIlluminance
`;var xd=new ce(.2126,.7152,.0722),Ed=["solarIrradiance","sunAngularRadius","bottomRadius","topRadius","rayleighDensity","rayleighScattering","mieDensity","mieScattering","mieExtinction","miePhaseFunctionG","absorptionDensity","absorptionExtinction","groundAlbedo","muSMin","skyRadianceToLuminance","sunRadianceToLuminance"];function wd(t,e){if(e!=null)for(let r of Ed){let i=e[r];i!=null&&(t[r]instanceof ce?t[r].copy(i):t[r]=i)}}var At=class{constructor(e,r,i,a,s){this.width=e,this.expTerm=r,this.expScale=i,this.linearTerm=a,this.constantTerm=s}toUniform(){return new N({width:this.width,exp_term:this.expTerm,exp_scale:this.expScale,linear_term:this.linearTerm,constant_term:this.constantTerm})}},$n=class{constructor(e){this.solarIrradiance=new ce(1.474,1.8504,1.91198),this.sunAngularRadius=.004675,this.bottomRadius=636e4,this.topRadius=642e4,this.rayleighDensity=[new At(0,0,0,0,0),new At(0,1,-.125,0,0)],this.rayleighScattering=new ce(.005802,.013558,.0331),this.mieDensity=[new At(0,0,0,0,0),new At(0,1,-.833333,0,0)],this.mieScattering=new ce(.003996,.003996,.003996),this.mieExtinction=new ce(.00444,.00444,.00444),this.miePhaseFunctionG=.8,this.absorptionDensity=[new At(25,0,0,1/15,-2/3),new At(0,0,0,-1/15,8/3)],this.absorptionExtinction=new ce(65e-5,.001881,85e-6),this.groundAlbedo=new oo().setScalar(.1),this.muSMin=Math.cos(Ws(120)),this.sunRadianceToLuminance=new ce(98242.786222,69954.398112,66475.012354),this.skyRadianceToLuminance=new ce(114974.916437,71305.954816,65310.548555),this.sunRadianceToRelativeLuminance=new ce,this.skyRadianceToRelativeLuminance=new ce,wd(this,e);let r=xd.dot(this.sunRadianceToLuminance);this.sunRadianceToRelativeLuminance.copy(this.sunRadianceToLuminance).divideScalar(r),this.skyRadianceToRelativeLuminance.copy(this.skyRadianceToLuminance).divideScalar(r)}toUniform(){return new N({solar_irradiance:this.solarIrradiance,sun_angular_radius:this.sunAngularRadius,bottom_radius:this.bottomRadius*or,top_radius:this.topRadius*or,rayleigh_density:{layers:this.rayleighDensity.map(e=>e.toUniform().value)},rayleigh_scattering:this.rayleighScattering,mie_density:{layers:this.mieDensity.map(e=>e.toUniform().value)},mie_scattering:this.mieScattering,mie_extinction:this.mieExtinction,mie_phase_function_g:this.miePhaseFunctionG,absorption_density:{layers:this.absorptionDensity.map(e=>e.toUniform().value)},absorption_extinction:this.absorptionExtinction,ground_albedo:this.groundAlbedo,mu_s_min:this.muSMin})}};$n.DEFAULT=new $n;var mr=$n,yd=`precision highp sampler2DArray;

#include "core/depth"
#include "core/math"
#include "core/packing"
#include "core/transform"
#ifdef HAS_SHADOW
#include "core/raySphereIntersection"
#include "core/cascadedShadowMaps"
#include "core/interleavedGradientNoise"
#include "core/vogelDisk"
#endif // HAS_SHADOW

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform sampler2D normalBuffer;

uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform float bottomRadius;
uniform mat4 worldToECEFMatrix;
uniform float geometricErrorCorrectionAmount;
uniform vec3 sunDirection;
uniform float cosSunAngularRadius;
uniform vec3 moonDirection;
uniform float moonAngularRadius;
uniform float lunarRadianceScale;
uniform float albedoScale;

#include "sky"

#ifdef HAS_LIGHTING_MASK
uniform sampler2D lightingMaskBuffer;
#endif // HAS_LIGHTING_MASK

// prettier-ignore
#define LIGHTING_MASK_CHANNEL_ LIGHTING_MASK_CHANNEL

#ifdef HAS_OVERLAY
uniform sampler2D overlayBuffer;
#endif // HAS_OVERLAY

#ifdef HAS_SHADOW
uniform sampler2DArray shadowBuffer;
uniform vec2 shadowIntervals[SHADOW_CASCADE_COUNT];
uniform mat4 shadowMatrices[SHADOW_CASCADE_COUNT];
uniform mat4 inverseShadowMatrices[SHADOW_CASCADE_COUNT];
uniform float shadowFar;
uniform float shadowTopHeight;
uniform float shadowRadius;
uniform sampler3D stbnTexture;
uniform int frame;
#endif // HAS_SHADOW

#ifdef HAS_SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
#endif // HAS_SHADOW_LENGTH

varying vec3 vCameraPosition;
varying vec3 vRayDirection;
varying vec3 vGeometryAltitudeCorrection;
varying vec3 vEllipsoidRadiiSquared;

vec3 readNormal(const vec2 uv, out bool degenerate) {
  vec3 normal = texture(normalBuffer, uv).xyz;
  degenerate = normal == vec3(0.0);
  #ifdef OCT_ENCODED_NORMAL
  return unpackVec2ToNormal(normal.xy);
  #else // OCT_ENCODED_NORMAL
  return 2.0 * normal - 1.0;
  #endif // OCT_ENCODED_NORMAL
}

void correctGeometricError(inout vec3 positionECEF, inout vec3 normalECEF) {
  // TODO: The error is pronounced at the edge of the ellipsoid due to the
  // large difference between the sphere position and the unprojected position
  // at the current fragment. Calculating the sphere position from the fragment
  // UV may resolve this.

  // Correct way is slerp, but this will be small-angle interpolation anyways.
  vec3 sphereNormal = normalize(positionECEF / vEllipsoidRadiiSquared);
  vec3 spherePosition = ATMOSPHERE.bottom_radius * sphereNormal;
  normalECEF = mix(normalECEF, sphereNormal, geometricErrorCorrectionAmount);
  positionECEF = mix(positionECEF, spherePosition, geometricErrorCorrectionAmount);
}

#if defined(SUN_LIGHT) || defined(SKY_LIGHT)

vec3 getSunSkyIrradiance(
  const vec3 positionECEF,
  const vec3 normal,
  const vec3 inputColor,
  const float sunTransmittance
) {
  // Assume lambertian BRDF. If both SUN_LIGHT and SKY_LIGHT are not defined,
  // regard the inputColor as radiance at the texel.
  vec3 diffuse = inputColor * albedoScale * RECIPROCAL_PI;
  vec3 skyIrradiance;
  vec3 sunIrradiance = GetSunAndSkyIrradiance(positionECEF, normal, sunDirection, skyIrradiance);

  #ifdef HAS_SHADOW
  sunIrradiance *= sunTransmittance;
  #endif // HAS_SHADOW

  #if defined(SUN_LIGHT) && defined(SKY_LIGHT)
  return diffuse * (sunIrradiance + skyIrradiance);
  #elif defined(SUN_LIGHT)
  return diffuse * sunIrradiance;
  #elif defined(SKY_LIGHT)
  return diffuse * skyIrradiance;
  #endif // defined(SUN_LIGHT) && defined(SKY_LIGHT)
}

#endif // defined(SUN_LIGHT) || defined(SKY_LIGHT)

#if defined(TRANSMITTANCE) || defined(INSCATTER)

void applyTransmittanceInscatter(const vec3 positionECEF, float shadowLength, inout vec3 radiance) {
  vec3 transmittance;
  vec3 inscatter = GetSkyRadianceToPoint(
    vCameraPosition,
    positionECEF,
    shadowLength,
    sunDirection,
    transmittance
  );
  #ifdef TRANSMITTANCE
  radiance = radiance * transmittance;
  #endif // TRANSMITTANCE
  #ifdef INSCATTER
  radiance = radiance + inscatter;
  #endif // INSCATTER
}

#endif // defined(TRANSMITTANCE) || defined(INSCATTER)

#ifdef HAS_SHADOW

float getSTBN() {
  ivec3 size = textureSize(stbnTexture, 0);
  vec3 scale = 1.0 / vec3(size);
  return texture(stbnTexture, vec3(gl_FragCoord.xy, float(frame % size.z)) * scale).r;
}

vec2 getShadowUv(const vec3 worldPosition, const int cascadeIndex) {
  vec4 clip = shadowMatrices[cascadeIndex] * vec4(worldPosition, 1.0);
  clip /= clip.w;
  return clip.xy * 0.5 + 0.5;
}

float getDistanceToShadowTop(const vec3 positionECEF) {
  // Distance to the top of the shadows along the sun direction, which matches
  // the ray origin of BSM.
  return raySphereSecondIntersection(
    positionECEF / METER_TO_LENGTH_UNIT, // TODO: Make units consistent
    sunDirection,
    vec3(0.0),
    bottomRadius + shadowTopHeight
  );
}

float readShadowOpticalDepth(const vec2 uv, const float distanceToTop, const int cascadeIndex) {
  // r: frontDepth, g: meanExtinction, b: maxOpticalDepth, a: maxOpticalDepthTail
  vec4 shadow = texture(shadowBuffer, vec3(uv, float(cascadeIndex)));
  // Omit adding maxOpticalDepthTail to avoid pronounced aliasing. Ground
  // shadow will be attenuated by inscatter anyways.
  return min(shadow.b, shadow.g * max(0.0, distanceToTop - shadow.r));
}

float sampleShadowOpticalDepthPCF(
  const vec3 worldPosition,
  const float distanceToTop,
  const float radius,
  const int cascadeIndex
) {
  vec2 uv = getShadowUv(worldPosition, cascadeIndex);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    return 0.0;
  }

  vec2 texelSize = vec2(1.0) / vec2(textureSize(shadowBuffer, 0).xy);
  float sum = 0.0;
  vec2 offset;
  #pragma unroll_loop_start
  for (int i = 0; i < 16; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
    offset = vogelDisk(
      UNROLLED_LOOP_INDEX,
      SHADOW_SAMPLE_COUNT,
      interleavedGradientNoise(gl_FragCoord.xy) * PI2
    );
    sum += readShadowOpticalDepth(uv + offset * radius * texelSize, distanceToTop, cascadeIndex);
    #endif // UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
  }
  #pragma unroll_loop_end
  return sum / float(SHADOW_SAMPLE_COUNT);
}

float sampleShadowOpticalDepth(
  const vec3 worldPosition,
  const vec3 positionECEF,
  const float radius,
  const float jitter
) {
  float distanceToTop = getDistanceToShadowTop(positionECEF);
  if (distanceToTop <= 0.0) {
    return 0.0;
  }
  int cascadeIndex = getFadedCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar,
    jitter
  );
  return cascadeIndex >= 0
    ? sampleShadowOpticalDepthPCF(worldPosition, distanceToTop, radius, cascadeIndex)
    : 0.0;
}

float getShadowRadius(const vec3 worldPosition) {
  vec4 clip = shadowMatrices[0] * vec4(worldPosition, 1.0);
  clip /= clip.w;

  // Offset by 1px in each direction in shadow's clip coordinates.
  vec2 shadowSize = vec2(textureSize(shadowBuffer, 0));
  vec3 offset = vec3(2.0 / shadowSize, 0.0);
  vec4 clipX = clip + offset.xzzz;
  vec4 clipY = clip + offset.zyzz;

  // Convert back to world space.
  vec4 worldX = inverseShadowMatrices[0] * clipX;
  vec4 worldY = inverseShadowMatrices[0] * clipY;

  // Project into the main camera's clip space.
  mat4 viewProjectionMatrix = projectionMatrix * viewMatrix;
  vec4 projected = viewProjectionMatrix * vec4(worldPosition, 1.0);
  vec4 projectedX = viewProjectionMatrix * worldX;
  vec4 projectedY = viewProjectionMatrix * worldY;
  projected /= projected.w;
  projectedX /= projectedX.w;
  projectedY /= projectedY.w;

  // Take the mean of pixel sizes.
  vec2 center = (projected.xy * 0.5 + 0.5) * resolution;
  vec2 offsetX = (projectedX.xy * 0.5 + 0.5) * resolution;
  vec2 offsetY = (projectedY.xy * 0.5 + 0.5) * resolution;
  float size = max(length(offsetX - center), length(offsetY - center));

  return remapClamped(size, 10.0, 50.0, 0.0, shadowRadius);
}

#endif // HAS_SHADOW

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  #if defined(HAS_LIGHTING_MASK) && defined(DEBUG_SHOW_LIGHTING_MASK)
  outputColor.rgb = vec3(texture(lightingMaskBuffer, uv).LIGHTING_MASK_CHANNEL_);
  outputColor.a = 1.0;
  return;
  #endif // defined(HAS_LIGHTING_MASK) && defined(DEBUG_SHOW_LIGHTING_MASK)

  float shadowLength = 0.0;
  #ifdef HAS_SHADOW_LENGTH
  shadowLength = texture(shadowLengthBuffer, uv).r;
  #endif // HAS_SHADOW_LENGTH

  #ifdef HAS_OVERLAY
  vec4 overlay = texture(overlayBuffer, uv);
  if (overlay.a == 1.0) {
    outputColor = overlay;
    return;
  }
  #endif // HAS_OVERLAY

  vec3 rayDirection = normalize(vRayDirection);
  vec3 dRDdx = dFdx(rayDirection);
  vec3 dRDdy = dFdy(rayDirection);
  float fragmentAngle = length(dRDdx + dRDdy) / length(rayDirection);

  float depth = readDepthValue(depthBuffer, uv);
  if (depth >= 1.0 - 1e-8) {
    #ifdef SKY
    outputColor.rgb = getSkyRadiance(
      vCameraPosition,
      rayDirection,
      shadowLength,
      sunDirection,
      moonDirection,
      moonAngularRadius,
      lunarRadianceScale,
      fragmentAngle
    );
    outputColor.a = 1.0;
    #else // SKY
    outputColor = inputColor;
    #endif // SKY

    #ifdef HAS_OVERLAY
    outputColor.rgb = outputColor.rgb * (1.0 - overlay.a) + overlay.rgb;
    #endif // HAS_OVERLAY
    return;
  }
  depth = reverseLogDepth(depth, cameraNear, cameraFar);

  // Reconstruct position and normal in world space.
  vec3 viewPosition = screenToView(
    uv,
    depth,
    getViewZ(depth),
    projectionMatrix,
    inverseProjectionMatrix
  );
  vec3 worldPosition = (inverseViewMatrix * vec4(viewPosition, 1.0)).xyz;
  vec3 positionECEF = (worldToECEFMatrix * vec4(worldPosition, 1.0)).xyz;
  positionECEF = positionECEF * METER_TO_LENGTH_UNIT + vGeometryAltitudeCorrection;

  vec3 viewNormal;
  bool degenerateNormal = false;
  #ifdef RECONSTRUCT_NORMAL
  vec3 dVPdx = dFdx(viewPosition);
  vec3 dVPdy = dFdy(viewPosition);
  viewNormal = normalize(cross(dVPdx, dVPdy));
  #elif defined(HAS_NORMALS)
  viewNormal = readNormal(uv, degenerateNormal);
  #endif // defined(HAS_NORMALS)

  #if defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)
  vec3 worldNormal = (inverseViewMatrix * vec4(viewNormal, 0.0)).xyz;
  vec3 normalECEF = (worldToECEFMatrix * vec4(worldNormal, 0.0)).xyz;
  #else // defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)
  vec3 normalECEF = normalize(positionECEF);
  #endif // defined(RECONSTRUCT_NORMAL) || defined(HAS_NORMALS)

  #ifdef CORRECT_GEOMETRIC_ERROR
  correctGeometricError(positionECEF, normalECEF);
  #endif // CORRECT_GEOMETRIC_ERROR

  #ifdef HAS_SHADOW
  float stbn = getSTBN();
  float radius = getShadowRadius(worldPosition);
  float opticalDepth = sampleShadowOpticalDepth(worldPosition, positionECEF, radius, stbn);
  float sunTransmittance = exp(-opticalDepth);
  #else // HAS_SHADOW
  float sunTransmittance = 1.0;
  #endif // HAS_SHADOW

  vec3 radiance;
  #if defined(SUN_LIGHT) || defined(SKY_LIGHT)
  // WORKAROUND: When both post-process lighting and sky options are enabled,
  // stars have degenerate normals. We use this to disable irradiance, which is
  // irrelevant for them.
  if (!degenerateNormal) {
    radiance = getSunSkyIrradiance(positionECEF, normalECEF, inputColor.rgb, sunTransmittance);
  } else {
    radiance = inputColor.rgb;
  }
  #ifdef HAS_LIGHTING_MASK
  float lightingMask = texture(lightingMaskBuffer, uv).LIGHTING_MASK_CHANNEL_;
  radiance = mix(inputColor.rgb, radiance, lightingMask);
  #endif // HAS_LIGHTING_MASK
  #else // defined(SUN_LIGHT) || defined(SKY_LIGHT)
  radiance = inputColor.rgb;
  #endif // defined(SUN_LIGHT) || defined(SKY_LIGHT)

  #if defined(TRANSMITTANCE) || defined(INSCATTER)
  applyTransmittanceInscatter(positionECEF, shadowLength, radiance);
  #endif // defined(TRANSMITTANCE) || defined(INSCATTER)

  outputColor = vec4(radiance, inputColor.a);

  #ifdef HAS_OVERLAY
  outputColor.rgb = outputColor.rgb * (1.0 - overlay.a) + overlay.rgb;
  #endif // HAS_OVERLAY
}
`,Cd=`uniform mat4 inverseViewMatrix;
uniform mat4 inverseProjectionMatrix;
uniform vec3 cameraPosition;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;
uniform float geometricErrorCorrectionAmount;
uniform vec3 ellipsoidRadii;

varying vec3 vCameraPosition;
varying vec3 vRayDirection;
varying vec3 vGeometryAltitudeCorrection;
varying vec3 vEllipsoidRadiiSquared;

void getCameraRay(out vec3 origin, out vec3 direction) {
  bool isPerspective = inverseProjectionMatrix[2][3] != 0.0; // 4th entry in the 3rd column

  if (isPerspective) {
    // Calculate the camera ray for a perspective camera.
    vec4 viewPosition = inverseProjectionMatrix * vec4(position, 1.0);
    vec4 worldDirection = inverseViewMatrix * vec4(viewPosition.xyz, 0.0);
    origin = cameraPosition;
    direction = worldDirection.xyz;
  } else {
    // Unprojected points to calculate direction.
    vec4 nearPoint = inverseProjectionMatrix * vec4(position.xy, -1.0, 1.0);
    vec4 farPoint = inverseProjectionMatrix * vec4(position.xy, -0.9, 1.0);
    nearPoint /= nearPoint.w;
    farPoint /= farPoint.w;

    // Calculate world values.
    vec4 worldDirection = inverseViewMatrix * vec4(farPoint.xyz - nearPoint.xyz, 0.0);
    vec4 worldOrigin = inverseViewMatrix * nearPoint;

    // Outputs
    direction = worldDirection.xyz;
    origin = worldOrigin.xyz;
  }
}

void mainSupport() {
  vec3 direction, origin;
  getCameraRay(origin, direction);

  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(origin, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(direction, 0.0)).xyz;

  vGeometryAltitudeCorrection = altitudeCorrection * METER_TO_LENGTH_UNIT;
  // Gradually turn off the altitude correction on geometries as the geometric
  // error correction takes effect, because that on the ideal sphere will be
  // over corrected.
  // See: https://github.com/takram-design-engineering/three-geospatial/pull/23#issuecomment-2542914656
  #ifdef CORRECT_GEOMETRIC_ERROR
  vGeometryAltitudeCorrection *= 1.0 - geometricErrorCorrectionAmount;
  #endif // CORRECT_GEOMETRIC_ERROR

  vec3 radii = ellipsoidRadii * METER_TO_LENGTH_UNIT;
  vEllipsoidRadiiSquared = radii * radii;
}
`,uo=`vec3 getLunarRadiance(const float moonAngularRadius) {
  // Not a physical number but the order of 10^-6 relative to the sun may fit.
  vec3 radiance =
    ATMOSPHERE.solar_irradiance *
    0.000002 /
    (PI * moonAngularRadius * moonAngularRadius) *
    SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
  return radiance;
}

float intersectSphere(const vec3 ray, const vec3 point, const float radius) {
  vec3 P = -point;
  float PoR = dot(P, ray);
  float D = dot(P, P) - radius * radius;
  return -PoR - sqrt(PoR * PoR - D);
}

float orenNayarDiffuse(const vec3 L, const vec3 V, const vec3 N) {
  float NoL = dot(N, L);
  float NoV = dot(N, V);
  float s = dot(L, V) - NoL * NoV;
  float t = mix(1.0, max(NoL, NoV), step(0.0, s));
  return max(0.0, NoL) * (0.62406015 + 0.41284404 * s / t);
}

vec3 getSkyRadiance(
  const vec3 cameraPosition,
  const vec3 rayDirection,
  const float shadowLength,
  const vec3 sunDirection,
  const vec3 moonDirection,
  const float moonAngularRadius,
  const float lunarRadianceScale,
  const float fragmentAngle
) {
  vec3 transmittance;
  vec3 radiance = GetSkyRadiance(
    cameraPosition,
    rayDirection,
    shadowLength,
    sunDirection,
    transmittance
  );

  // Rendering celestial objects without perspective doesn't make sense.
  #ifdef PERSPECTIVE_CAMERA

  #ifdef SUN
  float viewDotSun = dot(rayDirection, sunDirection);
  if (viewDotSun > cosSunAngularRadius) {
    float angle = acos(clamp(viewDotSun, -1.0, 1.0));
    float antialias = smoothstep(
      ATMOSPHERE.sun_angular_radius,
      ATMOSPHERE.sun_angular_radius - fragmentAngle,
      angle
    );
    radiance += transmittance * GetSolarRadiance() * antialias;
  }
  #endif // SUN

  #ifdef MOON
  float intersection = intersectSphere(rayDirection, moonDirection, moonAngularRadius);
  if (intersection > 0.0) {
    vec3 normal = normalize(moonDirection - rayDirection * intersection);
    float diffuse = orenNayarDiffuse(-sunDirection, rayDirection, normal);
    float viewDotMoon = dot(rayDirection, moonDirection);
    float angle = acos(clamp(viewDotMoon, -1.0, 1.0));
    float antialias = smoothstep(moonAngularRadius, moonAngularRadius - fragmentAngle, angle);
    radiance +=
      transmittance *
      getLunarRadiance(moonAngularRadius) *
      lunarRadianceScale *
      diffuse *
      antialias;
  }
  #endif // MOON

  #endif // PERSPECTIVE_CAMERA

  return radiance;
}
`,Dd=Object.defineProperty,Me=(t,e,r,i)=>{for(var a=void 0,s=t.length-1,o;s>=0;s--)(o=t[s])&&(a=o(e,r,a)||a);return a&&Dd(e,r,a),a},Rd=new ce,Id=new ce,_d=new qe,ho={blendFunction:z.NORMAL,octEncodedNormal:!1,reconstructNormal:!1,ellipsoid:ft.WGS84,correctAltitude:!0,correctGeometricError:!0,sunLight:!1,skyLight:!1,transmittance:!0,inscatter:!0,albedoScale:1,sky:!1,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1,ground:!0},Ae=class extends Qt{constructor(e=new Ad,r,i=mr.DEFAULT){let{blendFunction:a,normalBuffer:s=null,octEncodedNormal:o,reconstructNormal:u,irradianceTexture:f=null,scatteringTexture:p=null,transmittanceTexture:x=null,singleMieScatteringTexture:y=null,higherOrderScatteringTexture:U=null,ellipsoid:V,correctAltitude:se,correctGeometricError:j,sunDirection:he,sunLight:ge,skyLight:ie,transmittance:X,inscatter:de,albedoScale:fe,sky:Le,sun:Xe,moon:Qe,moonDirection:we,moonAngularRadius:Be,lunarRadianceScale:Te,ground:wt}={...ho,...r};super("AerialPerspectiveEffect",Gt(Ve(yd,{core:{depth:Gi,packing:Zs,math:ar,transform:Ks,raySphereIntersection:sr,cascadedShadowMaps:Hi,interleavedGradientNoise:zi,vogelDisk:ki},bruneton:{common:lr,definitions:ur,runtime:hr},sky:uo})),{blendFunction:a,vertexShader:Cd,attributes:je.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new N(s),projectionMatrix:new N(new Ye),viewMatrix:new N(new Ye),inverseProjectionMatrix:new N(new Ye),inverseViewMatrix:new N(new Ye),cameraPosition:new N(new ce),bottomRadius:new N(i.bottomRadius),ellipsoidRadii:new N(new ce),worldToECEFMatrix:new N(new Ye),altitudeCorrection:new N(new ce),geometricErrorCorrectionAmount:new N(0),sunDirection:new N(he?.clone()??new ce),cosSunAngularRadius:new N(i.sunAngularRadius),albedoScale:new N(fe),moonDirection:new N(we?.clone()??new ce),moonAngularRadius:new N(Be),lunarRadianceScale:new N(Te),overlayBuffer:new N(null),shadowBuffer:new N(null),shadowMapSize:new N(new co),shadowIntervals:new N([]),shadowMatrices:new N([]),inverseShadowMatrices:new N([]),shadowFar:new N(0),shadowTopHeight:new N(0),shadowRadius:new N(3),stbnTexture:new N(null),frame:new N(0),shadowLengthBuffer:new N(null),lightingMaskBuffer:new N(null),ATMOSPHERE:i.toUniform(),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:new N(i.sunRadianceToRelativeLuminance),SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:new N(i.skyRadianceToRelativeLuminance),irradiance_texture:new N(f),scattering_texture:new N(p),transmittance_texture:new N(x),single_mie_scattering_texture:new N(null),higher_order_scattering_texture:new N(null)})),defines:new Map([["TRANSMITTANCE_TEXTURE_WIDTH",Zr.toFixed(0)],["TRANSMITTANCE_TEXTURE_HEIGHT",Kr.toFixed(0)],["SCATTERING_TEXTURE_R_SIZE",Vr.toFixed(0)],["SCATTERING_TEXTURE_MU_SIZE",Yr.toFixed(0)],["SCATTERING_TEXTURE_MU_S_SIZE",Xr.toFixed(0)],["SCATTERING_TEXTURE_NU_SIZE",Qr.toFixed(0)],["IRRADIANCE_TEXTURE_WIDTH",kr.toFixed(0)],["IRRADIANCE_TEXTURE_HEIGHT",Wr.toFixed(0)],["METER_TO_LENGTH_UNIT",or.toFixed(7)]])}),this.camera=e,this.atmosphere=i,this.overlay=null,this.shadow=null,this.shadowLength=null,this.lightingMask=null,this.hasNormals=!1,this.combinedScatteringTextures=!1,this.hasHigherOrderScatteringTexture=!1,this.shadowSampleCount=8,this.octEncodedNormal=o,this.reconstructNormal=u,this.singleMieScatteringTexture=y,this.higherOrderScatteringTexture=U,this.ellipsoid=V,this.correctAltitude=se,this.correctGeometricError=j,this.sunLight=ge,this.skyLight=ie,this.transmittance=X,this.inscatter=de,this.sky=Le,this.sun=Xe,this.moon=Qe,this.ground=wt}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e}copyCameraSettings(e){let{projectionMatrix:r,matrixWorldInverse:i,projectionMatrixInverse:a,matrixWorld:s}=e,o=this.uniforms;o.get("projectionMatrix").value.copy(r),o.get("viewMatrix").value.copy(i),o.get("inverseProjectionMatrix").value.copy(a),o.get("inverseViewMatrix").value.copy(s);let u=e.getWorldPosition(o.get("cameraPosition").value),f=o.get("worldToECEFMatrix").value,p=Rd.copy(u).applyMatrix4(f);try{let y=_d.setFromECEF(p).height,U=Id.set(0,this.ellipsoid.maximumRadius,-Math.max(0,y)).applyMatrix4(r);o.get("geometricErrorCorrectionAmount").value=Ys(Vs(U.y,41.5,13.8,0,1))}catch{return}let x=o.get("altitudeCorrection");this.correctAltitude?cr(p,this.atmosphere.bottomRadius,this.ellipsoid,x.value):x.value.setScalar(0)}updateOverlay(){let e=!1,{uniforms:r,defines:i,overlay:a}=this,s=i.has("HAS_OVERLAY"),o=a!=null;return o!==s&&(o?i.set("HAS_OVERLAY","1"):(i.delete("HAS_OVERLAY"),r.get("overlayBuffer").value=null),e=!0),o&&(r.get("overlayBuffer").value=a.map),e}updateShadow(){let e=!1,{uniforms:r,defines:i,shadow:a}=this,s=i.has("HAS_SHADOW"),o=a!=null;if(o!==s&&(o?i.set("HAS_SHADOW","1"):(i.delete("HAS_SHADOW"),r.get("shadowBuffer").value=null),e=!0),o){let u=i.get("SHADOW_CASCADE_COUNT"),f=`${a.cascadeCount}`;u!==f&&(i.set("SHADOW_CASCADE_COUNT",a.cascadeCount.toFixed(0)),e=!0),r.get("shadowBuffer").value=a.map,r.get("shadowMapSize").value=a.mapSize,r.get("shadowIntervals").value=a.intervals,r.get("shadowMatrices").value=a.matrices,r.get("inverseShadowMatrices").value=a.inverseMatrices,r.get("shadowFar").value=a.far,r.get("shadowTopHeight").value=a.topHeight}return e}updateShadowLength(){let e=!1,{uniforms:r,defines:i,shadowLength:a}=this,s=i.has("HAS_SHADOW_LENGTH"),o=a!=null;return o!==s&&(o?i.set("HAS_SHADOW_LENGTH","1"):(i.delete("HAS_SHADOW_LENGTH"),r.get("shadowLengthBuffer").value=null),e=!0),o&&(r.get("shadowLengthBuffer").value=a.map),e}updateLightingMask(){let e=!1,{uniforms:r,defines:i,lightingMask:a}=this,s=i.has("HAS_LIGHTING_MASK"),o=a!=null;if(o!==s&&(o?i.set("HAS_LIGHTING_MASK","1"):(i.delete("HAS_LIGHTING_MASK"),r.get("lightingMaskBuffer").value=null),e=!0),o){r.get("lightingMaskBuffer").value=a.map;let u=i.get("LIGHTING_MASK_CHANNEL"),f=a.channel;f!==u&&(/^[rgba]$/.test(f)?(i.set("LIGHTING_MASK_CHANNEL",f),e=!0):console.error(`Expression validation failed: ${f}`))}return e}update(e,r,i){this.copyCameraSettings(this.camera);let a=!1;a||=this.updateOverlay(),a||=this.updateShadow(),a||=this.updateShadowLength(),a||=this.updateLightingMask(),a&&this.setChanged(),++this.uniforms.get("frame").value}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(e){this.uniforms.get("normalBuffer").value=e,this.hasNormals=e!=null}get irradianceTexture(){return this.uniforms.get("irradiance_texture").value}set irradianceTexture(e){this.uniforms.get("irradiance_texture").value=e}get scatteringTexture(){return this.uniforms.get("scattering_texture").value}set scatteringTexture(e){this.uniforms.get("scattering_texture").value=e}get transmittanceTexture(){return this.uniforms.get("transmittance_texture").value}set transmittanceTexture(e){this.uniforms.get("transmittance_texture").value=e}get singleMieScatteringTexture(){return this.uniforms.get("single_mie_scattering_texture").value}set singleMieScatteringTexture(e){this.uniforms.get("single_mie_scattering_texture").value=e,this.combinedScatteringTextures=e==null}get higherOrderScatteringTexture(){return this.uniforms.get("higher_order_scattering_texture").value}set higherOrderScatteringTexture(e){this.uniforms.get("higher_order_scattering_texture").value=e,this.hasHigherOrderScatteringTexture=e!=null}get ellipsoid(){return this._ellipsoid}set ellipsoid(e){this._ellipsoid=e,this.uniforms.get("ellipsoidRadii").value.copy(e.radii)}get worldToECEFMatrix(){return this.uniforms.get("worldToECEFMatrix").value}get sunDirection(){return this.uniforms.get("sunDirection").value}get sunAngularRadius(){return this.uniforms.get("ATMOSPHERE").value.sun_angular_radius}set sunAngularRadius(e){this.uniforms.get("ATMOSPHERE").value.sun_angular_radius=e,this.uniforms.get("cosSunAngularRadius").value=Math.cos(e)}get albedoScale(){return this.uniforms.get("albedoScale").value}set albedoScale(e){this.uniforms.get("albedoScale").value=e}get moonDirection(){return this.uniforms.get("moonDirection").value}get moonAngularRadius(){return this.uniforms.get("moonAngularRadius").value}set moonAngularRadius(e){this.uniforms.get("moonAngularRadius").value=e}get lunarRadianceScale(){return this.uniforms.get("lunarRadianceScale").value}set lunarRadianceScale(e){this.uniforms.get("lunarRadianceScale").value=e}get stbnTexture(){return this.uniforms.get("stbnTexture").value}set stbnTexture(e){this.uniforms.get("stbnTexture").value=e}get shadowRadius(){return this.uniforms.get("shadowRadius").value}set shadowRadius(e){this.uniforms.get("shadowRadius").value=e}};Me([Y("OCT_ENCODED_NORMAL")],Ae.prototype,"octEncodedNormal");Me([Y("RECONSTRUCT_NORMAL")],Ae.prototype,"reconstructNormal");Me([Y("HAS_NORMALS")],Ae.prototype,"hasNormals");Me([Y("COMBINED_SCATTERING_TEXTURES")],Ae.prototype,"combinedScatteringTextures");Me([Y("HAS_HIGHER_ORDER_SCATTERING_TEXTURE")],Ae.prototype,"hasHigherOrderScatteringTexture");Me([Y("CORRECT_GEOMETRIC_ERROR")],Ae.prototype,"correctGeometricError");Me([Y("SUN_LIGHT")],Ae.prototype,"sunLight");Me([Y("SKY_LIGHT")],Ae.prototype,"skyLight");Me([Y("TRANSMITTANCE")],Ae.prototype,"transmittance");Me([Y("INSCATTER")],Ae.prototype,"inscatter");Me([Y("SKY")],Ae.prototype,"sky");Me([Y("SUN")],Ae.prototype,"sun");Me([Y("MOON")],Ae.prototype,"moon");Me([Y("GROUND")],Ae.prototype,"ground");Me([vt("SHADOW_SAMPLE_COUNT",{min:1,max:16})],Ae.prototype,"shadowSampleCount");var Md=Object.defineProperty,fo=(t,e,r,i)=>{for(var a=void 0,s=t.length-1,o;s>=0;s--)(o=t[s])&&(a=o(e,r,a)||a);return a&&Md(e,r,a),a},Pd=new ce;function Nd(t,e){let r="",i="";for(let a=1;a<e;++a)r+=`layout(location = ${a}) out float renderTarget${a};
`,i+=`renderTarget${a} = 0.0;
`;return t.replace("#include <mrt_layout>",r).replace("#include <mrt_output>",i)}var Vi={ellipsoid:ft.WGS84,correctAltitude:!0,renderTargetCount:1},Tt=class extends Td{constructor(e,r=mr.DEFAULT){let{irradianceTexture:i=null,scatteringTexture:a=null,transmittanceTexture:s=null,singleMieScatteringTexture:o=null,higherOrderScatteringTexture:u=null,ellipsoid:f,correctAltitude:p,sunDirection:x,sunAngularRadius:y,renderTargetCount:U,...V}={...Vi,...e};super({toneMapped:!1,depthWrite:!1,depthTest:!1,...V,uniforms:{cameraPosition:new N(new ce),worldToECEFMatrix:new N(new Ye),altitudeCorrection:new N(new ce),sunDirection:new N(x?.clone()??new ce),cosSunAngularRadius:new N(r.sunAngularRadius),ATMOSPHERE:r.toUniform(),SUN_SPECTRAL_RADIANCE_TO_LUMINANCE:new N(r.sunRadianceToRelativeLuminance),SKY_SPECTRAL_RADIANCE_TO_LUMINANCE:new N(r.skyRadianceToRelativeLuminance),irradiance_texture:new N(i),scattering_texture:new N(a),transmittance_texture:new N(s),single_mie_scattering_texture:new N(null),higher_order_scattering_texture:new N(null),...V.uniforms},defines:{PI:`${Math.PI}`,TRANSMITTANCE_TEXTURE_WIDTH:Zr.toFixed(0),TRANSMITTANCE_TEXTURE_HEIGHT:Kr.toFixed(0),SCATTERING_TEXTURE_R_SIZE:Vr.toFixed(0),SCATTERING_TEXTURE_MU_SIZE:Yr.toFixed(0),SCATTERING_TEXTURE_MU_S_SIZE:Xr.toFixed(0),SCATTERING_TEXTURE_NU_SIZE:Qr.toFixed(0),IRRADIANCE_TEXTURE_WIDTH:kr.toFixed(0),IRRADIANCE_TEXTURE_HEIGHT:Wr.toFixed(0),METER_TO_LENGTH_UNIT:or.toFixed(7),...V.defines}}),this.atmosphere=r,this.combinedScatteringTextures=!1,this.hasHigherOrderScatteringTexture=!1,this.singleMieScatteringTexture=o,this.higherOrderScatteringTexture=u,this.ellipsoid=f,this.correctAltitude=p,y!=null&&(this.sunAngularRadius=y),this.renderTargetCount=U}copyCameraSettings(e){let r=this.uniforms,i=e.getWorldPosition(r.cameraPosition.value),a=Pd.copy(i).applyMatrix4(r.worldToECEFMatrix.value),s=r.altitudeCorrection.value;this.correctAltitude?cr(a,this.atmosphere.bottomRadius,this.ellipsoid,s):s.setScalar(0)}onBeforeCompile(e,r){e.fragmentShader=Nd(e.fragmentShader,this.renderTargetCount)}onBeforeRender(e,r,i,a,s,o){this.copyCameraSettings(i)}get irradianceTexture(){return this.uniforms.irradiance_texture.value}set irradianceTexture(e){this.uniforms.irradiance_texture.value=e}get scatteringTexture(){return this.uniforms.scattering_texture.value}set scatteringTexture(e){this.uniforms.scattering_texture.value=e}get transmittanceTexture(){return this.uniforms.transmittance_texture.value}set transmittanceTexture(e){this.uniforms.transmittance_texture.value=e}get singleMieScatteringTexture(){return this.uniforms.single_mie_scattering_texture.value}set singleMieScatteringTexture(e){this.uniforms.single_mie_scattering_texture.value=e,this.combinedScatteringTextures=e==null}get higherOrderScatteringTexture(){return this.uniforms.higher_order_scattering_texture.value}set higherOrderScatteringTexture(e){this.uniforms.higher_order_scattering_texture.value=e,this.hasHigherOrderScatteringTexture=e!=null}get worldToECEFMatrix(){return this.uniforms.worldToECEFMatrix.value}get sunDirection(){return this.uniforms.sunDirection.value}get sunAngularRadius(){return this.uniforms.ATMOSPHERE.value.sun_angular_radius}set sunAngularRadius(e){this.uniforms.ATMOSPHERE.value.sun_angular_radius=e,this.uniforms.cosSunAngularRadius.value=Math.cos(e)}get renderTargetCount(){return this._renderTargetCount}set renderTargetCount(e){e!==this.renderTargetCount&&(this._renderTargetCount=e,this.needsUpdate=!0)}};fo([Y("COMBINED_SCATTERING_TEXTURES")],Tt.prototype,"combinedScatteringTextures");fo([Y("HAS_HIGHER_ORDER_SCATTERING_TEXTURE")],Tt.prototype,"hasHigherOrderScatteringTexture");var mo=14959787069098932e-8;var gT=2*Math.PI,vT=3600*(180/Math.PI);var bd=10800*60,AT=2*bd,Od=6378.1366,TT=Od/mo;var lt;(function(t){t.Sun="Sun",t.Moon="Moon",t.Mercury="Mercury",t.Venus="Venus",t.Earth="Earth",t.Mars="Mars",t.Jupiter="Jupiter",t.Saturn="Saturn",t.Uranus="Uranus",t.Neptune="Neptune",t.Pluto="Pluto",t.SSB="SSB",t.EMB="EMB",t.Star1="Star1",t.Star2="Star2",t.Star3="Star3",t.Star4="Star4",t.Star5="Star5",t.Star6="Star6",t.Star7="Star7",t.Star8="Star8"})(lt||(lt={}));var ST=[lt.Star1,lt.Star2,lt.Star3,lt.Star4,lt.Star5,lt.Star6,lt.Star7,lt.Star8];var to;(function(t){t[t.From2000=0]="From2000",t[t.Into2000=1]="Into2000"})(to||(to={}));var ro;(function(t){t[t.Pericenter=0]="Pericenter",t[t.Apocenter=1]="Apocenter"})(ro||(ro={}));var io;(function(t){t.Penumbral="penumbral",t.Partial="partial",t.Annular="annular",t.Total="total"})(io||(io={}));var no;(function(t){t[t.Invalid=0]="Invalid",t[t.Ascending=1]="Ascending",t[t.Descending=-1]="Descending"})(no||(no={}));var xT=.001/mo;function Ud(t){var e=[];if(t.length===0)return"";if(typeof t[0]!="string")throw new TypeError("Url must be a string. Received "+t[0]);if(t[0].match(/^[^/:]+:\/*$/)&&t.length>1){var r=t.shift();t[0]=r+t[0]}t[0].match(/^file:\/\/\//)?t[0]=t[0].replace(/^([^/:]+):\/*/,"$1:///"):t[0]=t[0].replace(/^([^/:]+):\/*/,"$1://");for(var i=0;i<t.length;i++){var a=t[i];if(typeof a!="string")throw new TypeError("Url must be a string. Received "+a);a!==""&&(i>0&&(a=a.replace(/^[\/]+/,"")),i<t.length-1?a=a.replace(/[\/]+$/,""):a=a.replace(/[\/]+$/,"/"),e.push(a))}var s=e.join("/");s=s.replace(/\/(\?|&|#[^!])/g,"$1");var o=s.split("?");return s=o.shift()+(o.length>0?"?":"")+o.join("&"),s}function Ld(){var t;return typeof arguments[0]=="object"?t=arguments[0]:t=[].slice.call(arguments),Ud(t)}var ao={width:Zr,height:Kr},dr={width:Kn,height:jn,depth:qn},so={width:kr,height:Wr},Wi=class extends Sd{constructor({format:e="exr",type:r=qs,combinedScattering:i=!0,higherOrderScattering:a=!0}={},s){super(s),this.format=e,this.type=r,this.combinedScattering=i,this.higherOrderScattering=a}setType(e){return this.type=Ss(e)?Js:qs,this}load(e,r,i,a){let s={},o=({key:u,loader:f,path:p})=>(f.setRequestHeader(this.requestHeader),f.setPath(this.path),f.setWithCredentials(this.withCredentials),f.load(Ld(e,p),x=>{x.type=this.type,this.type===Js&&(x.image,x.image.data!=null&&(x.image.data=new Float32Array(new We(x.image.data?.buffer)))),x.minFilter=$s,x.magFilter=$s,s[`${u}Texture`]=x,s.irradianceTexture!=null&&s.scatteringTexture!=null&&s.transmittanceTexture!=null&&(this.combinedScattering||s.singleMieScatteringTexture!=null)&&(!this.higherOrderScattering||s.higherOrderScatteringTexture!=null)&&r?.(s)},i,a));return this.format==="exr"?{transmittanceTexture:o({key:"transmittance",loader:new Fr(ao,this.manager),path:"transmittance.exr"}),scatteringTexture:o({key:"scattering",loader:new tr(dr,this.manager),path:"scattering.exr"}),irradianceTexture:o({key:"irradiance",loader:new Fr(so,this.manager),path:"irradiance.exr"}),singleMieScatteringTexture:this.combinedScattering?void 0:o({key:"singleMieScattering",loader:new tr(dr,this.manager),path:"single_mie_scattering.exr"}),higherOrderScatteringTexture:this.higherOrderScattering?o({key:"higherOrderScattering",loader:new tr(dr,this.manager),path:"higher_order_scattering.exr"}):void 0}:{transmittanceTexture:o({key:"transmittance",loader:new Mt(eo,nr,ao,this.manager),path:"transmittance.bin"}),scatteringTexture:o({key:"scattering",loader:new Mt(Jn,nr,dr,this.manager),path:"scattering.bin"}),irradianceTexture:o({key:"irradiance",loader:new Mt(eo,nr,so,this.manager),path:"irradiance.bin"}),singleMieScatteringTexture:this.combinedScattering?void 0:o({key:"singleMieScattering",loader:new Mt(Jn,nr,dr,this.manager),path:"single_mie_scattering.bin"}),higherOrderScatteringTexture:this.higherOrderScattering?o({key:"higherOrderScattering",loader:new Mt(Jn,nr,dr,this.manager),path:"higher_order_scattering.bin"}):void 0}}};var ET=1/Math.sqrt(Math.PI),wT=Math.sqrt(3)/(2*Math.sqrt(Math.PI));var Bd={ellipsoid:ft.WGS84,correctAltitude:!0};var Fd=`precision highp float;
precision highp sampler3D;

#define RECIPROCAL_PI 0.3183098861837907

#include "core/raySphereIntersection"

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform vec3 sunDirection;
uniform float cosSunAngularRadius;
uniform vec3 moonDirection;
uniform float moonAngularRadius;
uniform float lunarRadianceScale;
uniform vec3 groundAlbedo;

#include "sky"

#ifdef HAS_SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
#endif // HAS_SHADOW_LENGTH

in vec2 vUv;
in vec3 vCameraPosition;
in vec3 vRayDirection;

layout(location = 0) out vec4 outputColor;

#include <mrt_layout>

void main() {
  float shadowLength = 0.0;
  #ifdef HAS_SHADOW_LENGTH
  shadowLength = texture(shadowLengthBuffer, vUv).r;
  #endif // HAS_SHADOW_LENGTH

  vec3 cameraPosition = vCameraPosition;
  vec3 rayDirection = normalize(vRayDirection);
  vec3 dRDdx = dFdx(rayDirection);
  vec3 dRDdy = dFdy(rayDirection);
  float fragmentAngle = length(dRDdx + dRDdy) / length(rayDirection);

  #ifdef GROUND_ALBEDO

  float r = length(cameraPosition);
  float mu = dot(cameraPosition, rayDirection) / r;
  bool intersectsGround = RayIntersectsGround(ATMOSPHERE, r, mu);
  if (intersectsGround) {
    float distanceToGround = raySphereFirstIntersection(
      cameraPosition,
      rayDirection,
      ATMOSPHERE.bottom_radius
    );
    vec3 groundPosition = rayDirection * distanceToGround + cameraPosition;
    vec3 surfaceNormal = normalize(groundPosition);
    vec3 skyIrradiance;
    vec3 sunIrradiance = GetSunAndSkyIrradiance(
      cameraPosition,
      surfaceNormal,
      sunDirection,
      skyIrradiance
    );
    vec3 transmittance;
    vec3 inscatter = GetSkyRadianceToPoint(
      cameraPosition,
      ATMOSPHERE.bottom_radius * surfaceNormal,
      shadowLength,
      sunDirection,
      transmittance
    );
    vec3 radiance = groundAlbedo * RECIPROCAL_PI * (sunIrradiance + skyIrradiance);
    outputColor.rgb = radiance * transmittance + inscatter;
  } else {
    outputColor.rgb = getSkyRadiance(
      cameraPosition,
      rayDirection,
      shadowLength,
      sunDirection,
      moonDirection,
      moonAngularRadius,
      lunarRadianceScale,
      fragmentAngle
    );
  }

  #else // GROUND_ALBEDO

  outputColor.rgb = getSkyRadiance(
    cameraPosition,
    rayDirection,
    shadowLength,
    sunDirection,
    moonDirection,
    moonAngularRadius,
    lunarRadianceScale,
    fragmentAngle
  );

  #endif // GROUND_ALBEDO

  outputColor.a = 1.0;

  #include <mrt_output>
}
`,Hd=`precision highp float;
precision highp sampler3D;

uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform vec3 cameraPosition;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;

layout(location = 0) in vec3 position;

out vec2 vUv;
out vec3 vCameraPosition;
out vec3 vRayDirection;

void getCameraRay(out vec3 origin, out vec3 direction) {
  bool isPerspective = inverseProjectionMatrix[2][3] != 0.0; // 4th entry in the 3rd column

  if (isPerspective) {
    // Calculate the camera ray for a perspective camera.
    vec4 viewPosition = inverseProjectionMatrix * vec4(position, 1.0);
    vec4 worldDirection = inverseViewMatrix * vec4(viewPosition.xyz, 0.0);
    origin = cameraPosition;
    direction = worldDirection.xyz;
  } else {
    // Unprojected points to calculate direction.
    vec4 nearPoint = inverseProjectionMatrix * vec4(position.xy, -1.0, 1.0);
    vec4 farPoint = inverseProjectionMatrix * vec4(position.xy, -0.9, 1.0);
    nearPoint /= nearPoint.w;
    farPoint /= farPoint.w;

    // Calculate world values
    vec4 worldDirection = inverseViewMatrix * vec4(farPoint.xyz - nearPoint.xyz, 0.0);
    vec4 worldOrigin = inverseViewMatrix * nearPoint;

    // Outputs
    direction = worldDirection.xyz;
    origin = worldOrigin.xyz;
  }
}

void main() {
  vUv = position.xy * 0.5 + 0.5;

  vec3 direction, origin;
  getCameraRay(origin, direction);

  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(origin, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(direction, 0.0)).xyz;

  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,Gd=Object.defineProperty,ea=(t,e,r,i)=>{for(var a=void 0,s=t.length-1,o;s>=0;s--)(o=t[s])&&(a=o(e,r,a)||a);return a&&Gd(e,r,a),a},po={...Vi,sun:!0,moon:!0,moonAngularRadius:.0045,lunarRadianceScale:1,ground:!0,groundAlbedo:new oo(0)},fr=class extends Tt{constructor(e){let{sun:r,moon:i,moonDirection:a,moonAngularRadius:s,lunarRadianceScale:o,ground:u,groundAlbedo:f,...p}={...po,...e};super({name:"SkyMaterial",glslVersion:lo,vertexShader:Hd,fragmentShader:Ve(Fd,{core:{raySphereIntersection:sr},bruneton:{common:lr,definitions:ur,runtime:hr},sky:uo}),...p,uniforms:{inverseProjectionMatrix:new N(new Ye),inverseViewMatrix:new N(new Ye),moonDirection:new N(a?.clone()??new ce),moonAngularRadius:new N(s),lunarRadianceScale:new N(o),groundAlbedo:new N(f.clone()),shadowLengthBuffer:new N(null),...p.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthWrite:!1,depthTest:!0}),this.shadowLength=null,this.sun=r,this.moon=i,this.ground=u}onBeforeRender(e,r,i,a,s,o){super.onBeforeRender(e,r,i,a,s,o);let{uniforms:u,defines:f}=this;u.inverseProjectionMatrix.value.copy(i.projectionMatrixInverse),u.inverseViewMatrix.value.copy(i.matrixWorld);let p=f.PERSPECTIVE_CAMERA!=null,x=i.isPerspectiveCamera===!0;x!==p&&(x?f.PERSPECTIVE_CAMERA="1":delete f.PERSPECTIVE_CAMERA,this.needsUpdate=!0);let y=this.groundAlbedo,U=f.GROUND_ALBEDO!=null,V=y.r!==0||y.g!==0||y.b!==0;V!==U&&(V?this.defines.GROUND_ALBEDO="1":delete this.defines.GROUND_ALBEDO,this.needsUpdate=!0);let se=this.shadowLength,j=f.HAS_SHADOW_LENGTH!=null,he=se!=null;he!==j&&(he?f.HAS_SHADOW_LENGTH="1":(delete f.HAS_SHADOW_LENGTH,u.shadowLengthBuffer.value=null),this.needsUpdate=!0),he&&(u.shadowLengthBuffer.value=se.map)}get moonDirection(){return this.uniforms.moonDirection.value}get moonAngularRadius(){return this.uniforms.moonAngularRadius.value}set moonAngularRadius(e){this.uniforms.moonAngularRadius.value=e}get lunarRadianceScale(){return this.uniforms.lunarRadianceScale.value}set lunarRadianceScale(e){this.uniforms.lunarRadianceScale.value=e}get groundAlbedo(){return this.uniforms.groundAlbedo.value}};ea([Y("SUN")],fr.prototype,"sun");ea([Y("MOON")],fr.prototype,"moon");ea([Y("GROUND")],fr.prototype,"ground");var zd=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "bruneton/common"
#include "bruneton/runtime"

uniform vec3 sunDirection;

in vec3 vCameraPosition;
in vec3 vRayDirection;

layout(location = 0) out vec4 outputColor;

#include <mrt_layout>

in vec3 vColor;

void main() {
  #if !defined(PERSPECTIVE_CAMERA)
  outputColor = vec4(0.0);
  discard; // Rendering celestial objects without perspective doesn't make sense.
  #endif // !defined(PERSPECTIVE_CAMERA)

  #ifdef BACKGROUND
  vec3 rayDirection = normalize(vRayDirection);
  float r = length(vCameraPosition);
  float mu = dot(vCameraPosition, rayDirection) / r;

  if (RayIntersectsGround(ATMOSPHERE, r, mu)) {
    discard;
  }

  vec3 transmittance;
  vec3 radiance = GetSkyRadiance(
    vCameraPosition,
    normalize(vRayDirection),
    0.0, // Shadow length
    sunDirection,
    transmittance
  );
  radiance += transmittance * vColor;
  outputColor = vec4(radiance, 1.0);
  #else // BACKGROUND
  outputColor = vec4(vColor, 1.0);
  #endif // BACKGROUND

  #include <mrt_output>
}
`,kd=`precision highp float;
precision highp sampler3D;

#define saturate(x) clamp(x, 0.0, 1.0)

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 viewMatrix;
uniform mat4 matrixWorld;
uniform vec3 cameraPosition;
uniform float cameraFar;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;
uniform float pointSize;
uniform vec2 magnitudeRange;
uniform float intensity;

layout(location = 0) in vec3 position;
layout(location = 1) in float magnitude;
layout(location = 2) in vec3 color;

out vec3 vCameraPosition;
out vec3 vRayDirection;
out vec3 vEllipsoidCenter;
out vec3 vColor;

void main() {
  // Magnitude is stored between 0 to 1 within the given range.
  float m = mix(magnitudeRange.x, magnitudeRange.y, magnitude);
  vec3 v = pow(vec3(10.0), -vec3(magnitudeRange, m) / 2.5);
  vColor = vec3(intensity * color);
  vColor *= saturate((v.z - v.y) / (v.x - v.y));

  #ifdef BACKGROUND
  vec3 worldDirection = normalize(matrixWorld * vec4(position, 1.0)).xyz;
  vec3 cameraPositionECEF = (worldToECEFMatrix * vec4(cameraPosition, 1.0)).xyz;
  vCameraPosition = (cameraPositionECEF + altitudeCorrection) * METER_TO_LENGTH_UNIT;
  vRayDirection = (worldToECEFMatrix * vec4(worldDirection, 0.0)).xyz;
  gl_Position =
    projectionMatrix * viewMatrix * vec4(cameraPosition + worldDirection * cameraFar, 1.0);
  #else // BACKGROUND
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  #endif // BACKGROUND

  gl_PointSize = pointSize;
}
`,Wd=Object.defineProperty,go=(t,e,r,i)=>{for(var a=void 0,s=t.length-1,o;s>=0;s--)(o=t[s])&&(a=o(e,r,a)||a);return a&&Wd(e,r,a),a},vo={...Vi,pointSize:1,intensity:1,background:!0,ground:!0},jr=class extends Tt{constructor(e){let{pointSize:r,intensity:i,background:a,ground:s,...o}={...vo,...e};super({name:"StarsMaterial",glslVersion:lo,vertexShader:kd,fragmentShader:Ve(zd,{bruneton:{common:lr,definitions:ur,runtime:hr}}),...o,uniforms:{projectionMatrix:new N(new Ye),modelViewMatrix:new N(new Ye),viewMatrix:new N(new Ye),matrixWorld:new N(new Ye),cameraFar:new N(0),pointSize:new N(0),magnitudeRange:new N(new co(-2,8)),intensity:new N(i),...o.uniforms},defines:{PERSPECTIVE_CAMERA:"1"},depthWrite:!0,depthTest:!0}),this.pointSize=r,this.background=a,this.ground=s}onBeforeRender(e,r,i,a,s,o){super.onBeforeRender(e,r,i,a,s,o);let u=this.uniforms;u.projectionMatrix.value.copy(i.projectionMatrix),u.modelViewMatrix.value.copy(i.modelViewMatrix),u.viewMatrix.value.copy(i.matrixWorldInverse),u.matrixWorld.value.copy(s.matrixWorld),u.cameraFar.value=i.far,u.pointSize.value=this.pointSize*e.getPixelRatio();let f=i.isPerspectiveCamera===!0;this.defines.PERSPECTIVE_CAMERA!=null!==f&&(f?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}get magnitudeRange(){return this.uniforms.magnitudeRange.value}get intensity(){return this.uniforms.intensity.value}set intensity(e){this.uniforms.intensity.value=e}};go([Y("BACKGROUND")],jr.prototype,"background");go([Y("GROUND")],jr.prototype,"ground");var Vd={ellipsoid:ft.WGS84,correctAltitude:!0,distance:1};var ta=hr,ra=lr,ia=ur;var $r=class t{constructor(e=0,r=0,i=0,a=0){this.expTerm=e,this.exponent=r,this.linearTerm=i,this.constantTerm=a}set(e=0,r=0,i=0,a=0){return this.expTerm=e,this.exponent=r,this.linearTerm=i,this.constantTerm=a,this}clone(){return new t(this.expTerm,this.exponent,this.linearTerm,this.constantTerm)}copy(e){return this.expTerm=e.expTerm,this.exponent=e.exponent,this.linearTerm=e.linearTerm,this.constantTerm=e.constantTerm,this}},qd=["channel","altitude","height","densityScale","shapeAmount","shapeDetailAmount","weatherExponent","shapeAlteringBias","coverageFilterWidth","shadow","densityProfile"];function Jd(t,e){if(e!=null)for(let r of qd){let i=e[r];i!=null&&(t[r]instanceof $r?t[r].copy(i):t[r]=i)}}var oa=class Io{constructor(e){this.channel="r",this.altitude=0,this.height=0,this.densityScale=.2,this.shapeAmount=1,this.shapeDetailAmount=1,this.weatherExponent=1,this.shapeAlteringBias=.35,this.coverageFilterWidth=.6,this.densityProfile=new $r(0,0,.75,.25),this.shadow=!1,this.set(e)}set(e){return Jd(this,e),this}clone(){return new Io(this)}copy(e){return this.channel=e.channel,this.altitude=e.altitude,this.height=e.height,this.densityScale=e.densityScale,this.shapeAmount=e.shapeAmount,this.shapeDetailAmount=e.shapeDetailAmount,this.weatherExponent=e.weatherExponent,this.shapeAlteringBias=e.shapeAlteringBias,this.coverageFilterWidth=e.coverageFilterWidth,this.densityProfile.copy(e.densityProfile),this.shadow=e.shadow,this}};oa.DEFAULT=new oa;var xt=oa,pr=Array.from({length:8},()=>({value:0,flag:0})),qr=Array.from({length:3},()=>({min:0,max:0}));function $d(t,e){return t.value!==e.value?t.value-e.value:t.flag-e.flag}var ca=class _o extends Array{constructor(e){super(new xt(e?.[0]),new xt(e?.[1]),new xt(e?.[2]),new xt(e?.[3]))}set(e){return this[0].set(e?.[0]),this[1].set(e?.[1]),this[2].set(e?.[2]),this[3].set(e?.[3]),this}reset(){return this[0].copy(xt.DEFAULT),this[1].copy(xt.DEFAULT),this[2].copy(xt.DEFAULT),this[3].copy(xt.DEFAULT),this}clone(){return new _o(this)}copy(e){return this[0].copy(e[0]),this[1].copy(e[1]),this[2].copy(e[2]),this[3].copy(e[3]),this}get localWeatherChannels(){return this[0].channel+this[1].channel+this[2].channel+this[3].channel}packValues(e,r){return r.set(this[0][e],this[1][e],this[2][e],this[3][e])}packSums(e,r,i){return i.set(this[0][e]+this[0][r],this[1][e]+this[1][r],this[2][e]+this[2][r],this[3][e]+this[3][r])}packDensityProfiles(e,r){return r.set(this[0].densityProfile[e],this[1].densityProfile[e],this[2].densityProfile[e],this[3].densityProfile[e])}packIntervalHeights(e,r){for(let o=0;o<4;++o){let u=this[o],f=pr[o];f.value=u.altitude,f.flag=0,f=pr[o+4],f.value=u.altitude+u.height,f.flag=1}pr.sort($d);let i=0,a=0;for(let o=0;o<pr.length;++o){let{value:u,flag:f}=pr[o];if(a===0&&o>0){let p=qr[i++];p.min=pr[o-1].value,p.max=u}a+=f===0?1:-1}for(;i<3;++i){let o=qr[i];o.min=0,o.max=0}let s=qr[0];e.x=s.min,r.x=s.max,s=qr[1],e.y=s.min,r.y=s.max,s=qr[2],e.z=s.min,r.z=s.max}};ca.DEFAULT=new ca([{channel:"r",altitude:750,height:650,densityScale:.2,shapeAmount:1,shapeDetailAmount:1,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.6,shadow:!0},{channel:"g",altitude:1e3,height:1200,densityScale:.2,shapeAmount:1,shapeDetailAmount:1,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.6,shadow:!0},{channel:"b",altitude:7500,height:500,densityScale:.003,shapeAmount:.4,shapeDetailAmount:0,weatherExponent:1,shapeAlteringBias:.35,coverageFilterWidth:.5},{channel:"a"}]);var Mo=ca,ef=!0,xo="Invariant failed";function Pt(t,e){if(!t){if(ef)throw new Error(xo);var r=xo;throw new Error(r)}}var Xi=class t{constructor(e,r){this.near=[new le,new le,new le,new le],this.far=[new le,new le,new le,new le],e!=null&&r!=null&&this.setFromCamera(e,r)}clone(){return new t().copy(this)}copy(e){for(let r=0;r<4;++r)this.near[r].copy(e.near[r]),this.far[r].copy(e.far[r]);return this}setFromCamera(e,r){let i=e.isOrthographicCamera===!0,a=e.projectionMatrixInverse;this.near[0].set(1,1,-1),this.near[1].set(1,-1,-1),this.near[2].set(-1,-1,-1),this.near[3].set(-1,1,-1);for(let s=0;s<4;++s)this.near[s].applyMatrix4(a);this.far[0].set(1,1,1),this.far[1].set(1,-1,1),this.far[2].set(-1,-1,1),this.far[3].set(-1,1,1);for(let s=0;s<4;++s){let o=this.far[s];o.applyMatrix4(a);let u=Math.abs(o.z);i?o.z*=Math.min(r/u,1):o.multiplyScalar(Math.min(r/u,1))}return this}split(e,r=[]){for(let i=0;i<e.length;++i){let a=r[i]??=new t;if(i===0)for(let s=0;s<4;++s)a.near[s].copy(this.near[s]);else for(let s=0;s<4;++s)a.near[s].lerpVectors(this.near[s],this.far[s],e[i-1]);if(i===e.length-1)for(let s=0;s<4;++s)a.far[s].copy(this.far[s]);else for(let s=0;s<4;++s)a.far[s].lerpVectors(this.near[s],this.far[s],e[i])}return r.length=e.length,r}applyMatrix4(e){for(let r=0;r<4;++r)this.near[r].applyMatrix4(e),this.far[r].applyMatrix4(e);return this}},tf={uniform:(t,e,r,i,a=[])=>{for(let s=0;s<t;++s)a[s]=(e+(r-e)*(s+1)/t)/r;return a.length=t,a},logarithmic:(t,e,r,i,a=[])=>{for(let s=0;s<t;++s)a[s]=e*(r/e)**((s+1)/t)/r;return a.length=t,a},practical:(t,e,r,i=.5,a=[])=>{for(let s=0;s<t;++s){let o=(e+(r-e)*(s+1)/t)/r,u=e*(r/e)**((s+1)/t)/r;a[s]=Vn(o,u,i)}return a.length=t,a}};function rf(t,e,r,i,a,s=[]){return tf[t](e,r,i,a,s)}var Eo=new le,wo=new le,nf=new pe,yo=new pe,af=new Xi,sf=new Yd,of={maxFar:null,farScale:1,splitMode:"practical",splitLambda:.5,margin:0,fade:!0},la=class{constructor(e){this.cascades=[],this.mapSize=new ue,this.cameraFrustum=new Xi,this.frusta=[],this.splits=[],this._far=0;let{cascadeCount:r,mapSize:i,maxFar:a,farScale:s,splitMode:o,splitLambda:u,margin:f,fade:p}={...of,...e};this.cascadeCount=r,this.mapSize.copy(i),this.maxFar=a,this.farScale=s,this.splitMode=o,this.splitLambda=u,this.margin=f,this.fade=p}get cascadeCount(){return this.cascades.length}set cascadeCount(e){if(e!==this.cascadeCount){for(let r=0;r<e;++r)this.cascades[r]??={interval:new ue,matrix:new pe,inverseMatrix:new pe,projectionMatrix:new pe,inverseProjectionMatrix:new pe,viewMatrix:new pe,inverseViewMatrix:new pe};this.cascades.length=e}}get far(){return this._far}updateIntervals(e){let r=this.cascadeCount,i=this.splits,a=this.far;rf(this.splitMode,r,e.near,a,this.splitLambda,i),this.cameraFrustum.setFromCamera(e,a),this.cameraFrustum.split(i,this.frusta);let s=this.cascades;for(let o=0;o<r;++o)s[o].interval.set(i[o-1]??0,i[o]??0)}getFrustumRadius(e,r){let i=r.near,a=r.far,s=Math.max(a[0].distanceTo(a[2]),a[0].distanceTo(i[2]));if(this.fade){let o=e.near,u=this.far,f=a[0].z/(u-o);s+=.25*f**2*(u-o)}return s*.5}updateMatrices(e,r,i=1){let a=nf.lookAt(Eo.setScalar(0),wo.copy(r).multiplyScalar(-1),Ao.DEFAULT_UP),s=yo.multiplyMatrices(yo.copy(a).invert(),e.matrixWorld),o=this.frusta,u=this.cascades;Pt(o.length===u.length);let f=this.margin,p=this.mapSize;for(let x=0;x<o.length;++x){let y=o[x],U=u[x],V=this.getFrustumRadius(e,o[x]),se=-V,j=V,he=V,ge=-V;U.projectionMatrix.makeOrthographic(se,j,he,ge,-this.margin,V*2+this.margin);let{near:ie,far:X}=af.copy(y).applyMatrix4(s),de=sf.makeEmpty();for(let we=0;we<4;we++)de.expandByPoint(ie[we]),de.expandByPoint(X[we]);let fe=de.getCenter(Eo);fe.z=de.max.z+f;let Le=(j-se)/p.width,Xe=(he-ge)/p.height;fe.x=Math.round(fe.x/Le)*Le,fe.y=Math.round(fe.y/Xe)*Xe,fe.applyMatrix4(a);let Qe=wo.copy(r).multiplyScalar(i).add(fe);U.inverseViewMatrix.lookAt(fe,Qe,Ao.DEFAULT_UP).setPosition(Qe)}}update(e,r,i){this._far=this.maxFar!=null?Math.min(this.maxFar,e.far*this.farScale):e.far*this.farScale,this.updateIntervals(e),this.updateMatrices(e,r,i);let a=this.cascades,s=this.cascadeCount;for(let o=0;o<s;++o){let{matrix:u,inverseMatrix:f,projectionMatrix:p,inverseProjectionMatrix:x,viewMatrix:y,inverseViewMatrix:U}=a[o];x.copy(p).invert(),y.copy(U).invert(),u.copy(p).multiply(y),f.copy(U).multiply(x)}}},Co=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5],Po=Co.reduce((t,e,r)=>{let i=new ue;for(let a=0;a<16;++a)if(Co[a]===r){i.set((a%4+.5)/4,(Math.floor(a/4)+.5)/4);break}return[...t,i]},[]),cf={resolutionScale:1,lightShafts:!0,shapeDetail:!0,turbulence:!0,haze:!0,clouds:{multiScatteringOctaves:8,accurateSunSkyLight:!0,accuratePhaseFunction:!1,maxIterationCount:500,minStepSize:50,maxStepSize:1e3,maxRayDistance:2e5,perspectiveStepScale:1.01,minDensity:1e-5,minExtinction:1e-5,minTransmittance:.01,maxIterationCountToGround:3,maxIterationCountToSun:2,minSecondaryStepSize:100,secondaryStepScale:2,maxShadowLengthIterationCount:500,minShadowLengthStepSize:50,maxShadowLengthRayDistance:2e5},shadow:{cascadeCount:3,mapSize:new ue(512,512),maxIterationCount:50,minStepSize:100,maxStepSize:1e3,minDensity:1e-5,minExtinction:1e-5,minTransmittance:1e-4}},B=cf,lf={low:{...B,lightShafts:!1,shapeDetail:!1,turbulence:!1,clouds:{...B.clouds,accurateSunSkyLight:!1,maxIterationCount:200,minStepSize:100,maxRayDistance:1e5,minDensity:1e-4,minExtinction:1e-4,minTransmittance:.1,maxIterationCountToGround:0,maxIterationCountToSun:1},shadow:{...B.shadow,maxIterationCount:25,minDensity:1e-4,minExtinction:1e-4,minTransmittance:.01,cascadeCount:2,mapSize:new ue(256,256)}},medium:{...B,lightShafts:!1,turbulence:!1,clouds:{...B.clouds,minDensity:1e-4,minExtinction:1e-4,accurateSunSkyLight:!1,maxIterationCountToSun:2,maxIterationCountToGround:1},shadow:{...B.shadow,minDensity:1e-4,minExtinction:1e-4,mapSize:new ue(256,256)}},high:B,ultra:{...B,clouds:{...B.clouds,minStepSize:10},shadow:{...B.shadow,mapSize:new ue(1024,1024)}}},uf=`precision highp float;
precision highp sampler3D;
precision highp sampler2DArray;

#include <common>
#include <packing>

#include "core/depth"
#include "core/math"
#include "core/turbo"
#include "core/generators"
#include "core/raySphereIntersection"
#include "core/cascadedShadowMaps"
#include "core/interleavedGradientNoise"
#include "core/vogelDisk"

#include "atmosphere/bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "atmosphere/bruneton/common"
#include "atmosphere/bruneton/runtime"

#include "types"
#include "parameters"
#include "clouds"

#if !defined(RECIPROCAL_PI4)
#define RECIPROCAL_PI4 0.07957747154594767
#endif // !defined(RECIPROCAL_PI4)

uniform sampler2D depthBuffer;
uniform mat4 viewMatrix;
uniform mat4 reprojectionMatrix;
uniform mat4 viewReprojectionMatrix;
uniform float cameraNear;
uniform float cameraFar;
uniform float cameraHeight;
uniform vec2 temporalJitter;
uniform vec2 targetUvScale;
uniform float mipLevelScale;

// Scattering
const vec2 scatterAnisotropy = vec2(SCATTER_ANISOTROPY_1, SCATTER_ANISOTROPY_2);
const float scatterAnisotropyMix = SCATTER_ANISOTROPY_MIX;
uniform float skyLightScale;
uniform float groundBounceScale;
uniform float powderScale;
uniform float powderExponent;

// Primary raymarch
uniform int maxIterationCount;
uniform float minStepSize;
uniform float maxStepSize;
uniform float maxRayDistance;
uniform float perspectiveStepScale;

// Secondary raymarch
uniform int maxIterationCountToSun;
uniform int maxIterationCountToGround;
uniform float minSecondaryStepSize;
uniform float secondaryStepScale;

// Beer shadow map
uniform sampler2DArray shadowBuffer;
uniform vec2 shadowTexelSize;
uniform vec2 shadowIntervals[SHADOW_CASCADE_COUNT];
uniform mat4 shadowMatrices[SHADOW_CASCADE_COUNT];
uniform float shadowFar;
uniform float maxShadowFilterRadius;

// Shadow length
#ifdef SHADOW_LENGTH
uniform int maxShadowLengthIterationCount;
uniform float minShadowLengthStepSize;
uniform float maxShadowLengthRayDistance;
#endif // SHADOW_LENGTH

in vec2 vUv;
in vec3 vCameraPosition;
in vec3 vCameraDirection; // Direction to the center of screen
in vec3 vRayDirection; // Direction to the texel
in vec3 vViewPosition;
in GroundIrradiance vGroundIrradiance;
in CloudsIrradiance vCloudsIrradiance;

layout(location = 0) out vec4 outputColor;
layout(location = 1) out vec3 outputDepthVelocity;
#ifdef SHADOW_LENGTH
layout(location = 2) out float outputShadowLength;
#endif // SHADOW_LENGTH

float getViewZ(const float depth) {
  #ifdef PERSPECTIVE_CAMERA
  return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
  #else // PERSPECTIVE_CAMERA
  return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
  #endif // PERSPECTIVE_CAMERA
}

vec3 ecefToWorld(const vec3 positionECEF) {
  return (ecefToWorldMatrix * vec4(positionECEF - altitudeCorrection, 1.0)).xyz;
}

vec2 getShadowUv(const vec3 worldPosition, const int cascadeIndex) {
  vec4 clip = shadowMatrices[cascadeIndex] * vec4(worldPosition, 1.0);
  clip /= clip.w;
  return clip.xy * 0.5 + 0.5;
}

float getDistanceToShadowTop(const vec3 rayPosition) {
  // Distance to the top of the shadows along the sun direction, which matches
  // the ray origin of BSM.
  return raySphereSecondIntersection(
    rayPosition,
    sunDirection,
    vec3(0.0),
    bottomRadius + shadowTopHeight
  );
}

#ifdef DEBUG_SHOW_CASCADES

const vec3 cascadeColors[4] = vec3[4](
  vec3(1.0, 0.0, 0.0),
  vec3(0.0, 1.0, 0.0),
  vec3(0.0, 0.0, 1.0),
  vec3(1.0, 1.0, 0.0)
);

vec3 getCascadeColor(const vec3 rayPosition) {
  vec3 worldPosition = ecefToWorld(rayPosition);
  int cascadeIndex = getCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar
  );
  vec2 uv = getShadowUv(worldPosition, cascadeIndex);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    return vec3(1.0);
  }
  return cascadeColors[cascadeIndex];
}

vec3 getFadedCascadeColor(const vec3 rayPosition, const float jitter) {
  vec3 worldPosition = ecefToWorld(rayPosition);
  int cascadeIndex = getFadedCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar,
    jitter
  );
  return cascadeIndex >= 0
    ? cascadeColors[cascadeIndex]
    : vec3(1.0);
}

#endif // DEBUG_SHOW_CASCADES

float readShadowOpticalDepth(
  const vec2 uv,
  const float distanceToTop,
  const float distanceOffset,
  const int cascadeIndex
) {
  // r: frontDepth, g: meanExtinction, b: maxOpticalDepth, a: maxOpticalDepthTail
  // Also see the discussion here: https://x.com/shotamatsuda/status/1885322308908442106
  vec4 shadow = texture(shadowBuffer, vec3(uv, float(cascadeIndex)));
  float distanceToFront = max(0.0, distanceToTop - distanceOffset - shadow.r);
  return min(shadow.b + shadow.a, shadow.g * distanceToFront);
}

float sampleShadowOpticalDepthPCF(
  const vec3 worldPosition,
  const float distanceToTop,
  const float distanceOffset,
  const float radius,
  const int cascadeIndex
) {
  vec2 uv = getShadowUv(worldPosition, cascadeIndex);
  if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
    return 0.0;
  }
  if (radius < 0.1) {
    return readShadowOpticalDepth(uv, distanceToTop, distanceOffset, cascadeIndex);
  }
  float sum = 0.0;
  vec2 offset;
  #pragma unroll_loop_start
  for (int i = 0; i < 16; ++i) {
    #if UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
    offset = vogelDisk(
      UNROLLED_LOOP_INDEX,
      SHADOW_SAMPLE_COUNT,
      interleavedGradientNoise(gl_FragCoord.xy + temporalJitter * resolution) * PI2
    );
    sum += readShadowOpticalDepth(
      uv + offset * radius * shadowTexelSize,
      distanceToTop,
      distanceOffset,
      cascadeIndex
    );
    #endif // UNROLLED_LOOP_INDEX < SHADOW_SAMPLE_COUNT
  }
  #pragma unroll_loop_end
  return sum / float(SHADOW_SAMPLE_COUNT);
}

float sampleShadowOpticalDepth(
  const vec3 rayPosition,
  const float distanceOffset,
  const float radius,
  const float jitter
) {
  float distanceToTop = getDistanceToShadowTop(rayPosition);
  if (distanceToTop <= 0.0) {
    return 0.0;
  }
  vec3 worldPosition = ecefToWorld(rayPosition);
  int cascadeIndex = getFadedCascadeIndex(
    viewMatrix,
    worldPosition,
    shadowIntervals,
    cameraNear,
    shadowFar,
    jitter
  );
  return cascadeIndex >= 0
    ? sampleShadowOpticalDepthPCF(
      worldPosition,
      distanceToTop,
      distanceOffset,
      radius,
      cascadeIndex
    )
    : 0.0;
}

#ifdef DEBUG_SHOW_SHADOW_MAP
vec4 getCascadedShadowMaps(vec2 uv) {
  vec4 coord = vec4(vUv, vUv - 0.5) * 2.0;
  vec4 shadow = vec4(0.0);
  if (uv.y > 0.5) {
    if (uv.x < 0.5) {
      shadow = texture(shadowBuffer, vec3(coord.xw, 0.0));
    } else {
      #if SHADOW_CASCADE_COUNT > 1
      shadow = texture(shadowBuffer, vec3(coord.zw, 1.0));
      #endif // SHADOW_CASCADE_COUNT > 1
    }
  } else {
    if (uv.x < 0.5) {
      #if SHADOW_CASCADE_COUNT > 2
      shadow = texture(shadowBuffer, vec3(coord.xy, 2.0));
      #endif // SHADOW_CASCADE_COUNT > 2
    } else {
      #if SHADOW_CASCADE_COUNT > 3
      shadow = texture(shadowBuffer, vec3(coord.zy, 3.0));
      #endif // SHADOW_CASCADE_COUNT > 3
    }
  }

  #if !defined(DEBUG_SHOW_SHADOW_MAP_TYPE)
  #define DEBUG_SHOW_SHADOW_MAP_TYPE 0
  #endif // !defined(DEBUG_SHOW_SHADOW_MAP_TYPE

  const float frontDepthScale = 1e-5;
  const float meanExtinctionScale = 10.0;
  const float maxOpticalDepthScale = 0.01;
  vec3 color;
  #if DEBUG_SHOW_SHADOW_MAP_TYPE == 1
  color = vec3(shadow.r * frontDepthScale);
  #elif DEBUG_SHOW_SHADOW_MAP_TYPE == 2
  color = vec3(shadow.g * meanExtinctionScale);
  #elif DEBUG_SHOW_SHADOW_MAP_TYPE == 3
  color = vec3((shadow.b + shadow.a) * maxOpticalDepthScale);
  #else // DEBUG_SHOW_SHADOW_MAP_TYPE
  color =
    (shadow.rgb + vec3(0.0, 0.0, shadow.a)) *
    vec3(frontDepthScale, meanExtinctionScale, maxOpticalDepthScale);
  #endif // DEBUG_SHOW_SHADOW_MAP_TYPE
  return vec4(color, 1.0);
}
#endif // DEBUG_SHOW_SHADOW_MAP

vec2 henyeyGreenstein(const vec2 g, const float cosTheta) {
  vec2 g2 = g * g;
  // prettier-ignore
  return RECIPROCAL_PI4 *
    ((1.0 - g2) / max(vec2(1e-7), pow(1.0 + g2 - 2.0 * g * cosTheta, vec2(1.5))));
}

#ifdef ACCURATE_PHASE_FUNCTION

float draine(float u, float g, float a) {
  float g2 = g * g;
  // prettier-ignore
  return (1.0 - g2) *
    (1.0 + a * u * u) /
    (4.0 * (1.0 + a * (1.0 + 2.0 * g2) / 3.0) * PI * pow(1.0 + g2 - 2.0 * g * u, 1.5));
}

// Numerically-fitted large particles (d=10) phase function It won't be
// plausible without a more precise multiple scattering.
// Reference: https://research.nvidia.com/labs/rtr/approximate-mie/
float phaseFunction(const float cosTheta, const float attenuation) {
  const float gHG = 0.988176691700256; // exp(-0.0990567/(d-1.67154))
  const float gD = 0.5556712547839497; // exp(-2.20679/(d+3.91029) - 0.428934)
  const float alpha = 21.995520856274638; // exp(3.62489 - 8.29288/(d+5.52825))
  const float weight = 0.4819554318404214; // exp(-0.599085/(d-0.641583)-0.665888)
  return mix(
    henyeyGreenstein(vec2(gHG) * attenuation, cosTheta).x,
    draine(cosTheta, gD * attenuation, alpha),
    weight
  );
}

#else // ACCURATE_PHASE_FUNCTION

float phaseFunction(const float cosTheta, const float attenuation) {
  const vec2 g = scatterAnisotropy;
  const vec2 weights = vec2(1.0 - scatterAnisotropyMix, scatterAnisotropyMix);
  // A similar approximation is described in the Frostbite's paper, where phase
  // angle is attenuated instead of anisotropy.
  return dot(henyeyGreenstein(g * attenuation, cosTheta), weights);
}

#endif // ACCURATE_PHASE_FUNCTION

float phaseFunction(const float cosTheta) {
  return phaseFunction(cosTheta, 1.0);
}

float marchOpticalDepth(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const int maxIterationCount,
  const float mipLevel,
  const float jitter,
  out float rayDistance
) {
  int iterationCount = int(
    max(0.0, remap(mipLevel, 0.0, 1.0, float(maxIterationCount + 1), 1.0) - jitter)
  );
  if (iterationCount == 0) {
    // Fudge factor to approximate the mean optical depth.
    // TODO: Remove it.
    return 0.5;
  }
  float stepSize = minSecondaryStepSize / float(iterationCount);
  float nextDistance = stepSize * jitter;
  float opticalDepth = 0.0;
  for (int i = 0; i < iterationCount; ++i) {
    rayDistance = nextDistance;
    vec3 position = rayDistance * rayDirection + rayOrigin;
    vec2 uv = getGlobeUv(position);
    float height = length(position) - bottomRadius;
    WeatherSample weather = sampleWeather(uv, height, mipLevel);
    MediaSample media = sampleMedia(weather, position, uv, mipLevel, jitter);
    opticalDepth += media.extinction * stepSize;
    nextDistance += stepSize;
    stepSize *= secondaryStepScale;
  }
  return opticalDepth;
}

float marchOpticalDepth(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const int maxIterationCount,
  const float mipLevel,
  const float jitter
) {
  float rayDistance;
  return marchOpticalDepth(
    rayOrigin,
    rayDirection,
    maxIterationCount,
    mipLevel,
    jitter,
    rayDistance
  );
}

float approximateMultipleScattering(const float opticalDepth, const float cosTheta) {
  // Multiple scattering approximation
  // See: https://fpsunflower.github.io/ckulla/data/oz_volumes.pdf
  // a: attenuation, b: contribution, c: phase attenuation
  vec3 coeffs = vec3(1.0); // [a, b, c]
  const vec3 attenuation = vec3(0.5, 0.5, 0.5); // Should satisfy a <= b
  float scattering = 0.0;
  float beerLambert;
  #pragma unroll_loop_start
  for (int i = 0; i < 12; ++i) {
    #if UNROLLED_LOOP_INDEX < MULTI_SCATTERING_OCTAVES
    beerLambert = exp(-opticalDepth * coeffs.y);
    scattering += coeffs.x * beerLambert * phaseFunction(cosTheta, coeffs.z);
    coeffs *= attenuation;
    #endif // UNROLLED_LOOP_INDEX < MULTI_SCATTERING_OCTAVES
  }
  #pragma unroll_loop_end
  return scattering;
}

// TODO: Construct spherical harmonics of degree 2 using 2 sample points
// positioned near the horizon occlusion points on the sun direction plane.
vec3 getGroundSunSkyIrradiance(
  const vec3 position,
  const vec3 surfaceNormal,
  const float height,
  out vec3 skyIrradiance
) {
  #ifdef ACCURATE_SUN_SKY_LIGHT
  return GetSunAndSkyIrradiance(
    (position - surfaceNormal * height) * METER_TO_LENGTH_UNIT,
    surfaceNormal,
    sunDirection,
    skyIrradiance
  );
  #else // ACCURATE_SUN_SKY_LIGHT
  skyIrradiance = vGroundIrradiance.sky;
  return vGroundIrradiance.sun;
  #endif // ACCURATE_SUN_SKY_LIGHT
}

vec3 getCloudsSunSkyIrradiance(const vec3 position, const float height, out vec3 skyIrradiance) {
  #ifdef ACCURATE_SUN_SKY_LIGHT
  return GetSunAndSkyScalarIrradiance(position * METER_TO_LENGTH_UNIT, sunDirection, skyIrradiance);
  #else // ACCURATE_SUN_SKY_LIGHT
  float alpha = remapClamped(height, minHeight, maxHeight);
  skyIrradiance = mix(vCloudsIrradiance.minSky, vCloudsIrradiance.maxSky, alpha);
  return mix(vCloudsIrradiance.minSun, vCloudsIrradiance.maxSun, alpha);
  #endif // ACCURATE_SUN_SKY_LIGHT
}

#ifdef GROUND_BOUNCE
vec3 approximateRadianceFromGround(
  const vec3 position,
  const vec3 surfaceNormal,
  const float height,
  const float mipLevel,
  const float jitter
) {
  float opticalDepthToGround = marchOpticalDepth(
    position,
    -surfaceNormal,
    maxIterationCountToGround,
    mipLevel,
    jitter
  );
  vec3 skyIrradiance;
  vec3 sunIrradiance = getGroundSunSkyIrradiance(position, surfaceNormal, height, skyIrradiance);
  const float groundAlbedo = 0.3;
  vec3 groundIrradiance = skyIrradiance + (1.0 - coverage) * sunIrradiance;
  vec3 bouncedRadiance = groundAlbedo * RECIPROCAL_PI * groundIrradiance;
  return bouncedRadiance * exp(-opticalDepthToGround);
}
#endif // GROUND_BOUNCE

vec4 marchClouds(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const vec2 rayNearFar,
  const float cosTheta,
  const float jitter,
  const float rayStartTexelsPerPixel,
  out float frontDepth,
  out ivec3 sampleCount
) {
  vec3 radianceIntegral = vec3(0.0);
  float transmittanceIntegral = 1.0;
  float weightedDistanceSum = 0.0;
  float transmittanceSum = 0.0;

  float maxRayDistance = rayNearFar.y - rayNearFar.x;
  float stepSize = minStepSize + (perspectiveStepScale - 1.0) * rayNearFar.x;
  // I don't understand why spatial aliasing remains unless doubling the jitter.
  float rayDistance = stepSize * jitter * 2.0;

  for (int i = 0; i < maxIterationCount; ++i) {
    if (rayDistance > maxRayDistance) {
      break; // Termination
    }

    vec3 position = rayDistance * rayDirection + rayOrigin;
    float height = length(position) - bottomRadius;
    float mipLevel = log2(max(1.0, rayStartTexelsPerPixel + rayDistance * 1e-5));

    #if !defined(DEBUG_MARCH_INTERVALS)
    if (insideLayerIntervals(height)) {
      stepSize *= perspectiveStepScale;
      rayDistance += mix(stepSize, maxStepSize, min(1.0, mipLevel));
      continue;
    }
    #endif // !defined(DEBUG_MARCH_INTERVALS)

    // Sample rough weather.
    vec2 uv = getGlobeUv(position);
    WeatherSample weather = sampleWeather(uv, height, mipLevel);

    #ifdef DEBUG_SHOW_SAMPLE_COUNT
    ++sampleCount.x;
    #endif // DEBUG_SHOW_SAMPLE_COUNT

    if (!any(greaterThan(weather.density, vec4(minDensity)))) {
      // Step longer in empty space.
      // TODO: This produces banding artifacts.
      // Possible improvement: Binary search refinement
      stepSize *= perspectiveStepScale;
      rayDistance += mix(stepSize, maxStepSize, min(1.0, mipLevel));
      continue;
    }

    // Sample detailed participating media.
    MediaSample media = sampleMedia(weather, position, uv, mipLevel, jitter, sampleCount);

    if (media.extinction > minExtinction) {
      vec3 skyIrradiance;
      vec3 sunIrradiance = getCloudsSunSkyIrradiance(position, height, skyIrradiance);
      vec3 surfaceNormal = normalize(position);

      // March optical depth to the sun for finer details, which BSM lacks.
      float sunRayDistance = 0.0;
      float opticalDepth = marchOpticalDepth(
        position,
        sunDirection,
        maxIterationCountToSun,
        mipLevel,
        jitter,
        sunRayDistance
      );

      if (height < shadowTopHeight) {
        // Obtain the optical depth from BSM at the ray position.
        opticalDepth += sampleShadowOpticalDepth(
          position,
          // Take account of only positions further than the marched ray
          // distance.
          sunRayDistance,
          // Apply PCF only when the sun is close to the horizon.
          maxShadowFilterRadius * remapClamped(dot(sunDirection, surfaceNormal), 0.1, 0.0),
          jitter
        );
      }

      vec3 radiance = sunIrradiance * approximateMultipleScattering(opticalDepth, cosTheta);

      #ifdef GROUND_BOUNCE
      // Fudge factor for the irradiance from ground.
      if (height < shadowTopHeight && mipLevel < 0.5) {
        vec3 groundRadiance = approximateRadianceFromGround(
          position,
          surfaceNormal,
          height,
          mipLevel,
          jitter
        );
        radiance += groundRadiance * RECIPROCAL_PI4 * groundBounceScale;
      }
      #endif // GROUND_BOUNCE

      // Crude approximation of sky gradient. Better than none in the shadows.
      float skyGradient = dot(weather.heightFraction * 0.5 + 0.5, media.weight);
      radiance += skyIrradiance * RECIPROCAL_PI4 * skyGradient * skyLightScale;

      // Finally multiply by scattering.
      radiance *= media.scattering;

      #ifdef POWDER
      radiance *= 1.0 - powderScale * exp(-media.extinction * powderExponent);
      #endif // POWDER

      #ifdef DEBUG_SHOW_CASCADES
      if (height < shadowTopHeight) {
        radiance = 1e-3 * getFadedCascadeColor(position, jitter);
      }
      #endif // DEBUG_SHOW_CASCADES

      // Energy-conserving analytical integration of scattered light
      // See 5.6.3 in https://media.contentapi.ea.com/content/dam/eacom/frostbite/files/s2016-pbs-frostbite-sky-clouds-new.pdf
      float transmittance = exp(-media.extinction * stepSize);
      float clampedExtinction = max(media.extinction, 1e-7);
      vec3 scatteringIntegral = (radiance - radiance * transmittance) / clampedExtinction;
      radianceIntegral += transmittanceIntegral * scatteringIntegral;
      transmittanceIntegral *= transmittance;

      // Aerial perspective affecting clouds
      // See 5.9.1 in https://media.contentapi.ea.com/content/dam/eacom/frostbite/files/s2016-pbs-frostbite-sky-clouds-new.pdf
      weightedDistanceSum += rayDistance * transmittanceIntegral;
      transmittanceSum += transmittanceIntegral;
    }

    if (transmittanceIntegral <= minTransmittance) {
      break; // Early termination
    }

    // Take a shorter step because we've already hit the clouds.
    stepSize *= perspectiveStepScale;
    rayDistance += stepSize;
  }

  // The final product of 5.9.1 and we'll evaluate this in aerial perspective.
  frontDepth = transmittanceSum > 0.0 ? weightedDistanceSum / transmittanceSum : -1.0;

  return vec4(radianceIntegral, remapClamped(transmittanceIntegral, 1.0, minTransmittance));
}

#ifdef SHADOW_LENGTH

float marchShadowLength(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const vec2 rayNearFar,
  const float jitter
) {
  float shadowLength = 0.0;
  float maxRayDistance = rayNearFar.y - rayNearFar.x;
  float stepSize = minShadowLengthStepSize;
  float rayDistance = stepSize * jitter;
  const float attenuationFactor = 1.0 - 5e-4;
  float attenuation = 1.0;

  // TODO: This march is closed, and sample resolution can be much lower.
  // Refining the termination by binary search will make it much more efficient.
  for (int i = 0; i < maxShadowLengthIterationCount; ++i) {
    if (rayDistance > maxRayDistance) {
      break; // Termination
    }
    vec3 position = rayDistance * rayDirection + rayOrigin;
    float opticalDepth = sampleShadowOpticalDepth(position, 0.0, 0.0, jitter);
    shadowLength += (1.0 - exp(-opticalDepth)) * stepSize * attenuation;
    stepSize *= perspectiveStepScale;
    rayDistance += stepSize;
  }
  return shadowLength;
}

#endif // SHADOW_LENGTH

#ifdef HAZE

vec4 approximateHaze(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const float maxRayDistance,
  const float cosTheta,
  const float shadowLength
) {
  float modulation = remapClamped(coverage, 0.2, 0.4);
  if (cameraHeight * modulation < 0.0) {
    return vec4(0.0);
  }
  float density = modulation * hazeDensityScale * exp(-cameraHeight * hazeExponent);
  if (density < 1e-7) {
    return vec4(0.0); // Prevent artifact in views from space
  }

  // Blend two normals by the difference in angle so that normal near the
  // ground becomes that of the origin, and in the sky that of the horizon.
  vec3 normalAtOrigin = normalize(rayOrigin);
  vec3 normalAtHorizon = (rayOrigin - dot(rayOrigin, rayDirection) * rayDirection) / bottomRadius;
  float alpha = remapClamped(dot(normalAtOrigin, normalAtHorizon), 0.9, 1.0);
  vec3 normal = mix(normalAtOrigin, normalAtHorizon, alpha);

  // Analytical optical depth where density exponentially decreases with height.
  // Based on: https://iquilezles.org/articles/fog/
  float angle = max(dot(normal, rayDirection), 1e-5);
  float exponent = angle * hazeExponent;
  float linearTerm = density / hazeExponent / angle;

  // Derive the optical depths separately for with and without shadow length.
  float expTerm = 1.0 - exp(-maxRayDistance * exponent);
  float shadowExpTerm = 1.0 - exp(-min(maxRayDistance, shadowLength) * exponent);
  float opticalDepth = expTerm * linearTerm;
  float shadowOpticalDepth = max((expTerm - shadowExpTerm) * linearTerm, 0.0);
  float transmittance = saturate(1.0 - exp(-opticalDepth));
  float shadowTransmittance = saturate(1.0 - exp(-shadowOpticalDepth));

  vec3 skyIrradiance = vGroundIrradiance.sky;
  vec3 sunIrradiance = vGroundIrradiance.sun;
  vec3 inscatter = sunIrradiance * phaseFunction(cosTheta) * shadowTransmittance;
  inscatter += skyIrradiance * RECIPROCAL_PI4 * skyLightScale * transmittance;
  inscatter *= hazeScatteringCoefficient / (hazeAbsorptionCoefficient + hazeScatteringCoefficient);
  return vec4(inscatter, transmittance);
}

#endif // HAZE

void applyAerialPerspective(
  const vec3 cameraPosition,
  const vec3 frontPosition,
  const float shadowLength,
  inout vec4 color
) {
  vec3 transmittance;
  vec3 inscatter = GetSkyRadianceToPoint(
    cameraPosition * METER_TO_LENGTH_UNIT,
    frontPosition * METER_TO_LENGTH_UNIT,
    shadowLength * METER_TO_LENGTH_UNIT,
    sunDirection,
    transmittance
  );
  color.rgb = color.rgb * transmittance + inscatter * color.a;
}

bool rayIntersectsGround(const vec3 cameraPosition, const vec3 rayDirection) {
  float r = length(cameraPosition);
  float mu = dot(cameraPosition, rayDirection) / r;
  return mu < 0.0 && r * r * (mu * mu - 1.0) + bottomRadius * bottomRadius >= 0.0;
}

struct IntersectionResult {
  bool ground;
  vec4 first;
  vec4 second;
};

IntersectionResult getIntersections(const vec3 cameraPosition, const vec3 rayDirection) {
  IntersectionResult intersections;
  intersections.ground = rayIntersectsGround(cameraPosition, rayDirection);
  raySphereIntersections(
    cameraPosition,
    rayDirection,
    bottomRadius + vec4(0.0, minHeight, maxHeight, shadowTopHeight),
    intersections.first,
    intersections.second
  );
  return intersections;
}

vec2 getRayNearFar(const IntersectionResult intersections) {
  vec2 nearFar;
  if (cameraHeight < minHeight) {
    // View below the clouds
    if (intersections.ground) {
      nearFar = vec2(-1.0); // No clouds to the ground
    } else {
      nearFar = vec2(intersections.second.y, intersections.second.z);
      nearFar.y = min(nearFar.y, maxRayDistance);
    }
  } else if (cameraHeight < maxHeight) {
    // View inside the total cloud layer
    if (intersections.ground) {
      nearFar = vec2(cameraNear, intersections.first.y);
    } else {
      nearFar = vec2(cameraNear, intersections.second.z);
    }
  } else {
    // View above the clouds
    nearFar = vec2(intersections.first.z, intersections.second.z);
    if (intersections.ground) {
      // Clamp the ray at the min height.
      nearFar.y = intersections.first.y;
    }
  }
  return nearFar;
}

#ifdef SHADOW_LENGTH
vec2 getShadowRayNearFar(const IntersectionResult intersections) {
  vec2 nearFar;
  if (cameraHeight < shadowTopHeight) {
    if (intersections.ground) {
      nearFar = vec2(cameraNear, intersections.first.x);
    } else {
      nearFar = vec2(cameraNear, intersections.second.w);
    }
  } else {
    nearFar = vec2(intersections.first.w, intersections.second.w);
    if (intersections.ground) {
      // Clamp the ray at the ground.
      nearFar.y = intersections.first.x;
    }
  }
  nearFar.y = min(nearFar.y, maxShadowLengthRayDistance);
  return nearFar;
}
#endif // SHADOW_LENGTH

#ifdef HAZE
vec2 getHazeRayNearFar(const IntersectionResult intersections) {
  vec2 nearFar;
  if (cameraHeight < maxHeight) {
    if (intersections.ground) {
      nearFar = vec2(cameraNear, intersections.first.x);
    } else {
      nearFar = vec2(cameraNear, intersections.second.z);
    }
  } else {
    nearFar = vec2(cameraNear, intersections.second.z);
    if (intersections.ground) {
      // Clamp the ray at the ground.
      nearFar.y = intersections.first.x;
    }
  }
  return nearFar;
}
#endif // HAZE

float getRayDistanceToScene(const vec3 rayDirection, out float viewZ) {
  float depth = readDepthValue(depthBuffer, vUv * targetUvScale + temporalJitter);
  if (depth < 1.0 - 1e-7) {
    depth = reverseLogDepth(depth, cameraNear, cameraFar);
    viewZ = getViewZ(depth);
    return -viewZ / dot(rayDirection, vCameraDirection);
  }
  viewZ = 0.0;
  return 0.0;
}

void main() {
  #ifdef DEBUG_SHOW_SHADOW_MAP
  outputColor = getCascadedShadowMaps(vUv);
  outputDepthVelocity = vec3(0.0);
  #ifdef SHADOW_LENGTH
  outputShadowLength = 0.0;
  #endif // SHADOW_LENGTH
  return;
  #endif // DEBUG_SHOW_SHADOW_MAP

  vec3 cameraPosition = vCameraPosition + altitudeCorrection;
  vec3 rayDirection = normalize(vRayDirection);
  float cosTheta = dot(sunDirection, rayDirection);

  IntersectionResult intersections = getIntersections(cameraPosition, rayDirection);
  vec2 rayNearFar = getRayNearFar(intersections);
  #ifdef SHADOW_LENGTH
  vec2 shadowRayNearFar = getShadowRayNearFar(intersections);
  #endif // SHADOW_LENGTH
  #ifdef HAZE
  vec2 hazeRayNearFar = getHazeRayNearFar(intersections);
  #endif // HAZE

  float sceneViewZ;
  float rayDistanceToScene = getRayDistanceToScene(rayDirection, sceneViewZ);
  if (rayDistanceToScene > 0.0) {
    rayNearFar.y = min(rayNearFar.y, rayDistanceToScene);
    #ifdef SHADOW_LENGTH
    shadowRayNearFar.y = min(shadowRayNearFar.y, rayDistanceToScene);
    #endif // SHADOW_LENGTH
    #ifdef HAZE
    hazeRayNearFar.y = min(hazeRayNearFar.y, rayDistanceToScene);
    #endif // HAZE
  }

  bool intersectsGround = any(lessThan(rayNearFar, vec2(0.0)));
  bool intersectsScene = rayNearFar.y < rayNearFar.x;

  float stbn = getSTBN();

  vec4 color = vec4(0.0);
  float frontDepth = rayNearFar.y;
  vec3 depthVelocity = vec3(0.0);
  float shadowLength = 0.0;
  bool hitClouds = false;

  if (!intersectsGround && !intersectsScene) {
    vec3 rayOrigin = rayNearFar.x * rayDirection + cameraPosition;

    vec2 globeUv = getGlobeUv(rayOrigin);
    #ifdef DEBUG_SHOW_UV
    outputColor = vec4(vec3(checker(globeUv, localWeatherRepeat + localWeatherOffset)), 1.0);
    outputDepthVelocity = vec3(0.0);
    #ifdef SHADOW_LENGTH
    outputShadowLength = 0.0;
    #endif // SHADOW_LENGTH
    return;
    #endif // DEBUG_SHOW_UV

    float mipLevel = getMipLevel(globeUv * localWeatherRepeat) * mipLevelScale;
    mipLevel = mix(0.0, mipLevel, min(1.0, 0.2 * cameraHeight / maxHeight));

    float marchedFrontDepth;
    ivec3 sampleCount = ivec3(0);
    color = marchClouds(
      rayOrigin,
      rayDirection,
      rayNearFar,
      cosTheta,
      stbn,
      pow(2.0, mipLevel),
      marchedFrontDepth,
      sampleCount
    );

    #ifdef DEBUG_SHOW_SAMPLE_COUNT
    outputColor = vec4(vec3(sampleCount) / vec3(500.0, 5.0, 5.0), 1.0);
    outputDepthVelocity = vec3(0.0);
    #ifdef SHADOW_LENGTH
    outputShadowLength = 0.0;
    #endif // SHADOW_LENGTH
    return;
    #endif // DEBUG_SHOW_SAMPLE_COUNT

    // Front depth will be -1.0 when no samples are accumulated.
    hitClouds = marchedFrontDepth >= 0.0;
    if (hitClouds) {
      frontDepth = rayNearFar.x + marchedFrontDepth;

      #ifdef SHADOW_LENGTH
      // Clamp the shadow length ray at the clouds.
      shadowRayNearFar.y = mix(
        shadowRayNearFar.y,
        min(frontDepth, shadowRayNearFar.y),
        color.a // Interpolate by the alpha for smoother edges.
      );

      // Shadow length must be computed before applying aerial perspective.
      if (all(greaterThanEqual(shadowRayNearFar, vec2(0.0)))) {
        shadowLength = marchShadowLength(
          shadowRayNearFar.x * rayDirection + cameraPosition,
          rayDirection,
          shadowRayNearFar,
          stbn
        );
      }
      #endif // SHADOW_LENGTH

      #ifdef HAZE
      // Clamp the haze ray at the clouds.
      hazeRayNearFar.y = mix(
        hazeRayNearFar.y,
        min(frontDepth, hazeRayNearFar.y),
        color.a // Interpolate by the alpha for smoother edges.
      );
      #endif // HAZE

      // Apply aerial perspective.
      vec3 frontPosition = cameraPosition + frontDepth * rayDirection;
      applyAerialPerspective(cameraPosition, frontPosition, shadowLength, color);

      // Velocity for temporal resolution.
      vec3 frontPositionWorld = ecefToWorld(frontPosition);
      vec4 prevClip = reprojectionMatrix * vec4(frontPositionWorld, 1.0);
      prevClip /= prevClip.w;
      vec2 prevUv = prevClip.xy * 0.5 + 0.5;
      vec2 velocity = vUv - prevUv;
      depthVelocity = vec3(frontDepth, velocity);
    }
  }

  if (!hitClouds) {
    #ifdef SHADOW_LENGTH
    if (all(greaterThanEqual(shadowRayNearFar, vec2(0.0)))) {
      shadowLength = marchShadowLength(
        shadowRayNearFar.x * rayDirection + cameraPosition,
        rayDirection,
        shadowRayNearFar,
        stbn
      );
    }
    #endif // SHADOW_LENGTH

    // Velocity for temporal resolution. Here reproject in the view space for
    // greatly reducing the precision errors.
    frontDepth = sceneViewZ < 0.0 ? -sceneViewZ : cameraFar;
    vec3 frontView = vViewPosition * frontDepth;
    vec4 prevClip = viewReprojectionMatrix * vec4(frontView, 1.0);
    prevClip /= prevClip.w;
    vec2 prevUv = prevClip.xy * 0.5 + 0.5;
    vec2 velocity = vUv - prevUv;
    depthVelocity = vec3(frontDepth, velocity);
  }

  #ifdef DEBUG_SHOW_FRONT_DEPTH
  outputColor = vec4(turbo(frontDepth / maxRayDistance), 1.0);
  outputDepthVelocity = vec3(0.0);
  #ifdef SHADOW_LENGTH
  outputShadowLength = 0.0;
  #endif // SHADOW_LENGTH
  return;
  #endif // DEBUG_SHOW_FRONT_DEPTH

  #ifdef HAZE
  vec4 haze = approximateHaze(
    cameraNear * rayDirection + cameraPosition,
    rayDirection,
    hazeRayNearFar.y - hazeRayNearFar.x,
    cosTheta,
    shadowLength
  );
  color.rgb = mix(color.rgb, haze.rgb, haze.a);
  color.a = color.a * (1.0 - haze.a) + haze.a;
  #endif // HAZE

  outputColor = color;
  outputDepthVelocity = depthVelocity;
  #ifdef SHADOW_LENGTH
  outputShadowLength = shadowLength * METER_TO_LENGTH_UNIT;
  #endif // SHADOW_LENGTH
}
`,No=`float getSTBN() {
  ivec3 size = textureSize(stbnTexture, 0);
  vec3 scale = 1.0 / vec3(size);
  return texture(stbnTexture, vec3(gl_FragCoord.xy, float(frame % size.z)) * scale).r;
}

// Straightforward spherical mapping
vec2 getSphericalUv(const vec3 position) {
  vec2 st = normalize(position.yx);
  float phi = atan(st.x, st.y);
  float theta = asin(normalize(position).z);
  return vec2(phi * RECIPROCAL_PI2 + 0.5, theta * RECIPROCAL_PI + 0.5);
}

vec2 getCubeSphereUv(const vec3 position) {
  // Cube-sphere relaxation by: http://mathproofs.blogspot.com/2005/07/mapping-cube-to-sphere.html
  // TODO: Tile and fix seams.
  // Possible improvements:
  // https://iquilezles.org/articles/texturerepetition/
  // https://gamedev.stackexchange.com/questions/184388/fragment-shader-map-dot-texture-repeatedly-over-the-sphere
  // https://github.com/mmikk/hextile-demo

  vec3 n = normalize(position);
  vec3 f = abs(n);
  vec3 c = n / max(f.x, max(f.y, f.z));
  vec2 m;
  if (all(greaterThan(f.yy, f.xz))) {
    m = c.y > 0.0 ? vec2(-n.x, n.z) : n.xz;
  } else if (all(greaterThan(f.xx, f.yz))) {
    m = c.x > 0.0 ? n.yz : vec2(-n.y, n.z);
  } else {
    m = c.z > 0.0 ? n.xy : vec2(n.x, -n.y);
  }

  vec2 m2 = m * m;
  float q = dot(m2.xy, vec2(-2.0, 2.0)) - 3.0;
  float q2 = q * q;
  vec2 uv;
  uv.x = sqrt(1.5 + m2.x - m2.y - 0.5 * sqrt(-24.0 * m2.x + q2)) * (m.x > 0.0 ? 1.0 : -1.0);
  uv.y = sqrt(6.0 / (3.0 - uv.x * uv.x)) * m.y;
  return uv * 0.5 + 0.5;
}

vec2 getGlobeUv(const vec3 position) {
  return getCubeSphereUv(position);
}

float getMipLevel(const vec2 uv) {
  const float mipLevelScale = 0.1;
  vec2 coord = uv * resolution;
  vec2 ddx = dFdx(coord);
  vec2 ddy = dFdy(coord);
  float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy)) * mipLevelScale;
  return max(0.0, 0.5 * log2(max(1.0, deltaMaxSqr)));
}

bool insideLayerIntervals(const float height) {
  bvec3 gt = greaterThan(vec3(height), minIntervalHeights);
  bvec3 lt = lessThan(vec3(height), maxIntervalHeights);
  return any(bvec3(gt.x && lt.x, gt.y && lt.y, gt.z && lt.z));
}

struct WeatherSample {
  vec4 heightFraction; // Normalized height of each layer
  vec4 density;
};

vec4 shapeAlteringFunction(const vec4 heightFraction, const vec4 bias) {
  // Apply a semi-circle transform to round the clouds towards the top.
  vec4 biased = pow(heightFraction, bias);
  vec4 x = clamp(biased * 2.0 - 1.0, -1.0, 1.0);
  return 1.0 - x * x;
}

WeatherSample sampleWeather(const vec2 uv, const float height, const float mipLevel) {
  WeatherSample weather;
  weather.heightFraction = remapClamped(vec4(height), minLayerHeights, maxLayerHeights);

  vec4 localWeather = pow(
    textureLod(
      localWeatherTexture,
      uv * localWeatherRepeat + localWeatherOffset,
      mipLevel
    ).LOCAL_WEATHER_CHANNELS,
    weatherExponents
  );
  #ifdef SHADOW
  localWeather *= shadowLayerMask;
  #endif // SHADOW

  vec4 heightScale = shapeAlteringFunction(weather.heightFraction, shapeAlteringBiases);

  // Modulation to control weather by coverage parameter.
  // Reference: https://github.com/Prograda/Skybolt/blob/master/Assets/Core/Shaders/Clouds.h#L63
  vec4 factor = 1.0 - coverage * heightScale;
  weather.density = remapClamped(
    mix(localWeather, vec4(1.0), coverageFilterWidths),
    factor,
    factor + coverageFilterWidths
  );

  return weather;
}

vec4 getLayerDensity(const vec4 heightFraction) {
  // prettier-ignore
  return densityProfile.expTerms * exp(densityProfile.exponents * heightFraction) +
    densityProfile.linearTerms * heightFraction +
    densityProfile.constantTerms;
}

struct MediaSample {
  float density;
  vec4 weight;
  float scattering;
  float extinction;
};

MediaSample sampleMedia(
  const WeatherSample weather,
  const vec3 position,
  const vec2 uv,
  const float mipLevel,
  const float jitter,
  out ivec3 sampleCount
) {
  vec4 density = weather.density;

  // TODO: Define in physical length.
  vec3 surfaceNormal = normalize(position);
  float localWeatherSpeed = length(localWeatherOffset);
  vec3 evolution = -surfaceNormal * localWeatherSpeed * 2e4;

  vec3 turbulence = vec3(0.0);
  #ifdef TURBULENCE
  vec2 turbulenceUv = uv * localWeatherRepeat * turbulenceRepeat;
  turbulence =
    turbulenceDisplacement *
    (texture(turbulenceTexture, turbulenceUv).rgb * 2.0 - 1.0) *
    dot(density, remapClamped(weather.heightFraction, vec4(0.3), vec4(0.0)));
  #endif // TURBULENCE

  vec3 shapePosition = (position + evolution + turbulence) * shapeRepeat + shapeOffset;
  float shape = texture(shapeTexture, shapePosition).r;
  density = remapClamped(density, vec4(1.0 - shape) * shapeAmounts, vec4(1.0));

  #ifdef DEBUG_SHOW_SAMPLE_COUNT
  ++sampleCount.y;
  #endif // DEBUG_SHOW_SAMPLE_COUNT

  #ifdef SHAPE_DETAIL
  if (mipLevel * 0.5 + (jitter - 0.5) * 0.5 < 0.5) {
    vec3 detailPosition = (position + turbulence) * shapeDetailRepeat + shapeDetailOffset;
    float detail = texture(shapeDetailTexture, detailPosition).r;
    // Fluffy at the top and whippy at the bottom.
    vec4 modifier = mix(
      vec4(pow(detail, 6.0)),
      vec4(1.0 - detail),
      remapClamped(weather.heightFraction, vec4(0.2), vec4(0.4))
    );
    modifier = mix(vec4(0.0), modifier, shapeDetailAmounts);
    density = remapClamped(density * 2.0, vec4(modifier * 0.5), vec4(1.0));

    #ifdef DEBUG_SHOW_SAMPLE_COUNT
    ++sampleCount.z;
    #endif // DEBUG_SHOW_SAMPLE_COUNT
  }
  #endif // SHAPE_DETAIL

  // Apply the density profiles.
  density = saturate(density * densityScales * getLayerDensity(weather.heightFraction));

  MediaSample media;
  float densitySum = density.x + density.y + density.z + density.w;
  media.weight = density / densitySum;
  media.scattering = densitySum * scatteringCoefficient;
  media.extinction = densitySum * absorptionCoefficient + media.scattering;
  return media;
}

MediaSample sampleMedia(
  const WeatherSample weather,
  const vec3 position,
  const vec2 uv,
  const float mipLevel,
  const float jitter
) {
  ivec3 sampleCount;
  return sampleMedia(weather, position, uv, mipLevel, jitter, sampleCount);
}
`,hf=`precision highp float;
precision highp sampler3D;

#include "atmosphere/bruneton/definitions"

uniform AtmosphereParameters ATMOSPHERE;
uniform vec3 SUN_SPECTRAL_RADIANCE_TO_LUMINANCE;
uniform vec3 SKY_SPECTRAL_RADIANCE_TO_LUMINANCE;

uniform sampler2D transmittance_texture;
uniform sampler3D scattering_texture;
uniform sampler2D irradiance_texture;
uniform sampler3D single_mie_scattering_texture;
uniform sampler3D higher_order_scattering_texture;

#include "atmosphere/bruneton/common"
#include "atmosphere/bruneton/runtime"

#include "types"

uniform mat4 inverseProjectionMatrix;
uniform mat4 inverseViewMatrix;
uniform vec3 cameraPosition;
uniform mat4 worldToECEFMatrix;
uniform vec3 altitudeCorrection;

// Atmosphere
uniform float bottomRadius;
uniform vec3 sunDirection;

// Cloud layers
uniform float minHeight;
uniform float maxHeight;

layout(location = 0) in vec3 position;

out vec2 vUv;
out vec3 vCameraPosition;
out vec3 vCameraDirection; // Direction to the center of screen
out vec3 vRayDirection; // Direction to the texel
out vec3 vViewPosition;

out GroundIrradiance vGroundIrradiance;
out CloudsIrradiance vCloudsIrradiance;

void sampleSunSkyIrradiance(const vec3 positionECEF) {
  vGroundIrradiance.sun = GetSunAndSkyScalarIrradiance(
    positionECEF * METER_TO_LENGTH_UNIT,
    sunDirection,
    vGroundIrradiance.sky
  );

  vec3 surfaceNormal = normalize(positionECEF);
  vec2 radii = (bottomRadius + vec2(minHeight, maxHeight)) * METER_TO_LENGTH_UNIT;
  vCloudsIrradiance.minSun = GetSunAndSkyScalarIrradiance(
    surfaceNormal * radii.x,
    sunDirection,
    vCloudsIrradiance.minSky
  );
  vCloudsIrradiance.maxSun = GetSunAndSkyScalarIrradiance(
    surfaceNormal * radii.y,
    sunDirection,
    vCloudsIrradiance.maxSky
  );
}

void main() {
  vUv = position.xy * 0.5 + 0.5;

  vec3 viewPosition = (inverseProjectionMatrix * vec4(position, 1.0)).xyz;
  vec3 worldDirection = (inverseViewMatrix * vec4(viewPosition.xyz, 0.0)).xyz;
  vec3 cameraDirection = normalize((inverseViewMatrix * vec4(0.0, 0.0, -1.0, 0.0)).xyz);
  vCameraPosition = (worldToECEFMatrix * vec4(cameraPosition, 1.0)).xyz;
  vCameraDirection = (worldToECEFMatrix * vec4(cameraDirection, 0.0)).xyz;
  vRayDirection = (worldToECEFMatrix * vec4(worldDirection, 0.0)).xyz;
  vViewPosition = viewPosition;

  sampleSunSkyIrradiance(vCameraPosition + altitudeCorrection);

  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,bo=`uniform vec2 resolution;
uniform int frame;
uniform sampler3D stbnTexture;

// Atmosphere
uniform float bottomRadius;
uniform mat4 worldToECEFMatrix;
uniform mat4 ecefToWorldMatrix;
uniform vec3 altitudeCorrection;
uniform vec3 sunDirection;

// Participating medium
uniform float scatteringCoefficient;
uniform float absorptionCoefficient;

// Primary raymarch
uniform float minDensity;
uniform float minExtinction;
uniform float minTransmittance;

// Shape and weather
uniform sampler2D localWeatherTexture;
uniform vec2 localWeatherRepeat;
uniform vec2 localWeatherOffset;
uniform float coverage;
uniform sampler3D shapeTexture;
uniform vec3 shapeRepeat;
uniform vec3 shapeOffset;

#ifdef SHAPE_DETAIL
uniform sampler3D shapeDetailTexture;
uniform vec3 shapeDetailRepeat;
uniform vec3 shapeDetailOffset;
#endif // SHAPE_DETAIL

#ifdef TURBULENCE
uniform sampler2D turbulenceTexture;
uniform vec2 turbulenceRepeat;
uniform float turbulenceDisplacement;
#endif // TURBULENCE

// Haze
#ifdef HAZE
uniform float hazeDensityScale;
uniform float hazeExponent;
uniform float hazeScatteringCoefficient;
uniform float hazeAbsorptionCoefficient;
#endif // HAZE

// Cloud layers
uniform vec4 minLayerHeights;
uniform vec4 maxLayerHeights;
uniform vec3 minIntervalHeights;
uniform vec3 maxIntervalHeights;
uniform vec4 densityScales;
uniform vec4 shapeAmounts;
uniform vec4 shapeDetailAmounts;
uniform vec4 weatherExponents;
uniform vec4 shapeAlteringBiases;
uniform vec4 coverageFilterWidths;
uniform float minHeight;
uniform float maxHeight;
uniform float shadowTopHeight;
uniform float shadowBottomHeight;
uniform vec4 shadowLayerMask;
uniform CloudDensityProfile densityProfile;
`,ua=`struct GroundIrradiance {
  vec3 sun;
  vec3 sky;
};

struct CloudsIrradiance {
  vec3 minSun;
  vec3 minSky;
  vec3 maxSun;
  vec3 maxSky;
};

struct CloudDensityProfile {
  vec4 expTerms;
  vec4 exponents;
  vec4 linearTerms;
  vec4 constantTerms;
};
`,df=Object.defineProperty,Ue=(t,e,r,i)=>{for(var a=void 0,s=t.length-1,o;s>=0;s--)(o=t[s])&&(a=o(e,r,a)||a);return a&&df(e,r,a),a},ff=new le,mf=new qe,ye=class extends Tt{constructor({parameterUniforms:e,layerUniforms:r,atmosphereUniforms:i},a=mr.DEFAULT){super({name:"CloudsMaterial",glslVersion:ji,vertexShader:Ve(hf,{atmosphere:{bruneton:{common:ra,definitions:ia,runtime:ta}},types:ua}),fragmentShader:Gt(Ve(uf,{core:{depth:Gi,math:ar,turbo:Zn,generators:Qs,raySphereIntersection:sr,cascadedShadowMaps:Hi,interleavedGradientNoise:zi,vogelDisk:ki},atmosphere:{bruneton:{common:ra,definitions:ia,runtime:ta}},types:ua,parameters:bo,clouds:No})),uniforms:{...e,...r,...i,depthBuffer:new w(null),viewMatrix:new w(new pe),inverseProjectionMatrix:new w(new pe),inverseViewMatrix:new w(new pe),reprojectionMatrix:new w(new pe),viewReprojectionMatrix:new w(new pe),resolution:new w(new ue),cameraNear:new w(0),cameraFar:new w(0),cameraHeight:new w(0),frame:new w(0),temporalJitter:new w(new ue),targetUvScale:new w(new ue),mipLevelScale:new w(1),stbnTexture:new w(null),skyLightScale:new w(1),groundBounceScale:new w(1),powderScale:new w(.8),powderExponent:new w(150),maxIterationCount:new w(B.clouds.maxIterationCount),minStepSize:new w(B.clouds.minStepSize),maxStepSize:new w(B.clouds.maxStepSize),maxRayDistance:new w(B.clouds.maxRayDistance),perspectiveStepScale:new w(B.clouds.perspectiveStepScale),minDensity:new w(B.clouds.minDensity),minExtinction:new w(B.clouds.minExtinction),minTransmittance:new w(B.clouds.minTransmittance),maxIterationCountToSun:new w(B.clouds.maxIterationCountToSun),maxIterationCountToGround:new w(B.clouds.maxIterationCountToGround),minSecondaryStepSize:new w(B.clouds.minSecondaryStepSize),secondaryStepScale:new w(B.clouds.secondaryStepScale),shadowBuffer:new w(null),shadowTexelSize:new w(new ue),shadowIntervals:new w(Array.from({length:4},()=>new ue)),shadowMatrices:new w(Array.from({length:4},()=>new pe)),shadowFar:new w(0),maxShadowFilterRadius:new w(6),shadowLayerMask:new w(new Oe().setScalar(1)),maxShadowLengthIterationCount:new w(B.clouds.maxShadowLengthIterationCount),minShadowLengthStepSize:new w(B.clouds.minShadowLengthStepSize),maxShadowLengthRayDistance:new w(B.clouds.maxShadowLengthRayDistance),hazeDensityScale:new w(3e-5),hazeExponent:new w(.001),hazeScatteringCoefficient:new w(.9),hazeAbsorptionCoefficient:new w(.5)}},a),this.temporalUpscale=!0,this.depthPacking=0,this.localWeatherChannels="rgba",this.shapeDetail=B.shapeDetail,this.turbulence=B.turbulence,this.shadowLength=B.lightShafts,this.haze=B.haze,this.multiScatteringOctaves=B.clouds.multiScatteringOctaves,this.accurateSunSkyLight=B.clouds.accurateSunSkyLight,this.accuratePhaseFunction=B.clouds.accuratePhaseFunction,this.shadowCascadeCount=B.shadow.cascadeCount,this.shadowSampleCount=8,this.scatterAnisotropy1=.7,this.scatterAnisotropy2=-.2,this.scatterAnisotropyMix=.5}onBeforeRender(e,r,i,a,s,o){let u=this.defines.USE_LOGARITHMIC_DEPTH_BUFFER!=null,f=e.capabilities.logarithmicDepthBuffer;f!==u&&(f?this.defines.USE_LOGARITHMIC_DEPTH_BUFFER="1":delete this.defines.USE_LOGARITHMIC_DEPTH_BUFFER);let p=this.defines.POWDER!=null,x=this.uniforms.powderScale.value>0;x!==p&&(x?this.defines.POWDER="1":delete this.defines.POWDER,this.needsUpdate=!0);let y=this.defines.GROUND_BOUNCE!=null;(this.uniforms.groundBounceScale.value>0&&this.uniforms.maxIterationCountToGround.value>0)!==y&&(x?this.defines.GROUND_BOUNCE="1":delete this.defines.GROUND_BOUNCE,this.needsUpdate=!0)}copyCameraSettings(e){e.isPerspectiveCamera===!0?this.defines.PERSPECTIVE_CAMERA!=="1"&&(this.defines.PERSPECTIVE_CAMERA="1",this.needsUpdate=!0):this.defines.PERSPECTIVE_CAMERA!=null&&(delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0);let r=this.uniforms;r.viewMatrix.value.copy(e.matrixWorldInverse),r.inverseViewMatrix.value.copy(e.matrixWorld);let i=this.previousProjectionMatrix??e.projectionMatrix,a=this.previousViewMatrix??e.matrixWorldInverse,s=r.inverseProjectionMatrix.value,o=r.inverseViewMatrix.value,u=r.reprojectionMatrix.value,f=r.viewReprojectionMatrix.value;if(this.temporalUpscale){let y=r.frame.value%16,U=r.resolution.value,V=Po[y],se=(V.x-.5)/U.x*4,j=(V.y-.5)/U.y*4;r.temporalJitter.value.set(se,j),r.mipLevelScale.value=.25,s.copy(e.projectionMatrix),s.elements[8]+=se*2,s.elements[9]+=j*2,s.invert(),u.copy(i),u.elements[8]+=se*2,u.elements[9]+=j*2,u.multiply(a),f.copy(u).multiply(o)}else r.temporalJitter.value.setScalar(0),r.mipLevelScale.value=1,s.copy(e.projectionMatrixInverse),u.copy(i).multiply(a),f.copy(u).multiply(o);r.cameraNear.value=e.near,r.cameraFar.value=e.far;let p=e.getWorldPosition(r.cameraPosition.value),x=ff.copy(p).applyMatrix4(r.worldToECEFMatrix.value);try{r.cameraHeight.value=mf.setFromECEF(x).height}catch{}}copyReprojectionMatrix(e){this.previousProjectionMatrix??=new pe,this.previousViewMatrix??=new pe,this.previousProjectionMatrix.copy(e.projectionMatrix),this.previousViewMatrix.copy(e.matrixWorldInverse)}setSize(e,r,i,a){this.uniforms.resolution.value.set(e,r),i!=null&&a!=null?this.uniforms.targetUvScale.value.set(e/i,r/a):this.uniforms.targetUvScale.value.setScalar(1),this.previousProjectionMatrix=void 0,this.previousViewMatrix=void 0}setShadowSize(e,r){this.uniforms.shadowTexelSize.value.set(1/e,1/r)}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(e){this.uniforms.depthBuffer.value=e}};Ue([vt("DEPTH_PACKING")],ye.prototype,"depthPacking");Ue([Yn("LOCAL_WEATHER_CHANNELS",{validate:t=>/^[rgba]{4}$/.test(t)})],ye.prototype,"localWeatherChannels");Ue([Y("SHAPE_DETAIL")],ye.prototype,"shapeDetail");Ue([Y("TURBULENCE")],ye.prototype,"turbulence");Ue([Y("SHADOW_LENGTH")],ye.prototype,"shadowLength");Ue([Y("HAZE")],ye.prototype,"haze");Ue([vt("MULTI_SCATTERING_OCTAVES",{min:1,max:12})],ye.prototype,"multiScatteringOctaves");Ue([Y("ACCURATE_SUN_SKY_LIGHT")],ye.prototype,"accurateSunSkyLight");Ue([Y("ACCURATE_PHASE_FUNCTION")],ye.prototype,"accuratePhaseFunction");Ue([vt("SHADOW_CASCADE_COUNT",{min:1,max:4})],ye.prototype,"shadowCascadeCount");Ue([vt("SHADOW_SAMPLE_COUNT",{min:1,max:16})],ye.prototype,"shadowSampleCount");Ue([Fi("SCATTER_ANISOTROPY_1")],ye.prototype,"scatterAnisotropy1");Ue([Fi("SCATTER_ANISOTROPY_2")],ye.prototype,"scatterAnisotropy2");Ue([Fi("SCATTER_ANISOTROPY_MIX")],ye.prototype,"scatterAnisotropyMix");var pf=`// Taken from https://gist.github.com/TheRealMJP/c83b8c0f46b63f3a88a5986f4fa982b1
// TODO: Use 5-taps version: https://www.shadertoy.com/view/MtVGWz
// Or even 4 taps (requires preprocessing in the input buffer):
// https://www.shadertoy.com/view/4tyGDD

/**
 * MIT License
 *
 * Copyright (c) 2019 MJP
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

vec4 textureCatmullRom(sampler2D tex, vec2 uv) {
  vec2 texSize = vec2(textureSize(tex, 0));

  // We're going to sample a a 4x4 grid of texels surrounding the target UV
  // coordinate. We'll do this by rounding down the sample location to get the
  // exact center of our "starting" texel. The starting texel will be at
  // location [1, 1] in the grid, where [0, 0] is the top left corner.
  vec2 samplePos = uv * texSize;
  vec2 texPos1 = floor(samplePos - 0.5) + 0.5;

  // Compute the fractional offset from our starting texel to our original
  // sample location, which we'll feed into the Catmull-Rom spline function to
  // get our filter weights.
  vec2 f = samplePos - texPos1;

  // Compute the Catmull-Rom weights using the fractional offset that we
  // calculated earlier. These equations are pre-expanded based on our knowledge
  // of where the texels will be located, which lets us avoid having to evaluate
  // a piece-wise function.
  vec2 w0 = f * (-0.5 + f * (1.0 - 0.5 * f));
  vec2 w1 = 1.0 + f * f * (-2.5 + 1.5 * f);
  vec2 w2 = f * (0.5 + f * (2.0 - 1.5 * f));
  vec2 w3 = f * f * (-0.5 + 0.5 * f);

  // Work out weighting factors and sampling offsets that will let us use
  // bilinear filtering to simultaneously evaluate the middle 2 samples from the
  // 4x4 grid.
  vec2 w12 = w1 + w2;
  vec2 offset12 = w2 / (w1 + w2);

  // Compute the final UV coordinates we'll use for sampling the texture
  vec2 texPos0 = texPos1 - 1.0;
  vec2 texPos3 = texPos1 + 2.0;
  vec2 texPos12 = texPos1 + offset12;

  texPos0 /= texSize;
  texPos3 /= texSize;
  texPos12 /= texSize;

  vec4 result = vec4(0.0);
  result += texture(tex, vec2(texPos0.x, texPos0.y)) * w0.x * w0.y;
  result += texture(tex, vec2(texPos12.x, texPos0.y)) * w12.x * w0.y;
  result += texture(tex, vec2(texPos3.x, texPos0.y)) * w3.x * w0.y;

  result += texture(tex, vec2(texPos0.x, texPos12.y)) * w0.x * w12.y;
  result += texture(tex, vec2(texPos12.x, texPos12.y)) * w12.x * w12.y;
  result += texture(tex, vec2(texPos3.x, texPos12.y)) * w3.x * w12.y;

  result += texture(tex, vec2(texPos0.x, texPos3.y)) * w0.x * w3.y;
  result += texture(tex, vec2(texPos12.x, texPos3.y)) * w12.x * w3.y;
  result += texture(tex, vec2(texPos3.x, texPos3.y)) * w3.x * w3.y;

  return result;
}

vec4 textureCatmullRom(sampler2DArray tex, vec3 uv) {
  vec2 texSize = vec2(textureSize(tex, 0));
  vec2 samplePos = uv.xy * texSize;
  vec2 texPos1 = floor(samplePos - 0.5) + 0.5;
  vec2 f = samplePos - texPos1;
  vec2 w0 = f * (-0.5 + f * (1.0 - 0.5 * f));
  vec2 w1 = 1.0 + f * f * (-2.5 + 1.5 * f);
  vec2 w2 = f * (0.5 + f * (2.0 - 1.5 * f));
  vec2 w3 = f * f * (-0.5 + 0.5 * f);
  vec2 w12 = w1 + w2;
  vec2 offset12 = w2 / (w1 + w2);
  vec2 texPos0 = texPos1 - 1.0;
  vec2 texPos3 = texPos1 + 2.0;
  vec2 texPos12 = texPos1 + offset12;
  texPos0 /= texSize;
  texPos3 /= texSize;
  texPos12 /= texSize;
  vec4 result = vec4(0.0);
  result += texture(tex, vec3(texPos0.x, texPos0.y, uv.z)) * w0.x * w0.y;
  result += texture(tex, vec3(texPos12.x, texPos0.y, uv.z)) * w12.x * w0.y;
  result += texture(tex, vec3(texPos3.x, texPos0.y, uv.z)) * w3.x * w0.y;
  result += texture(tex, vec3(texPos0.x, texPos12.y, uv.z)) * w0.x * w12.y;
  result += texture(tex, vec3(texPos12.x, texPos12.y, uv.z)) * w12.x * w12.y;
  result += texture(tex, vec3(texPos3.x, texPos12.y, uv.z)) * w3.x * w12.y;
  result += texture(tex, vec3(texPos0.x, texPos3.y, uv.z)) * w0.x * w3.y;
  result += texture(tex, vec3(texPos12.x, texPos3.y, uv.z)) * w12.x * w3.y;
  result += texture(tex, vec3(texPos3.x, texPos3.y, uv.z)) * w3.x * w3.y;
  return result;
}
`,gf=`precision highp float;
precision highp sampler2DArray;

#include "core/turbo"
#include "catmullRomSampling"
#include "varianceClipping"

uniform sampler2D colorBuffer;
uniform sampler2D depthVelocityBuffer;
uniform sampler2D colorHistoryBuffer;

#ifdef SHADOW_LENGTH
uniform sampler2D shadowLengthBuffer;
uniform sampler2D shadowLengthHistoryBuffer;
#endif // SHADOW_LENGTH

uniform vec2 texelSize;
uniform int frame;
uniform float varianceGamma;
uniform float temporalAlpha;
uniform vec2 jitterOffset;

in vec2 vUv;

layout(location = 0) out vec4 outputColor;
#ifdef SHADOW_LENGTH
layout(location = 1) out float outputShadowLength;
#endif // SHADOW_LENGTH

const ivec2 neighborOffsets[9] = ivec2[9](
  ivec2(-1, -1),
  ivec2(-1, 0),
  ivec2(-1, 1),
  ivec2(0, -1),
  ivec2(0, 0),
  ivec2(0, 1),
  ivec2(1, -1),
  ivec2(1, 0),
  ivec2(1, 1)
);

const ivec4[4] bayerIndices = ivec4[4](
  ivec4(0, 12, 3, 15),
  ivec4(8, 4, 11, 7),
  ivec4(2, 14, 1, 13),
  ivec4(10, 6, 9, 5)
);

vec4 getClosestFragment(const ivec2 coord) {
  vec4 result = vec4(1e7, 0.0, 0.0, 0.0);
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 9; ++i) {
    neighbor = texelFetchOffset(depthVelocityBuffer, coord, 0, neighborOffsets[i]);
    if (neighbor.r < result.r) {
      result = neighbor;
    }
  }
  #pragma unroll_loop_end
  return result;
}

void temporalUpscale(
  const ivec2 coord,
  const ivec2 lowResCoord,
  const bool currentFrame,
  out vec4 outputColor,
  out float outputShadowLength
) {
  vec4 currentColor = texelFetch(colorBuffer, lowResCoord, 0);
  #ifdef SHADOW_LENGTH
  vec4 currentShadowLength = vec4(texelFetch(shadowLengthBuffer, lowResCoord, 0).rgb, 1.0);
  #endif // SHADOW_LENGTH

  if (currentFrame) {
    // Use the texel just rendered without any accumulation.
    outputColor = currentColor;
    #ifdef SHADOW_LENGTH
    outputShadowLength = currentShadowLength.r;
    #endif // SHADOW_LENGTH
    return;
  }

  vec4 depthVelocity = getClosestFragment(lowResCoord);
  vec2 velocity = depthVelocity.gb;
  vec2 prevUv = vUv - velocity;
  if (prevUv.x < 0.0 || prevUv.x > 1.0 || prevUv.y < 0.0 || prevUv.y > 1.0) {
    outputColor = currentColor;
    #ifdef SHADOW_LENGTH
    outputShadowLength = currentShadowLength.r;
    #endif // SHADOW_LENGTH
    return; // Rejection
  }

  // Variance clipping with a large variance gamma seems to work fine for
  // upsampling. This increases ghosting, of course, but it's hard to notice on
  // clouds.
  // vec4 historyColor = textureCatmullRom(colorHistoryBuffer, prevUv);
  vec4 historyColor = texture(colorHistoryBuffer, prevUv);
  vec4 clippedColor = varianceClipping(colorBuffer, vUv, currentColor, historyColor, varianceGamma);
  outputColor = clippedColor;

  #ifdef SHADOW_LENGTH
  // Sampling the shadow length history using scene depth doesn't make much
  // sense, but it's too hard to derive it properly. At least this approach
  // resolves the edges of scene objects.
  // vec4 historyShadowLength = vec4(textureCatmullRom(shadowLengthHistoryBuffer, prevUv).rgb, 1.0);
  vec4 historyShadowLength = vec4(texture(shadowLengthHistoryBuffer, prevUv).rgb, 1.0);
  vec4 clippedShadowLength = varianceClipping(
    shadowLengthBuffer,
    vUv,
    currentShadowLength,
    historyShadowLength,
    varianceGamma
  );
  outputShadowLength = clippedShadowLength.r;
  #endif // SHADOW_LENGTH
}

void temporalAntialiasing(const ivec2 coord, out vec4 outputColor, out float outputShadowLength) {
  vec4 currentColor = texelFetch(colorBuffer, coord, 0);
  #ifdef SHADOW_LENGTH
  vec4 currentShadowLength = vec4(texelFetch(shadowLengthBuffer, coord, 0).rgb, 1.0);
  #endif // SHADOW_LENGTH

  vec4 depthVelocity = getClosestFragment(coord);
  vec2 velocity = depthVelocity.gb;

  vec2 prevUv = vUv - velocity;
  if (prevUv.x < 0.0 || prevUv.x > 1.0 || prevUv.y < 0.0 || prevUv.y > 1.0) {
    outputColor = currentColor;
    #ifdef SHADOW_LENGTH
    outputShadowLength = currentShadowLength.r;
    #endif // SHADOW_LENGTH
    return; // Rejection
  }

  vec4 historyColor = texture(colorHistoryBuffer, prevUv);
  vec4 clippedColor = varianceClipping(colorBuffer, coord, currentColor, historyColor);
  outputColor = mix(clippedColor, currentColor, temporalAlpha);

  #ifdef SHADOW_LENGTH
  vec4 historyShadowLength = vec4(texture(shadowLengthHistoryBuffer, prevUv).rgb, 1.0);
  vec4 clippedShadowLength = varianceClipping(
    shadowLengthBuffer,
    coord,
    currentShadowLength,
    historyShadowLength
  );
  outputShadowLength = mix(clippedShadowLength.r, currentShadowLength.r, temporalAlpha);
  #endif // SHADOW_LENGTH
}

void main() {
  ivec2 coord = ivec2(gl_FragCoord.xy);

  #if !defined(SHADOW_LENGTH)
  float outputShadowLength;
  #endif // !defined(SHADOW_LENGTH)

  #ifdef TEMPORAL_UPSCALE
  ivec2 lowResCoord = coord / 4;
  int bayerValue = bayerIndices[coord.x % 4][coord.y % 4];
  bool currentFrame = bayerValue == frame % 16;
  temporalUpscale(coord, lowResCoord, currentFrame, outputColor, outputShadowLength);
  #else // TEMPORAL_UPSCALE
  temporalAntialiasing(coord, outputColor, outputShadowLength);
  #endif // TEMPORAL_UPSCALE

  #if defined(SHADOW_LENGTH) && defined(DEBUG_SHOW_SHADOW_LENGTH)
  outputColor = vec4(turbo(outputShadowLength * 0.05), 1.0);
  #endif // defined(SHADOW_LENGTH) && defined(DEBUG_SHOW_SHADOW_LENGTH)

  #ifdef DEBUG_SHOW_VELOCITY
  outputColor.rgb = outputColor.rgb + vec3(abs(texture(depthVelocityBuffer, vUv).gb) * 10.0, 0.0);
  #endif // DEBUG_SHOW_VELOCITY
}
`,vf=`precision highp float;

layout(location = 0) in vec3 position;

out vec2 vUv;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,Oo=`#ifdef VARIANCE_9_SAMPLES
#define VARIANCE_OFFSET_COUNT 8
const ivec2 varianceOffsets[8] = ivec2[8](
  ivec2(-1, -1),
  ivec2(-1, 1),
  ivec2(1, -1),
  ivec2(1, 1),
  ivec2(1, 0),
  ivec2(0, -1),
  ivec2(0, 1),
  ivec2(-1, 0)
);
#else // VARIANCE_9_SAMPLES
#define VARIANCE_OFFSET_COUNT 4
const ivec2 varianceOffsets[4] = ivec2[4](ivec2(1, 0), ivec2(0, -1), ivec2(0, 1), ivec2(-1, 0));
#endif // VARIANCE_9_SAMPLES

// Reference: https://github.com/playdeadgames/temporal
vec4 clipAABB(const vec4 current, const vec4 history, const vec4 minColor, const vec4 maxColor) {
  vec3 pClip = 0.5 * (maxColor.rgb + minColor.rgb);
  vec3 eClip = 0.5 * (maxColor.rgb - minColor.rgb) + 1e-7;
  vec4 vClip = history - vec4(pClip, current.a);
  vec3 vUnit = vClip.xyz / eClip;
  vec3 aUnit = abs(vUnit);
  float maUnit = max(aUnit.x, max(aUnit.y, aUnit.z));
  if (maUnit > 1.0) {
    return vec4(pClip, current.a) + vClip / maUnit;
  }
  return history;
}

#ifdef VARIANCE_SAMPLER_ARRAY
#define VARIANCE_SAMPLER sampler2DArray
#define VARIANCE_SAMPLER_COORD ivec3
#else // VARIANCE_SAMPLER_ARRAY
#define VARIANCE_SAMPLER sampler2D
#define VARIANCE_SAMPLER_COORD ivec2
#endif // VARIANCE_SAMPLER_ARRAY

// Variance clipping
// Reference: https://developer.download.nvidia.com/gameworks/events/GDC2016/msalvi_temporal_supersampling.pdf
vec4 varianceClipping(
  const VARIANCE_SAMPLER inputBuffer,
  const VARIANCE_SAMPLER_COORD coord,
  const vec4 current,
  const vec4 history,
  const float gamma
) {
  vec4 moment1 = current;
  vec4 moment2 = current * current;
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 8; ++i) {
    #if UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
    neighbor = texelFetchOffset(inputBuffer, coord, 0, varianceOffsets[i]);
    moment1 += neighbor;
    moment2 += neighbor * neighbor;
    #endif // UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
  }
  #pragma unroll_loop_end

  const float N = float(VARIANCE_OFFSET_COUNT + 1);
  vec4 mean = moment1 / N;
  vec4 varianceGamma = sqrt(max(moment2 / N - mean * mean, 0.0)) * gamma;
  vec4 minColor = mean - varianceGamma;
  vec4 maxColor = mean + varianceGamma;
  return clipAABB(clamp(mean, minColor, maxColor), history, minColor, maxColor);
}

vec4 varianceClipping(
  const VARIANCE_SAMPLER inputBuffer,
  const VARIANCE_SAMPLER_COORD coord,
  const vec4 current,
  const vec4 history
) {
  return varianceClipping(inputBuffer, coord, current, history, 1.0);
}

vec4 varianceClipping(
  const sampler2D inputBuffer,
  const vec2 coord,
  const vec4 current,
  const vec4 history,
  const float gamma
) {
  vec4 moment1 = current;
  vec4 moment2 = current * current;
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 8; ++i) {
    #if UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
    neighbor = textureOffset(inputBuffer, coord, varianceOffsets[i]);
    moment1 += neighbor;
    moment2 += neighbor * neighbor;
    #endif // UNROLLED_LOOP_INDEX < VARIANCE_OFFSET_COUNT
  }
  #pragma unroll_loop_end

  const float N = float(VARIANCE_OFFSET_COUNT + 1);
  vec4 mean = moment1 / N;
  vec4 varianceGamma = sqrt(max(moment2 / N - mean * mean, 0.0)) * gamma;
  vec4 minColor = mean - varianceGamma;
  vec4 maxColor = mean + varianceGamma;
  return clipAABB(clamp(mean, minColor, maxColor), history, minColor, maxColor);
}

vec4 varianceClipping(
  const sampler2D inputBuffer,
  const vec2 coord,
  const vec4 current,
  const vec4 history
) {
  return varianceClipping(inputBuffer, coord, current, history, 1.0);
}
`,Af=Object.defineProperty,Uo=(t,e,r,i)=>{for(var a=void 0,s=t.length-1,o;s>=0;s--)(o=t[s])&&(a=o(e,r,a)||a);return a&&Af(e,r,a),a},ei=class extends fa{constructor({colorBuffer:e=null,depthVelocityBuffer:r=null,shadowLengthBuffer:i=null,colorHistoryBuffer:a=null,shadowLengthHistoryBuffer:s=null}={}){super({name:"CloudsResolveMaterial",glslVersion:ji,vertexShader:vf,fragmentShader:Gt(Ve(gf,{core:{turbo:Zn},catmullRomSampling:pf,varianceClipping:Oo})),uniforms:{colorBuffer:new w(e),depthVelocityBuffer:new w(r),shadowLengthBuffer:new w(i),colorHistoryBuffer:new w(a),shadowLengthHistoryBuffer:new w(s),texelSize:new w(new ue),frame:new w(0),jitterOffset:new w(new ue),varianceGamma:new w(2),temporalAlpha:new w(.1)}}),this.temporalUpscale=!0,this.shadowLength=!0}setSize(e,r){this.uniforms.texelSize.value.set(1/e,1/r)}onBeforeRender(e,r,i,a,s,o){let u=this.uniforms.frame.value%16,f=Po[u],p=(f.x-.5)*4,x=(f.y-.5)*4;this.uniforms.jitterOffset.value.set(p,x)}};Uo([Y("TEMPORAL_UPSCALE")],ei.prototype,"temporalUpscale");Uo([Y("SHADOW_LENGTH")],ei.prototype,"shadowLength");var Qi=class extends _e{constructor(e,r){super(e),this._mainCamera=new Do;let{shadow:i}=r;this.shadow=i}get mainCamera(){return this._mainCamera}set mainCamera(e){this._mainCamera=e}};function na(t,{depthVelocity:e,shadowLength:r}){let i=new Xd(1,1,{depthBuffer:!1,type:Ro});i.texture.minFilter=Yi,i.texture.magFilter=Yi,i.texture.name=t;let a;e&&(a=i.texture.clone(),a.isRenderTargetTexture=!0,i.depthVelocity=a,i.textures.push(a));let s;return r&&(s=i.texture.clone(),s.isRenderTargetTexture=!0,s.format=Qd,i.shadowLength=s,i.textures.push(s)),Object.assign(i,{depthVelocity:a??null,shadowLength:s??null})}var ha=class extends Qi{constructor({parameterUniforms:e,layerUniforms:r,atmosphereUniforms:i,...a},s){super("CloudsPass",a),this.atmosphere=s,this.width=0,this.height=0,this.currentMaterial=new ye({parameterUniforms:e,layerUniforms:r,atmosphereUniforms:i},s),this.currentPass=new Cr(this.currentMaterial),this.resolveMaterial=new ei,this.resolvePass=new Cr(this.resolveMaterial),this.initRenderTargets({depthVelocity:!0,shadowLength:B.lightShafts})}copyCameraSettings(e){this.currentMaterial.copyCameraSettings(e)}initialize(e,r,i){this.currentPass.initialize(e,r,i),this.resolvePass.initialize(e,r,i)}initRenderTargets(e){this.currentRenderTarget?.dispose(),this.resolveRenderTarget?.dispose(),this.historyRenderTarget?.dispose();let r=na("Clouds",e),i=na("Clouds.A",{...e,depthVelocity:!1}),a=na("Clouds.B",{...e,depthVelocity:!1});this.currentRenderTarget=r,this.resolveRenderTarget=i,this.historyRenderTarget=a;let s=this.resolveMaterial.uniforms;s.colorBuffer.value=r.texture,s.depthVelocityBuffer.value=r.depthVelocity,s.shadowLengthBuffer.value=r.shadowLength,s.colorHistoryBuffer.value=a.texture,s.shadowLengthHistoryBuffer.value=a.shadowLength}copyShadow(){let e=this.shadow,r=this.currentMaterial.uniforms;for(let i=0;i<e.cascadeCount;++i){let a=e.cascades[i];r.shadowIntervals.value[i].copy(a.interval),r.shadowMatrices.value[i].copy(a.matrix)}r.shadowFar.value=e.far}copyReprojection(){this.currentMaterial.copyReprojectionMatrix(this.mainCamera)}swapBuffers(){let e=this.historyRenderTarget,r=this.resolveRenderTarget;this.resolveRenderTarget=e,this.historyRenderTarget=r;let i=this.resolveMaterial.uniforms;i.colorHistoryBuffer.value=r.texture,i.shadowLengthHistoryBuffer.value=r.shadowLength}update(e,r,i){this.currentMaterial.uniforms.frame.value=r,this.resolveMaterial.uniforms.frame.value=r,this.copyCameraSettings(this.mainCamera),this.copyShadow(),this.currentPass.render(e,null,this.currentRenderTarget),this.resolvePass.render(e,null,this.resolveRenderTarget),this.copyReprojection(),this.swapBuffers()}setSize(e,r){if(this.width=e,this.height=r,this.temporalUpscale){let i=Math.ceil(e/4),a=Math.ceil(r/4);this.currentRenderTarget.setSize(i,a),this.currentMaterial.setSize(i*4,a*4,e,r)}else this.currentRenderTarget.setSize(e,r),this.currentMaterial.setSize(e,r);this.resolveRenderTarget.setSize(e,r),this.resolveMaterial.setSize(e,r),this.historyRenderTarget.setSize(e,r)}setShadowSize(e,r,i){this.currentMaterial.shadowCascadeCount=i,this.currentMaterial.setShadowSize(e,r)}setDepthTexture(e,r){this.currentMaterial.depthBuffer=e,this.currentMaterial.depthPacking=r??0}get outputBuffer(){return this.historyRenderTarget.texture}get shadowBuffer(){return this.currentMaterial.uniforms.shadowBuffer.value}set shadowBuffer(e){this.currentMaterial.uniforms.shadowBuffer.value=e}get shadowLengthBuffer(){return this.historyRenderTarget.shadowLength}get temporalUpscale(){return this.currentMaterial.temporalUpscale}set temporalUpscale(e){e!==this.temporalUpscale&&(this.currentMaterial.temporalUpscale=e,this.resolveMaterial.temporalUpscale=e,this.setSize(this.width,this.height))}get lightShafts(){return this.currentMaterial.shadowLength}set lightShafts(e){e!==this.lightShafts&&(this.currentMaterial.shadowLength=e,this.resolveMaterial.shadowLength=e,this.initRenderTargets({depthVelocity:!0,shadowLength:e}),this.setSize(this.width,this.height))}};function Tf(t,e){let r=t.properties.get(e.texture).__webglTexture,i=t.getContext();Pt(i instanceof WebGL2RenderingContext),t.setRenderTarget(e);let a=[];if(r!=null)for(let s=0;s<e.depth;++s)i.framebufferTextureLayer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+s,r,0,s),a.push(i.COLOR_ATTACHMENT0+s);i.drawBuffers(a)}var Zi=class extends Cr{render(e,r,i,a,s){let o=this.fullscreenMaterial.uniforms;r!==null&&o?.[this.input]!=null&&(o[this.input].value=r.texture),Tf(e,i),e.render(this.scene,this.camera)}},Sf=`precision highp float;
precision highp sampler3D;

#include <common>

#include "core/math"
#include "core/raySphereIntersection"
#include "types"
#include "parameters"
#include "structuredSampling"
#include "clouds"

uniform mat4 inverseShadowMatrices[CASCADE_COUNT];
uniform mat4 reprojectionMatrices[CASCADE_COUNT];

// Primary raymarch
uniform int maxIterationCount;
uniform float minStepSize;
uniform float maxStepSize;
uniform float opticalDepthTailScale;

in vec2 vUv;

layout(location = 0) out vec4 outputColor[CASCADE_COUNT];

// Redundant notation for prettier.
#if CASCADE_COUNT == 1
layout(location = 1) out vec3 outputDepthVelocity[CASCADE_COUNT];
#elif CASCADE_COUNT == 2
layout(location = 2) out vec3 outputDepthVelocity[CASCADE_COUNT];
#elif CASCADE_COUNT == 3
layout(location = 3) out vec3 outputDepthVelocity[CASCADE_COUNT];
#elif CASCADE_COUNT == 4
layout(location = 4) out vec3 outputDepthVelocity[CASCADE_COUNT];
#endif // CASCADE_COUNT

vec4 marchClouds(
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const float maxRayDistance,
  const float jitter,
  const float mipLevel
) {
  // Setup structured volume sampling (SVS).
  // While SVS introduces spatial aliasing, it is indeed temporally stable,
  // which is important for lower-resolution shadow maps where a flickering
  // single pixel can be highly noticeable.
  vec3 normal = getStructureNormal(rayDirection, jitter);
  float rayDistance;
  float stepSize;
  intersectStructuredPlanes(
    normal,
    rayOrigin,
    rayDirection,
    clamp(maxRayDistance / float(maxIterationCount), minStepSize, maxStepSize),
    rayDistance,
    stepSize
  );

  #ifdef TEMPORAL_JITTER
  rayDistance -= stepSize * jitter;
  #endif // TEMPORAL_JITTER

  float extinctionSum = 0.0;
  float maxOpticalDepth = 0.0;
  float maxOpticalDepthTail = 0.0;
  float transmittanceIntegral = 1.0;
  float weightedDistanceSum = 0.0;
  float transmittanceSum = 0.0;

  int sampleCount = 0;
  for (int i = 0; i < maxIterationCount; ++i) {
    if (rayDistance > maxRayDistance) {
      break; // Termination
    }

    vec3 position = rayDistance * rayDirection + rayOrigin;
    float height = length(position) - bottomRadius;

    #if !defined(DEBUG_MARCH_INTERVALS)
    if (insideLayerIntervals(height)) {
      rayDistance += stepSize;
      continue;
    }
    #endif // !defined(DEBUG_MARCH_INTERVALS)

    // Sample rough weather.
    vec2 uv = getGlobeUv(position);
    WeatherSample weather = sampleWeather(uv, height, mipLevel);

    if (any(greaterThan(weather.density, vec4(minDensity)))) {
      // Sample detailed participating media.
      // Note this assumes an homogeneous medium.
      MediaSample media = sampleMedia(weather, position, uv, mipLevel, jitter);
      if (media.extinction > minExtinction) {
        extinctionSum += media.extinction;
        maxOpticalDepth += media.extinction * stepSize;
        transmittanceIntegral *= exp(-media.extinction * stepSize);
        weightedDistanceSum += rayDistance * transmittanceIntegral;
        transmittanceSum += transmittanceIntegral;
        ++sampleCount;
      }
    }

    if (transmittanceIntegral <= minTransmittance) {
      // A large amount of optical depth accumulates in the tail, beyond the
      // point of minimum transmittance. The expected optical depth seems to
      // decrease exponentially with the number of samples taken before reaching
      // the minimum transmittance.
      // See the discussion here: https://x.com/shotamatsuda/status/1886259549931520437
      maxOpticalDepthTail = min(
        opticalDepthTailScale * stepSize * exp(float(1 - sampleCount)),
        stepSize * 0.5 // Excessive optical depth only introduces aliasing.
      );
      break; // Early termination
    }
    rayDistance += stepSize;
  }

  if (sampleCount == 0) {
    return vec4(maxRayDistance, 0.0, 0.0, 0.0);
  }
  float frontDepth = min(weightedDistanceSum / transmittanceSum, maxRayDistance);
  float meanExtinction = extinctionSum / float(sampleCount);
  return vec4(frontDepth, meanExtinction, maxOpticalDepth, maxOpticalDepthTail);
}

void getRayNearFar(
  const vec3 sunPosition,
  const vec3 rayDirection,
  out float rayNear,
  out float rayFar
) {
  vec4 firstIntersections = raySphereFirstIntersection(
    sunPosition,
    rayDirection,
    vec3(0.0),
    bottomRadius + vec4(shadowTopHeight, shadowBottomHeight, 0.0, 0.0)
  );
  rayNear = max(0.0, firstIntersections.x);
  rayFar = firstIntersections.y;
  if (rayFar < 0.0) {
    rayFar = 1e6;
  }
}

void cascade(
  const int cascadeIndex,
  const float mipLevel,
  out vec4 outputColor,
  out vec3 outputDepthVelocity
) {
  vec2 clip = vUv * 2.0 - 1.0;
  vec4 point = inverseShadowMatrices[cascadeIndex] * vec4(clip.xy, -1.0, 1.0);
  point /= point.w;
  vec3 sunPosition = (worldToECEFMatrix * vec4(point.xyz, 1.0)).xyz + altitudeCorrection;

  vec3 rayDirection = normalize(-sunDirection);
  float rayNear;
  float rayFar;
  getRayNearFar(sunPosition, rayDirection, rayNear, rayFar);

  vec3 rayOrigin = rayNear * rayDirection + sunPosition;
  float stbn = getSTBN();
  vec4 color = marchClouds(rayOrigin, rayDirection, rayFar - rayNear, stbn, mipLevel);
  outputColor = color;

  // Velocity for temporal resolution.
  #ifdef TEMPORAL_PASS
  vec3 frontPosition = color.x * rayDirection + rayOrigin;
  vec3 frontPositionWorld = (ecefToWorldMatrix * vec4(frontPosition - altitudeCorrection, 1.0)).xyz;
  vec4 prevClip = reprojectionMatrices[cascadeIndex] * vec4(frontPositionWorld, 1.0);
  prevClip /= prevClip.w;
  vec2 prevUv = prevClip.xy * 0.5 + 0.5;
  vec2 velocity = (vUv - prevUv) * resolution;
  outputDepthVelocity = vec3(color.x, velocity);
  #else // TEMPORAL_PASS
  outputDepthVelocity = vec3(0.0);
  #endif // TEMPORAL_PASS
}

// TODO: Calculate from the main camera frustum perhaps?
const float mipLevels[4] = float[4](0.0, 0.5, 1.0, 2.0);

void main() {
  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < CASCADE_COUNT
    cascade(UNROLLED_LOOP_INDEX, mipLevels[i], outputColor[i], outputDepthVelocity[i]);
    #endif // UNROLLED_LOOP_INDEX < CASCADE_COUNT
  }
  #pragma unroll_loop_end
}
`,xf=`precision highp float;

layout(location = 0) in vec3 position;

out vec2 vUv;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,Ef=`// Implements Structured Volume Sampling in fragment shader:
// https://github.com/huwb/volsample
// Implementation reference:
// https://www.shadertoy.com/view/ttVfDc

void getIcosahedralVertices(const vec3 direction, out vec3 v1, out vec3 v2, out vec3 v3) {
  // Normalization scalers to fit dodecahedron to unit sphere.
  const float a = 0.85065080835204; // phi / sqrt(2 + phi)
  const float b = 0.5257311121191336; // 1 / sqrt(2 + phi)

  // Derive the vertices of icosahedron where triangle intersects the direction.
  // See: https://www.ppsloan.org/publications/AmbientDice.pdf
  const float kT = 0.6180339887498948; // 1 / phi
  const float kT2 = 0.38196601125010515; // 1 / phi^2
  vec3 absD = abs(direction);
  float selector1 = dot(absD, vec3(1.0, kT2, -kT));
  float selector2 = dot(absD, vec3(-kT, 1.0, kT2));
  float selector3 = dot(absD, vec3(kT2, -kT, 1.0));
  v1 = selector1 > 0.0 ? vec3(a, b, 0.0) : vec3(-b, 0.0, a);
  v2 = selector2 > 0.0 ? vec3(0.0, a, b) : vec3(a, -b, 0.0);
  v3 = selector3 > 0.0 ? vec3(b, 0.0, a) : vec3(0.0, a, -b);
  vec3 octantSign = sign(direction);
  v1 *= octantSign;
  v2 *= octantSign;
  v3 *= octantSign;
}

void swapIfBigger(inout vec4 a, inout vec4 b) {
  if (a.w > b.w) {
    vec4 t = a;
    a = b;
    b = t;
  }
}

void sortVertices(inout vec3 a, inout vec3 b, inout vec3 c) {
  const vec3 base = vec3(0.5, 0.5, 1.0);
  vec4 aw = vec4(a, dot(a, base));
  vec4 bw = vec4(b, dot(b, base));
  vec4 cw = vec4(c, dot(c, base));
  swapIfBigger(aw, bw);
  swapIfBigger(bw, cw);
  swapIfBigger(aw, bw);
  a = aw.xyz;
  b = bw.xyz;
  c = cw.xyz;
}

vec3 getPentagonalWeights(const vec3 direction, const vec3 v1, const vec3 v2, const vec3 v3) {
  float d1 = dot(v1, direction);
  float d2 = dot(v2, direction);
  float d3 = dot(v3, direction);
  vec3 w = exp(vec3(d1, d2, d3) * 40.0);
  return w / (w.x + w.y + w.z);
}

vec3 getStructureNormal(
  const vec3 direction,
  const float jitter,
  out vec3 a,
  out vec3 b,
  out vec3 c,
  out vec3 weights
) {
  getIcosahedralVertices(direction, a, b, c);
  sortVertices(a, b, c);
  weights = getPentagonalWeights(direction, a, b, c);
  return jitter < weights.x
    ? a
    : jitter < weights.x + weights.y
      ? b
      : c;
}

vec3 getStructureNormal(const vec3 direction, const float jitter) {
  vec3 a, b, c, weights;
  return getStructureNormal(direction, jitter, a, b, c, weights);
}

// Reference: https://github.com/huwb/volsample/blob/master/src/unity/Assets/Shaders/RayMarchCore.cginc
void intersectStructuredPlanes(
  const vec3 normal,
  const vec3 rayOrigin,
  const vec3 rayDirection,
  const float samplePeriod,
  out float stepOffset,
  out float stepSize
) {
  float NoD = dot(rayDirection, normal);
  stepSize = samplePeriod / abs(NoD);

  // Skips leftover bit to get from rayOrigin to first strata plane.
  stepOffset = -mod(dot(rayOrigin, normal), samplePeriod) / NoD;

  // mod() gives different results depending on if the arg is negative or
  // positive. This line makes it consistent, and ensures the first sample is in
  // front of the viewer.
  if (stepOffset < 0.0) {
    stepOffset += stepSize;
  }
}
`,wf=Object.defineProperty,gr=(t,e,r,i)=>{for(var a=void 0,s=t.length-1,o;s>=0;s--)(o=t[s])&&(a=o(e,r,a)||a);return a&&wf(e,r,a),a},Et=class extends fa{constructor({parameterUniforms:e,layerUniforms:r,atmosphereUniforms:i}){super({name:"ShadowMaterial",glslVersion:ji,vertexShader:xf,fragmentShader:Gt(Ve(Sf,{core:{math:ar,raySphereIntersection:sr},types:ua,parameters:bo,structuredSampling:Ef,clouds:No})),uniforms:{...e,...r,...i,inverseShadowMatrices:new w(Array.from({length:4},()=>new pe)),reprojectionMatrices:new w(Array.from({length:4},()=>new pe)),resolution:new w(new ue),frame:new w(0),stbnTexture:new w(null),maxIterationCount:new w(B.shadow.maxIterationCount),minStepSize:new w(B.shadow.minStepSize),maxStepSize:new w(B.shadow.maxStepSize),minDensity:new w(B.shadow.minDensity),minExtinction:new w(B.shadow.minExtinction),minTransmittance:new w(B.shadow.minTransmittance),opticalDepthTailScale:new w(2)},defines:{SHADOW:"1",TEMPORAL_PASS:"1",TEMPORAL_JITTER:"1"}}),this.localWeatherChannels="rgba",this.cascadeCount=B.shadow.cascadeCount,this.temporalPass=!0,this.temporalJitter=!0,this.shapeDetail=B.shapeDetail,this.turbulence=B.turbulence,this.cascadeCount=B.shadow.cascadeCount}setSize(e,r){this.uniforms.resolution.value.set(e,r)}};gr([Yn("LOCAL_WEATHER_CHANNELS",{validate:t=>/^[rgba]{4}$/.test(t)})],Et.prototype,"localWeatherChannels");gr([vt("CASCADE_COUNT",{min:1,max:4})],Et.prototype,"cascadeCount");gr([Y("TEMPORAL_PASS")],Et.prototype,"temporalPass");gr([Y("TEMPORAL_JITTER")],Et.prototype,"temporalJitter");gr([Y("SHAPE_DETAIL")],Et.prototype,"shapeDetail");gr([Y("TURBULENCE")],Et.prototype,"turbulence");var yf=`precision highp float;
precision highp sampler2DArray;

#define VARIANCE_9_SAMPLES 1
#define VARIANCE_SAMPLER_ARRAY 1

#include "varianceClipping"

uniform sampler2DArray inputBuffer;
uniform sampler2DArray historyBuffer;

uniform vec2 texelSize;
uniform float varianceGamma;
uniform float temporalAlpha;

in vec2 vUv;

layout(location = 0) out vec4 outputColor[CASCADE_COUNT];

const ivec2 neighborOffsets[9] = ivec2[9](
  ivec2(-1, -1),
  ivec2(-1, 0),
  ivec2(-1, 1),
  ivec2(0, -1),
  ivec2(0, 0),
  ivec2(0, 1),
  ivec2(1, -1),
  ivec2(1, 0),
  ivec2(1, 1)
);

vec4 getClosestFragment(const ivec3 coord) {
  vec4 result = vec4(1e7, 0.0, 0.0, 0.0);
  vec4 neighbor;
  #pragma unroll_loop_start
  for (int i = 0; i < 9; ++i) {
    neighbor = texelFetchOffset(
      inputBuffer,
      coord + ivec3(0, 0, CASCADE_COUNT),
      0,
      neighborOffsets[i]
    );
    if (neighbor.r < result.r) {
      result = neighbor;
    }
  }
  #pragma unroll_loop_end
  return result;
}

void cascade(const int cascadeIndex, out vec4 outputColor) {
  ivec3 coord = ivec3(gl_FragCoord.xy, cascadeIndex);
  vec4 current = texelFetch(inputBuffer, coord, 0);

  vec4 depthVelocity = getClosestFragment(coord);
  vec2 velocity = depthVelocity.gb * texelSize;
  vec2 prevUv = vUv - velocity;
  if (prevUv.x < 0.0 || prevUv.x > 1.0 || prevUv.y < 0.0 || prevUv.y > 1.0) {
    outputColor = current;
    return; // Rejection
  }

  vec4 history = texture(historyBuffer, vec3(prevUv, float(cascadeIndex)));
  vec4 clippedHistory = varianceClipping(inputBuffer, coord, current, history, varianceGamma);
  outputColor = mix(clippedHistory, current, temporalAlpha);
}

void main() {
  #pragma unroll_loop_start
  for (int i = 0; i < 4; ++i) {
    #if UNROLLED_LOOP_INDEX < CASCADE_COUNT
    cascade(UNROLLED_LOOP_INDEX, outputColor[i]);
    #endif // UNROLLED_LOOP_INDEX < CASCADE_COUNT
  }
  #pragma unroll_loop_end
}
`,Cf=`precision highp float;

layout(location = 0) in vec3 position;

out vec2 vUv;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,Df=Object.defineProperty,Rf=(t,e,r,i)=>{for(var a=void 0,s=t.length-1,o;s>=0;s--)(o=t[s])&&(a=o(e,r,a)||a);return a&&Df(e,r,a),a},Ki=class extends fa{constructor({inputBuffer:e=null,historyBuffer:r=null}={}){super({name:"ShadowResolveMaterial",glslVersion:ji,vertexShader:Cf,fragmentShader:Gt(Ve(yf,{varianceClipping:Oo})),uniforms:{inputBuffer:new w(e),historyBuffer:new w(r),texelSize:new w(new ue),varianceGamma:new w(1),temporalAlpha:new w(.01)},defines:{}}),this.cascadeCount=B.shadow.cascadeCount}setSize(e,r){this.uniforms.texelSize.value.set(1/e,1/r)}};Rf([vt("CASCADE_COUNT",{min:1,max:4})],Ki.prototype,"cascadeCount");function aa(t){let e=new Zd(1,1,1,{depthBuffer:!1});return e.texture.type=Ro,e.texture.minFilter=Yi,e.texture.magFilter=Yi,e.texture.name=t,e}var da=class extends Qi{constructor({parameterUniforms:e,layerUniforms:r,atmosphereUniforms:i,...a}){super("ShadowPass",a),this.width=0,this.height=0,this.currentMaterial=new Et({parameterUniforms:e,layerUniforms:r,atmosphereUniforms:i}),this.currentPass=new Zi(this.currentMaterial),this.resolveMaterial=new Ki,this.resolvePass=new Zi(this.resolveMaterial),this.initRenderTargets()}initialize(e,r,i){this.currentPass.initialize(e,r,i),this.resolvePass.initialize(e,r,i)}initRenderTargets(){this.currentRenderTarget?.dispose(),this.resolveRenderTarget?.dispose(),this.historyRenderTarget?.dispose();let e=aa("Shadow"),r=this.temporalPass?aa("Shadow.A"):null,i=this.temporalPass?aa("Shadow.B"):null;this.currentRenderTarget=e,this.resolveRenderTarget=r,this.historyRenderTarget=i;let a=this.resolveMaterial.uniforms;a.inputBuffer.value=e.texture,a.historyBuffer.value=i?.texture??null}copyShadow(){let e=this.shadow,r=this.currentMaterial.uniforms;for(let i=0;i<e.cascadeCount;++i){let a=e.cascades[i];r.inverseShadowMatrices.value[i].copy(a.inverseMatrix)}}copyReprojection(){let e=this.shadow,r=this.currentMaterial.uniforms;for(let i=0;i<e.cascadeCount;++i){let a=e.cascades[i];r.reprojectionMatrices.value[i].copy(a.matrix)}}swapBuffers(){Pt(this.historyRenderTarget!=null),Pt(this.resolveRenderTarget!=null);let e=this.historyRenderTarget,r=this.resolveRenderTarget;this.resolveRenderTarget=e,this.historyRenderTarget=r,this.resolveMaterial.uniforms.historyBuffer.value=r.texture}update(e,r,i){this.currentMaterial.uniforms.frame.value=r,this.copyShadow(),this.currentPass.render(e,null,this.currentRenderTarget),this.temporalPass&&(Pt(this.resolveRenderTarget!=null),this.resolvePass.render(e,null,this.resolveRenderTarget),this.copyReprojection(),this.swapBuffers())}setSize(e,r,i=this.shadow.cascadeCount){this.width=e,this.height=r,this.currentMaterial.cascadeCount=i,this.resolveMaterial.cascadeCount=i,this.currentMaterial.setSize(e,r),this.resolveMaterial.setSize(e,r),this.currentRenderTarget.setSize(e,r,this.temporalPass?i*2:i),this.resolveRenderTarget?.setSize(e,r,i),this.historyRenderTarget?.setSize(e,r,i)}get outputBuffer(){return this.temporalPass?(Pt(this.historyRenderTarget!=null),this.historyRenderTarget.texture):this.currentRenderTarget.texture}get temporalPass(){return this.currentMaterial.temporalPass}set temporalPass(e){e!==this.temporalPass&&(this.currentMaterial.temporalPass=e,this.initRenderTargets(),this.setSize(this.width,this.height))}};function If(t){return{scatteringCoefficient:new w(1),absorptionCoefficient:new w(0),coverage:new w(.3),localWeatherTexture:new w(t.localWeatherTexture),localWeatherRepeat:new w(t.localWeatherRepeat),localWeatherOffset:new w(t.localWeatherOffset),shapeTexture:new w(t.shapeTexture),shapeRepeat:new w(t.shapeRepeat),shapeOffset:new w(t.shapeOffset),shapeDetailTexture:new w(t.shapeDetailTexture),shapeDetailRepeat:new w(t.shapeDetailRepeat),shapeDetailOffset:new w(t.shapeDetailOffset),turbulenceTexture:new w(t.turbulenceTexture),turbulenceRepeat:new w(t.turbulenceRepeat),turbulenceDisplacement:new w(350)}}function _f(){return{minLayerHeights:new w(new Oe),maxLayerHeights:new w(new Oe),minIntervalHeights:new w(new le),maxIntervalHeights:new w(new le),densityScales:new w(new Oe),shapeAmounts:new w(new Oe),shapeDetailAmounts:new w(new Oe),weatherExponents:new w(new Oe),shapeAlteringBiases:new w(new Oe),coverageFilterWidths:new w(new Oe),minHeight:new w(0),maxHeight:new w(0),shadowTopHeight:new w(0),shadowBottomHeight:new w(0),shadowLayerMask:new w(new Oe),densityProfile:new w({expTerms:new Oe,exponents:new Oe,linearTerms:new Oe,constantTerms:new Oe})}}var sa=[0,0,0,0];function Mf(t,e){e.packValues("altitude",t.minLayerHeights.value),e.packSums("altitude","height",t.maxLayerHeights.value),e.packIntervalHeights(t.minIntervalHeights.value,t.maxIntervalHeights.value),e.packValues("densityScale",t.densityScales.value),e.packValues("shapeAmount",t.shapeAmounts.value),e.packValues("shapeDetailAmount",t.shapeDetailAmounts.value),e.packValues("weatherExponent",t.weatherExponents.value),e.packValues("shapeAlteringBias",t.shapeAlteringBiases.value),e.packValues("coverageFilterWidth",t.coverageFilterWidths.value);let r=t.densityProfile.value;e.packDensityProfiles("expTerm",r.expTerms),e.packDensityProfiles("exponent",r.exponents),e.packDensityProfiles("linearTerm",r.linearTerms),e.packDensityProfiles("constantTerm",r.constantTerms);let i=1/0,a=0,s=1/0,o=0;sa.fill(0);for(let u=0;u<e.length;++u){let{altitude:f,height:p,shadow:x}=e[u],y=f+p;p>0&&(f<i&&(i=f),x&&f<s&&(s=f),y>a&&(a=y),x&&y>o&&(o=y)),sa[u]=x?1:0}i!==1/0?(t.minHeight.value=i,t.maxHeight.value=a):(Pt(a===0),t.minHeight.value=0),s!==1/0?(t.shadowBottomHeight.value=s,t.shadowTopHeight.value=o):(Pt(o===0),t.shadowBottomHeight.value=0),t.shadowLayerMask.value.fromArray(sa)}function Pf(t,e){return{bottomRadius:new w(t.bottomRadius),topRadius:new w(t.topRadius),worldToECEFMatrix:new w(e.worldToECEFMatrix),ecefToWorldMatrix:new w(e.ecefToWorldMatrix),altitudeCorrection:new w(e.altitudeCorrection),sunDirection:new w(e.sunDirection)}}var Nf=`uniform sampler2D cloudsBuffer;

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  #ifdef SKIP_RENDERING
  outputColor = inputColor;
  #else // SKIP_RENDERING
  vec4 clouds = texture(cloudsBuffer, uv);
  outputColor.rgb = inputColor.rgb * (1.0 - clouds.a) + clouds.rgb;
  outputColor.a = inputColor.a * (1.0 - clouds.a) + clouds.a;
  #endif // SKIP_RENDERING
}
`,bf=Object.defineProperty,Of=(t,e,r,i)=>{for(var a=void 0,s=t.length-1,o;s>=0;s--)(o=t[s])&&(a=o(e,r,a)||a);return a&&bf(e,r,a),a},Jr=new le,Uf=new ue,Lf=new jd,Bf=["maxIterationCount","minStepSize","maxStepSize","maxRayDistance","perspectiveStepScale","minDensity","minExtinction","minTransmittance","maxIterationCountToSun","maxIterationCountToGround","minSecondaryStepSize","secondaryStepScale","maxShadowFilterRadius","maxShadowLengthIterationCount","minShadowLengthStepSize","maxShadowLengthRayDistance","hazeDensityScale","hazeExponent","hazeScatteringCoefficient","hazeAbsorptionCoefficient"],Ff=["multiScatteringOctaves","accurateSunSkyLight","accuratePhaseFunction"],Hf=["maxIterationCount","minStepSize","maxStepSize","minDensity","minExtinction","minTransmittance","opticalDepthTailScale"],Gf=["temporalJitter"],zf=["temporalPass"],kf=["cascadeCount","mapSize","maxFar","farScale","splitMode","splitLambda"],St={type:"change"},Lo={resolutionScale:B.resolutionScale,width:st.AUTO_SIZE,height:st.AUTO_SIZE},ti=class extends Qt{constructor(e=new Do,r,i=mr.DEFAULT){super("CloudsEffect",Nf,{attributes:je.DEPTH,uniforms:new Map([["cloudsBuffer",new w(null)]])}),this.camera=e,this.atmosphere=i,this.cloudLayers=Mo.DEFAULT.clone(),this.correctAltitude=!0,this.localWeatherRepeat=new ue().setScalar(100),this.localWeatherOffset=new ue,this.shapeRepeat=new le().setScalar(3e-4),this.shapeOffset=new le,this.shapeDetailRepeat=new le().setScalar(.006),this.shapeDetailOffset=new le,this.turbulenceRepeat=new ue().setScalar(20),this.worldToECEFMatrix=new pe,this.ecefToWorldMatrix=new pe,this.altitudeCorrection=new le,this.sunDirection=new le,this.localWeatherVelocity=new ue,this.shapeVelocity=new le,this.shapeDetailVelocity=new le,this._atmosphereOverlay=null,this._atmosphereShadow=null,this._atmosphereShadowLength=null,this.events=new Kd,this.frame=0,this.shadowCascadeCount=0,this.shadowMapSize=new ue,this.onResolutionChange=()=>{this.setSize(this.resolution.baseWidth,this.resolution.baseHeight)},this.skipRendering=!0;let{resolutionScale:a,width:s,height:o,resolutionX:u=s,resolutionY:f=o}={...Lo,...r};this.shadowMaps=new la({cascadeCount:B.shadow.cascadeCount,mapSize:B.shadow.mapSize,splitLambda:.6}),this.parameterUniforms=If({localWeatherTexture:this.proceduralLocalWeather?.texture??null,localWeatherRepeat:this.localWeatherRepeat,localWeatherOffset:this.localWeatherOffset,shapeTexture:this.proceduralShape?.texture??null,shapeRepeat:this.shapeRepeat,shapeOffset:this.shapeOffset,shapeDetailTexture:this.proceduralShapeDetail?.texture??null,shapeDetailRepeat:this.shapeDetailRepeat,shapeDetailOffset:this.shapeDetailOffset,turbulenceTexture:this.proceduralTurbulence?.texture??null,turbulenceRepeat:this.turbulenceRepeat}),this.layerUniforms=_f(),this.atmosphereUniforms=Pf(i,{worldToECEFMatrix:this.worldToECEFMatrix,ecefToWorldMatrix:this.ecefToWorldMatrix,altitudeCorrection:this.altitudeCorrection,sunDirection:this.sunDirection});let p={shadow:this.shadowMaps,parameterUniforms:this.parameterUniforms,layerUniforms:this.layerUniforms,atmosphereUniforms:this.atmosphereUniforms};this.shadowPass=new da(p),this.shadowPass.mainCamera=e,this.cloudsPass=new ha(p,i),this.cloudsPass.mainCamera=e,this.clouds=Xn(Qn({},this.cloudsPass.currentMaterial,Bf),this.cloudsPass.currentMaterial,Ff),this.shadow=Xn(Qn({},this.shadowPass.currentMaterial,Hf),this.shadowPass.currentMaterial,Gf,this.shadowPass,zf,this.shadowMaps,kf),this.resolution=new st(this,u,f,a),this.resolution.addEventListener("change",this.onResolutionChange)}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e,this.shadowPass.mainCamera=e,this.cloudsPass.mainCamera=e}initialize(e,r,i){this.shadowPass.initialize(e,r,i),this.cloudsPass.initialize(e,r,i)}updateSharedUniforms(e){Mf(this.layerUniforms,this.cloudLayers);let{parameterUniforms:r}=this;r.localWeatherOffset.value.add(Uf.copy(this.localWeatherVelocity).multiplyScalar(e)),r.shapeOffset.value.add(Jr.copy(this.shapeVelocity).multiplyScalar(e)),r.shapeDetailOffset.value.add(Jr.copy(this.shapeDetailVelocity).multiplyScalar(e));let i=this.worldToECEFMatrix;this.ecefToWorldMatrix.copy(i).invert();let a=this.camera.getWorldPosition(Jr).applyMatrix4(this.worldToECEFMatrix),s=this.altitudeCorrection;this.correctAltitude?cr(a,this.atmosphere.bottomRadius,this.ellipsoid,s):s.setScalar(0);let o=this.ellipsoid.getSurfaceNormal(a,Jr),u=this.sunDirection.dot(o),f=Vn(1e6,1e3,u),p=Lf.setFromMatrix4(i).transpose();this.shadowMaps.update(this.camera,Jr.copy(this.sunDirection).applyMatrix3(p),f)}updateWeatherTextureChannels(){let e=this.cloudLayers.localWeatherChannels;this.cloudsPass.currentMaterial.localWeatherChannels=e,this.shadowPass.currentMaterial.localWeatherChannels=e}updateAtmosphereComposition(){let{shadowMaps:e,shadowPass:r,cloudsPass:i}=this,a=r.currentMaterial.uniforms,s=i.currentMaterial.uniforms,o=this._atmosphereOverlay,u=Object.assign(this._atmosphereOverlay??{},{map:i.outputBuffer});o!==u&&(this._atmosphereOverlay=u,St.target=this,St.property="atmosphereOverlay",this.events.dispatchEvent(St));let f=this._atmosphereShadow,p=Object.assign(this._atmosphereShadow??{},{map:r.outputBuffer,mapSize:e.mapSize,cascadeCount:e.cascadeCount,intervals:s.shadowIntervals.value,matrices:s.shadowMatrices.value,inverseMatrices:a.inverseShadowMatrices.value,far:e.far,topHeight:s.shadowTopHeight.value});f!==p&&(this._atmosphereShadow=p,St.target=this,St.property="atmosphereShadow",this.events.dispatchEvent(St));let x=this._atmosphereShadowLength,y=i.shadowLengthBuffer!=null?Object.assign(this._atmosphereShadowLength??{},{map:i.shadowLengthBuffer}):null;x!==y&&(this._atmosphereShadowLength=y,St.target=this,St.property="atmosphereShadowLength",this.events.dispatchEvent(St))}update(e,r,i=0){let{shadowMaps:a,shadowPass:s,cloudsPass:o}=this;if(a.cascadeCount!==this.shadowCascadeCount||!a.mapSize.equals(this.shadowMapSize)){let{width:u,height:f}=a.mapSize,p=a.cascadeCount;this.shadowMapSize.set(u,f),this.shadowCascadeCount=p,s.setSize(u,f,p),o.setShadowSize(u,f,p)}this.proceduralLocalWeather?.render(e,i),this.proceduralShape?.render(e,i),this.proceduralShapeDetail?.render(e,i),this.proceduralTurbulence?.render(e,i),++this.frame,this.updateSharedUniforms(i),this.updateWeatherTextureChannels(),s.update(e,this.frame,i),o.shadowBuffer=s.outputBuffer,o.update(e,this.frame,i),this.updateAtmosphereComposition(),this.uniforms.get("cloudsBuffer").value=this.cloudsPass.outputBuffer}setSize(e,r){let{resolution:i}=this;i.setBaseSize(e,r);let{width:a,height:s}=i;this.cloudsPass.setSize(a,s)}setDepthTexture(e,r){this.shadowPass.setDepthTexture(e,r),this.cloudsPass.setDepthTexture(e,r)}set qualityPreset(e){let{clouds:r,shadow:i,...a}=lf[e];Object.assign(this,a),Object.assign(this.clouds,r),Object.assign(this.shadow,i)}get localWeatherTexture(){return this.proceduralLocalWeather??this.parameterUniforms.localWeatherTexture.value}set localWeatherTexture(e){e instanceof To||e==null?(this.proceduralLocalWeather=void 0,this.parameterUniforms.localWeatherTexture.value=e):(this.proceduralLocalWeather=e,this.parameterUniforms.localWeatherTexture.value=e.texture)}get shapeTexture(){return this.proceduralShape??this.parameterUniforms.shapeTexture.value}set shapeTexture(e){e instanceof So||e==null?(this.proceduralShape=void 0,this.parameterUniforms.shapeTexture.value=e):(this.proceduralShape=e,this.parameterUniforms.shapeTexture.value=e.texture)}get shapeDetailTexture(){return this.proceduralShapeDetail??this.parameterUniforms.shapeDetailTexture.value}set shapeDetailTexture(e){e instanceof So||e==null?(this.proceduralShapeDetail=void 0,this.parameterUniforms.shapeDetailTexture.value=e):(this.proceduralShapeDetail=e,this.parameterUniforms.shapeDetailTexture.value=e.texture)}get turbulenceTexture(){return this.proceduralTurbulence??this.parameterUniforms.turbulenceTexture.value}set turbulenceTexture(e){e instanceof To||e==null?(this.proceduralTurbulence=void 0,this.parameterUniforms.turbulenceTexture.value=e):(this.proceduralTurbulence=e,this.parameterUniforms.turbulenceTexture.value=e.texture)}get stbnTexture(){return this.cloudsPass.currentMaterial.uniforms.stbnTexture.value}set stbnTexture(e){this.cloudsPass.currentMaterial.uniforms.stbnTexture.value=e,this.shadowPass.currentMaterial.uniforms.stbnTexture.value=e}get resolutionScale(){return this.resolution.scale}set resolutionScale(e){this.resolution.scale=e}get temporalUpscale(){return this.cloudsPass.temporalUpscale}set temporalUpscale(e){this.cloudsPass.temporalUpscale=e}get lightShafts(){return this.cloudsPass.lightShafts}set lightShafts(e){this.cloudsPass.lightShafts=e}get shapeDetail(){return this.cloudsPass.currentMaterial.shapeDetail}set shapeDetail(e){this.cloudsPass.currentMaterial.shapeDetail=e,this.shadowPass.currentMaterial.shapeDetail=e}get turbulence(){return this.cloudsPass.currentMaterial.turbulence}set turbulence(e){this.cloudsPass.currentMaterial.turbulence=e,this.shadowPass.currentMaterial.turbulence=e}get haze(){return this.cloudsPass.currentMaterial.haze}set haze(e){this.cloudsPass.currentMaterial.haze=e}get scatteringCoefficient(){return this.parameterUniforms.scatteringCoefficient.value}set scatteringCoefficient(e){this.parameterUniforms.scatteringCoefficient.value=e}get absorptionCoefficient(){return this.parameterUniforms.absorptionCoefficient.value}set absorptionCoefficient(e){this.parameterUniforms.absorptionCoefficient.value=e}get coverage(){return this.parameterUniforms.coverage.value}set coverage(e){this.parameterUniforms.coverage.value=e}get turbulenceDisplacement(){return this.parameterUniforms.turbulenceDisplacement.value}set turbulenceDisplacement(e){this.parameterUniforms.turbulenceDisplacement.value=e}get scatterAnisotropy1(){return this.cloudsPass.currentMaterial.scatterAnisotropy1}set scatterAnisotropy1(e){this.cloudsPass.currentMaterial.scatterAnisotropy1=e}get scatterAnisotropy2(){return this.cloudsPass.currentMaterial.scatterAnisotropy2}set scatterAnisotropy2(e){this.cloudsPass.currentMaterial.scatterAnisotropy2=e}get scatterAnisotropyMix(){return this.cloudsPass.currentMaterial.scatterAnisotropyMix}set scatterAnisotropyMix(e){this.cloudsPass.currentMaterial.scatterAnisotropyMix=e}get skyLightScale(){return this.cloudsPass.currentMaterial.uniforms.skyLightScale.value}set skyLightScale(e){this.cloudsPass.currentMaterial.uniforms.skyLightScale.value=e}get groundBounceScale(){return this.cloudsPass.currentMaterial.uniforms.groundBounceScale.value}set groundBounceScale(e){this.cloudsPass.currentMaterial.uniforms.groundBounceScale.value=e}get powderScale(){return this.cloudsPass.currentMaterial.uniforms.powderScale.value}set powderScale(e){this.cloudsPass.currentMaterial.uniforms.powderScale.value=e}get powderExponent(){return this.cloudsPass.currentMaterial.uniforms.powderExponent.value}set powderExponent(e){this.cloudsPass.currentMaterial.uniforms.powderExponent.value=e}get atmosphereOverlay(){return this._atmosphereOverlay}get atmosphereShadow(){return this._atmosphereShadow}get atmosphereShadowLength(){return this._atmosphereShadowLength}get irradianceTexture(){return this.cloudsPass.currentMaterial.irradianceTexture}set irradianceTexture(e){this.cloudsPass.currentMaterial.irradianceTexture=e}get scatteringTexture(){return this.cloudsPass.currentMaterial.scatteringTexture}set scatteringTexture(e){this.cloudsPass.currentMaterial.scatteringTexture=e}get transmittanceTexture(){return this.cloudsPass.currentMaterial.transmittanceTexture}set transmittanceTexture(e){this.cloudsPass.currentMaterial.transmittanceTexture=e}get singleMieScatteringTexture(){return this.cloudsPass.currentMaterial.singleMieScatteringTexture}set singleMieScatteringTexture(e){this.cloudsPass.currentMaterial.singleMieScatteringTexture=e}get higherOrderScatteringTexture(){return this.cloudsPass.currentMaterial.higherOrderScatteringTexture}set higherOrderScatteringTexture(e){this.cloudsPass.currentMaterial.higherOrderScatteringTexture=e}get ellipsoid(){return this.cloudsPass.currentMaterial.ellipsoid}set ellipsoid(e){this.cloudsPass.currentMaterial.ellipsoid=e}get sunAngularRadius(){return this.cloudsPass.currentMaterial.sunAngularRadius}set sunAngularRadius(e){this.cloudsPass.currentMaterial.sunAngularRadius=e}};Of([Y("SKIP_RENDERING")],ti.prototype,"skipRendering");var qi="45a1c6c1bb9fd38b3680fd120795ff4c32df68ff",Wf=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${qi}/packages/clouds/assets/local_weather.png`,Vf=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${qi}/packages/clouds/assets/shape.bin`,Yf=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${qi}/packages/clouds/assets/shape_detail.bin`,Xf=`https://media.githubusercontent.com/media/takram-design-engineering/three-geospatial/${qi}/packages/clouds/assets/turbulence.png`;import{Camera as oS,RawShaderMaterial as cS,Uniform as lS,GLSL3 as uS,Mesh as hS,PlaneGeometry as dS,WebGL3DRenderTarget as fS,RedFormat as mS,LinearFilter as pS,RepeatWrapping as gS,NoColorSpace as vS,WebGLRenderTarget as AS,RGBAFormat as TS,LinearMipMapLinearFilter as SS}from"./three.module.js";export{Ae as AerialPerspectiveEffect,z as BlendFunction,ti as CloudsEffect,Qt as Effect,Hc as EffectComposer,fu as EffectPass,ft as Ellipsoid,qe as Geodetic,vu as NormalPass,Wi as PrecomputedTexturesLoader,dn as RenderPass,Ti as STBNLoader,$l as ToneMappingEffect,Ne as ToneMappingMode};
/*! Bundled license information:

postprocessing/build/index.js:
  (**
   * postprocessing v6.39.5 build Wed Sep 09 2026
   * https://github.com/pmndrs/postprocessing
   * Copyright 2015-2026 Raoul van Rüschen
   * @license Zlib
   *)

three/examples/jsm/libs/fflate.module.js:
  (*!
  fflate - fast JavaScript compression/decompression
  <https://101arrowz.github.io/fflate>
  Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
  version 0.8.2
  *)

@takram/three-atmosphere/build/shared.js:
  (**
      @preserve
  
      Astronomy library for JavaScript (browser and Node.js).
      https://github.com/cosinekitty/astronomy
  
      MIT License
  
      Copyright (c) 2019-2023 Don Cross <cosinekitty@gmail.com>
  
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
  
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
  
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
  *)
  (**
   * @fileoverview Astronomy calculation library for browser scripting and Node.js.
   * @author Don Cross <cosinekitty@gmail.com>
   * @license MIT
   *)
*/
