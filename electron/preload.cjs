const {contextBridge,ipcRenderer}=require('electron');
contextBridge.exposeInMainWorld('zenHost',{postMessage:message=>ipcRenderer.send('zen-message',message),addEventListener:(name,listener)=>{if(name==='message')ipcRenderer.on('zen-message',(_event,data)=>listener({data}));}});
