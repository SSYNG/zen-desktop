const {app,BrowserWindow,Tray,Menu,ipcMain,screen,dialog}=require('electron');
const {spawn}=require('node:child_process');const fs=require('node:fs');const path=require('node:path');const readline=require('node:readline');
const preview=process.argv.includes('--preview'),smoke=process.argv.includes('--smoke');let wallpaper,settings,tray,bridge,config,exiting=false,mounted=false,heartbeat={},settingsReady,openTask,displayRefreshRate;
app.setName('禅意桌面');app.setPath('userData',path.join(app.getPath('appData'),'ZenDesktop-Electron'));
app.commandLine.appendSwitch('disable-backgrounding-occluded-windows');
app.commandLine.appendSwitch('disable-features','CalculateNativeWinOcclusion');
app.commandLine.appendSwitch('disable-renderer-backgrounding');
app.commandLine.appendSwitch('disable-background-timer-throttling');
const logFile=path.join(app.getPath('userData'),'host-log.txt');fs.mkdirSync(path.dirname(logFile),{recursive:true});const log=value=>fs.appendFileSync(logFile,new Date().toISOString()+' '+(typeof value==='string'?value:JSON.stringify(value))+'\n');
if(!app.requestSingleInstanceLock()){app.quit();}else{
app.on('second-instance',(_event,args)=>{if(args.includes('--quit'))app.quit();else openSettings();});app.whenReady().then(()=>process.argv.includes('--quit')?app.quit():start()).catch(fail);
}
function post(win,message){if(win&&!win.isDestroyed())win.webContents.send('zen-message',message);}
function command(value){if(bridge?.stdin.writable)bridge.stdin.write(JSON.stringify(value)+'\n');}
function fail(error){log(error.stack||String(error));dialog.showErrorBox('禅意桌面',String(error.message||error));app.quit();}
function secure(win){win.webContents.setWindowOpenHandler(()=>({action:'deny'}));win.webContents.on('will-navigate',(event,url)=>{if(!url.startsWith('file://'))event.preventDefault();});win.webContents.session.setPermissionRequestHandler((_wc,_permission,callback)=>callback(false));}
function makeWindow(options){const win=new BrowserWindow({...options,icon:path.join(__dirname,'../assets/zen.ico'),backgroundColor:'#315b4d',webPreferences:{preload:path.join(__dirname,'preload.cjs'),sandbox:true,contextIsolation:true,nodeIntegration:false,backgroundThrottling:false}});secure(win);return win;}
async function start(){
 const bounds=screen.getPrimaryDisplay().bounds;
 wallpaper=makeWindow(preview?{x:80,y:80,width:1280,height:800,show:false,title:'禅意桌面 · 预览'}:{...bounds,show:false,frame:false,resizable:false,thickFrame:false,roundedCorners:false,hasShadow:false,skipTaskbar:true,focusable:false,title:'禅意桌面 · 桌面壁纸'});
 wallpaper.on('closed',()=>{if(!exiting)app.quit();});
 tray=new Tray(path.join(__dirname,'../assets/zen.ico'));tray.setToolTip('禅意桌面');tray.setContextMenu(Menu.buildFromTemplate([{label:'打开设置',click:openSettings},{label:'显示 / 隐藏桌面图标',click:()=>{config.icons=!config.icons;command({op:'icons',hidden:config.icons});post(wallpaper,{type:'icons',hidden:config.icons});}},{label:'重新挂载',click:()=>command({op:'mount'})},{label:'退出禅意桌面',click:()=>app.quit()}]));tray.on('double-click',openSettings);
 ipcMain.on('zen-message',(event,message)=>{if(![wallpaper?.webContents,settings?.webContents].includes(event.sender))return;const fromSettings=event.sender===settings?.webContents;if(message.type!=='rendered')log({source:fromSettings?'settings':'wallpaper',...message});
  switch(message.type){
   case 'ready':if(fromSettings){post(settings,{type:'config',config});settingsReady?.();}else{config=message.config;if(preview)wallpaper.show();else{wallpaper.showInactive();startBridge();}if(smoke)runSmoke().catch(fail);}break;
   case 'settings':config=message.config;post(fromSettings?wallpaper:settings,{type:'config',config});command({op:'config',icons:config.icons,calendar:config.calendar});break;
   case 'openSettings':openSettings();break;
   case 'panel':if(fromSettings&&!message.open)settings.hide();break;
   case 'icons':if(config)config.icons=message.hidden;command({op:'icons',hidden:message.hidden});break;
   case 'musicChanged':post(wallpaper,{type:'musicChanged'});break;
   case 'rendered':heartbeat=message;break;
   case 'quit':app.quit();break;
  }
 });
 await wallpaper.loadFile(path.join(__dirname,'../web/index.html'),{query:{surface:'wallpaper'}});
}
function startBridge(){
 const hwnd=wallpaper.getNativeWindowHandle().readBigUInt64LE().toString();const display=screen.getPrimaryDisplay();
 bridge=spawn(path.join(__dirname,'../native-bin/DesktopBridge.exe'),[hwnd,String(display.scaleFactor)],{windowsHide:true,stdio:['pipe','pipe','pipe']});
 bridge.on('error',fail);bridge.stderr.on('data',data=>log(String(data)));
 readline.createInterface({input:bridge.stdout}).on('line',line=>{try{const message=JSON.parse(line);if(message.type!=='desktopHover')log(message);
  if(message.type==='mounted'){mounted=message.success;if(!mounted){dialog.showErrorBox('禅意桌面','无法挂载桌面。请退出其他壁纸程序后重试。');app.quit();}}
  else if(message.type==='ready'){displayRefreshRate=message.refreshRate;const interval=1000/Math.max(30,Math.min(360,displayRefreshRate||60));const pump=setInterval(()=>{if(!exiting)post(wallpaper,{type:'frameTick',interval});},Math.max(1,Math.round(interval)));wallpaper.once('closed',()=>clearInterval(pump));command({op:'config',icons:config.icons,calendar:config.calendar});post(wallpaper,{type:'doubleClickTime',value:message.doubleClickTime});}
  else if(message.type==='openSettings')openSettings();
  else if(message.type==='error')fail(new Error(message.message));
  else{post(wallpaper,message);if(message.type==='icons')post(settings,message);}
 }catch(error){fail(error);}});
 bridge.on('exit',code=>{log('Desktop bridge exited '+code);if(!exiting)app.quit();});
}
async function openSettings(){
 if(!config||exiting)return;
 if(openTask)return openTask;
 openTask=(async()=>{if(!settings||settings.isDestroyed()){
   const area=screen.getPrimaryDisplay().workArea;settings=makeWindow({x:area.x+area.width-404,y:area.y+24,width:380,height:Math.min(700,area.height-48),show:false,frame:false,title:'禅意桌面 · 设置'});
   settings.on('close',event=>{if(!exiting){event.preventDefault();post(settings,{type:'closeSettings'});}});
   const ready=new Promise(resolve=>settingsReady=resolve);await settings.loadFile(path.join(__dirname,'../web/index.html'),{query:{surface:'settings'}});await Promise.race([ready,new Promise((_,reject)=>setTimeout(()=>reject(new Error('设置页面加载超时')),15000))]);
  }post(settings,{type:'config',config});settings.show();if(!settings.isVisible()){await new Promise(resolve=>setTimeout(resolve,50));settings.show();}settings.focus();post(settings,{type:'openSettings'});
 })().catch(error=>{log(error.stack);dialog.showErrorBox('禅意桌面','设置无法打开：'+error.message);if(settings&&!settings.isDestroyed())settings.destroy();settings=null;}).finally(()=>openTask=null);
 return openTask;
}
async function runSmoke(){
 const initial={...config,species:[...config.species]};
 const pause=ms=>new Promise(resolve=>setTimeout(resolve,ms));
 const diagnose=()=>wallpaper.webContents.executeJavaScript('window.zenDiagnostics()');
 const select=selector=>settings.webContents.executeJavaScript(`document.querySelector(${JSON.stringify(selector)}).click()`);
 await pause(3000);await openSettings();await pause(400);const separate=!!settings?.isVisible();await select('[data-scene="pond"]');await pause(400);const before=heartbeat.frames,beforeFish=await diagnose();
 await settings.webContents.executeJavaScript("document.getElementById('close').click()");await new Promise(resolve=>setTimeout(resolve,8000));
 const afterFish=await wallpaper.webContents.executeJavaScript('window.zenDiagnostics()');
 post(wallpaper,{type:'feed',x:.05,y:.05,normalized:true});await new Promise(resolve=>setTimeout(resolve,100));
 const fed=await wallpaper.webContents.executeJavaScript('window.zenDiagnostics()');const food=fed.foodState.at(-1);
 const result={displayRefreshRate,gpu:app.getGPUFeatureStatus(),profile:afterFish.profile,viewport:afterFish.viewport,feedPositionCorrect:!!food&&Math.abs(food.x-fed.viewport.width*.05)<.1&&Math.abs(food.y-fed.viewport.height*.05)<.1,fishMoving:afterFish.fishState.some((f,i)=>Math.hypot(f.x-beforeFish.fishState[i].x,f.y-beforeFish.fishState[i].y)>2),simulationAdvancing:afterFish.time>beforeFish.time,pageVisibility:heartbeat.pageVisibility,mounted:preview?'preview':mounted,separateSettings:separate,settingsClosed:!settings.isVisible(),wallpaperVisible:wallpaper.isVisible(),engine:heartbeat.engine,rendering:heartbeat.frames>before};
 try{
  await openSettings();await pause(400);await select('[data-scene="clouds"]');await select('#cloud-fixed');await select('[data-cloud-time="06:20"]');
  const deadline=Date.now()+30000;let cloud;do{await pause(250);cloud=await diagnose();}while(!cloud.cloud?.ready&&cloud.scene==='clouds'&&Date.now()<deadline);
  if(!cloud.cloud?.ready)throw Error('云海未完成初始化');await select('#close');await pause(4000);const cloudBefore=await diagnose();const imageBefore=await wallpaper.webContents.capturePage();await pause(2000);const cloudAfter=await diagnose();const imageAfter=await wallpaper.webContents.capturePage();
  result.cloud={ready:cloudAfter.cloud.ready,fixedTimeCorrect:cloudAfter.cloud.minutes===380,animationAdvancing:cloudAfter.cloud.frames>cloudBefore.cloud.frames&&cloudAfter.cloud.elapsed>cloudBefore.cloud.elapsed,pixelsChanging:!imageBefore.toPNG().equals(imageAfter.toPNG()),settingsClosed:!settings.isVisible(),profile:cloudAfter.profile,gpuMs:cloudAfter.cloud.gpuMs,renderSize:cloudAfter.cloud.renderSize};fs.writeFileSync(path.join(app.getPath('userData'),'cloud-smoke.png'),imageAfter.toPNG());
  await openSettings();await pause(400);await select('#cloud-realtime');await pause(400);const realtime=await diagnose(),now=new Date();result.cloud.realtimeCorrect=Math.abs(realtime.cloud.minutes-(now.getHours()*60+now.getMinutes()+now.getSeconds()/60))<.1;
  await select('[data-scene="pond"]');await select('#close');await pause(1000);const resumed=await diagnose();result.pondResumed=resumed.scene==='pond'&&resumed.time>afterFish.time;
 }catch(error){result.cloudError=error.message;}finally{
  config=initial;post(wallpaper,{type:'config',config});post(settings,{type:'config',config});await wallpaper.webContents.executeJavaScript(`localStorage.setItem('zen-settings-v1',${JSON.stringify(JSON.stringify(initial))})`);await pause(100);
 }
 log(result);fs.writeFileSync(path.join(app.getPath('userData'),'smoke-result.json'),JSON.stringify(result,null,2));app.quit();
}
app.on('window-all-closed',()=>{});app.on('before-quit',event=>{if(exiting)return;exiting=true;if(bridge?.stdin.writable){event.preventDefault();command({op:'quit'});bridge.once('exit',()=>app.quit());setTimeout(()=>app.quit(),3000);}tray?.destroy();});
