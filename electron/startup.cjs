const fs=require('node:fs');const path=require('node:path');
const name='ZenDesktop',args=['--autostart'];
class StartupSettings {
 constructor(app,executable,supported){this.app=app;this.executable=executable;this.supported=supported;this.record=path.join(app.getPath('userData'),'startup.json');}
 options(executable=this.executable){return {path:executable,args,name};}
 item(executable){return this.app.getLoginItemSettings(this.options(executable)).launchItems?.find(i=>i.name===name&&i.scope==='user');}
 read(){if(!this.supported)return {supported:false,enabled:false};return {supported:true,enabled:!!this.item(this.executable)?.enabled};}
 remember(){fs.writeFileSync(this.record,JSON.stringify({path:this.executable}));}
 migrate(){
  if(!this.supported)return this.read();
  let old;try{old=JSON.parse(fs.readFileSync(this.record,'utf8')).path;}catch{}
  if(typeof old==='string'&&old!==this.executable){const item=this.item(old);if(item){
   // Keep Task Manager's disabled state when moving to a newer portable version.
   this.app.setLoginItemSettings({...this.options(),openAtLogin:true,enabled:item.enabled});this.remember();
  }}return this.read();
 }
 set(enabled){if(!this.supported)throw Error('请在 Windows 便携程序中设置开机自启动');
  this.app.setLoginItemSettings({...this.options(),openAtLogin:enabled,enabled});this.remember();
  const actual=this.read();if(actual.enabled!==enabled)throw Error('Windows 未能更新启动项，请检查系统启动应用设置');return actual;
 }
}
module.exports={StartupSettings};
