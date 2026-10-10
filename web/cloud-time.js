const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const smooth=(a,b,x)=>{const t=clamp((x-a)/(b-a),0,1);return t*t*(3-2*t);};
export function validCloudTime(value){return typeof value==='string'&&/^([01]\d|2[0-3]):[0-5]\d$/.test(value)?value:'06:20';}
export function cloudMinutes(mode,time,date=new Date()){
  if(mode==='fixed'){const [h,m]=validCloudTime(time).split(':').map(Number);return h*60+m;}
  return date.getHours()*60+date.getMinutes()+date.getSeconds()/60+date.getMilliseconds()/60000;
}
const frames=[
  [0,'#050b1c','#19283c','#9bbadc','#172641'],
  [4.5,'#121b36','#47384c','#c79282','#314158'],
  [5.5,'#637296','#dca899','#efba8f','#8b97b0'],
  [6.3,'#a0b3cf','#ffe5bf','#ffd0a0','#bfc9d7'],
  [8,'#89aed5','#e2edf4','#fff1d8','#c3d3e4'],
  [12,'#77a4d0','#d7e5ef','#fff5e6','#b5cbe0'],
  [16.5,'#8cabc5','#ecdeca','#ffe5c0','#bdcad7'],
  [18,'#6d729b','#f1b084','#ffa578','#ada1ba'],
  [19,'#303957','#885468','#dd917c','#63718e'],
  [20.5,'#0d152c','#2b324d','#a7bddd','#293a58'],
  [24,'#050b1c','#19283c','#9bbadc','#172641']
];
function rgb(hex){return [1,3,5].map(i=>parseInt(hex.slice(i,i+2),16)/255).map(c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4);}
export function cloudLight(minutes){
  const hour=((minutes%1440)+1440)%1440/60;
  let i=0;while(i<frames.length-2&&hour>=frames[i+1][0])i++;
  const a=frames[i],b=frames[i+1],t=smooth(a[0],b[0],hour);
  const colors=[1,2,3,4].map(j=>{const x=rgb(a[j]),y=rgb(b[j]);return x.map((c,k)=>c+(y[k]-c)*t);});
  const elevation=Math.sin((hour-6)/24*Math.PI*2),daylight=smooth(-.16,.16,elevation);
  const direction=[Math.cos((hour-6)/12*Math.PI)*-.55,elevation*.8,-1];
  const length=Math.hypot(...direction);
  return {hour,top:colors[0],horizon:colors[1],sun:colors[2],fill:colors[3],daylight,night:1-smooth(-.25,-.05,elevation),sunDirection:direction.map(c=>c/length),phase:hour<5?'夜幕':hour<8?'朝霞':hour<16.5?'日中':hour<19.5?'日落':'夜幕'};
}
