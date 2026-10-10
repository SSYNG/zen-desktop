import {SPECIES} from './simulation.js';
import {validCloudTime} from './cloud-time.js';
export const defaults={scene:'pond',count:16,speed:.8,species:['kohaku','yamabuki','sanke'],rain:false,sound:false,volume:35,icons:true,calendar:true,cloudMode:'realtime',cloudTime:'06:20'};
export function sanitize(value){
  const v={...defaults,...value};v.scene=v.scene==='clouds'?'clouds':'pond';
  v.count=Math.round(Math.max(6,Math.min(32,Number(v.count)||16)));v.speed=Math.max(.4,Math.min(1.8,Number(v.speed)||.8));v.volume=Math.max(0,Math.min(100,Number(v.volume)||0));
  v.species=[...new Set((Array.isArray(v.species)?v.species:[]).filter(x=>SPECIES.includes(x)))].slice(0,3);if(v.species.length<2)v.species=[...defaults.species];
  v.cloudMode=v.cloudMode==='fixed'?'fixed':'realtime';v.cloudTime=validCloudTime(v.cloudTime);
  delete v.fps;v.sound=!!v.sound;v.icons=!!v.icons;v.rain=!!v.rain;v.calendar=v.calendar!==false;return v;
}
