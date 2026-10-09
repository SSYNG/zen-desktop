export class PondAudio {
  constructor(){this.audio=new Audio();this.audio.loop=true;this.custom=false;this.url=null;}
  async start(config){if(!config.sound||!this.custom){this.stop();return;}this.audio.volume=config.volume/100;try{await this.audio.play();}catch{throw new Error('音乐无法播放，请选择有效音频并点击重试');}}
  stop(){this.audio.pause();}
  replace(blob){this.stop();if(this.url)URL.revokeObjectURL(this.url);this.url=URL.createObjectURL(blob);this.audio.src=this.url;this.custom=true;}
  restore(){this.stop();if(this.url)URL.revokeObjectURL(this.url);this.audio.removeAttribute('src');this.audio.load();this.url=null;this.custom=false;}
}
