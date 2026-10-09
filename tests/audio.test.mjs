import test from 'node:test';
import assert from 'node:assert/strict';
import {PondAudio} from '../web/audio.js';
test('audio stays silent without custom music and releases removed music',async()=>{
  const previousAudio=globalThis.Audio;
  globalThis.Audio=class {constructor(){this.playCount=0;this.paused=true;}play(){this.playCount++;this.paused=false;return Promise.resolve();}pause(){this.paused=true;}removeAttribute(name){delete this[name];}load(){}};
  try{
    const audio=new PondAudio();
    await audio.start({sound:true,volume:35});assert.equal(audio.audio.playCount,0);
    audio.replace(new Blob(['test'],{type:'audio/wav'}));
    await audio.start({sound:true,volume:35});assert.equal(audio.audio.playCount,1);assert.equal(audio.audio.volume,.35);
    await audio.start({sound:false,volume:35});assert.equal(audio.audio.paused,true);
    audio.restore();assert.equal(audio.custom,false);assert.equal(audio.url,null);assert.equal(audio.audio.src,undefined);
    await audio.start({sound:true,volume:35});assert.equal(audio.audio.playCount,1);
  }finally{globalThis.Audio=previousAudio;}
});
