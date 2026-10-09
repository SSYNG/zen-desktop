using System;
using System.Drawing;
using System.Runtime.InteropServices;
using System.Windows.Forms;
namespace ZenDesktop {
  class Desktop {
    IntPtr parent,defView,icons;bool captured,originalVisible;public bool Hidden{get;private set;}public bool Raised{get;private set;}
    public string Description{get;private set;}
    IntPtr IconLayer(){IntPtr layer=IntPtr.Zero;Native.EnumWindows((h,l)=>{var def=Native.FindWindowEx(h,IntPtr.Zero,"SHELLDLL_DefView",null);if(def!=IntPtr.Zero){layer=def;return false;}return true;},IntPtr.Zero);return layer;}
    public bool IsParentOf(IntPtr h){return parent!=IntPtr.Zero&&Native.IsWindow(parent)&&Native.GetParent(h)==parent;}
    public bool IconsVisible{get{var def=IconLayer();var list=Native.FindWindowEx(def,IntPtr.Zero,"SysListView32",null);return list!=IntPtr.Zero&&Native.IsWindowVisible(list);}}
    public bool IconsRestored{get{return !captured||IconsVisible==originalVisible;}}
    public bool CorrectOrder(IntPtr h){return !Raised||Native.GetWindow(h,3)==defView;}
    public bool Attach(IntPtr window,Rectangle screen){
      IntPtr prog=Native.FindWindow("Progman",null),result;if(prog==IntPtr.Zero)return false;
      Native.SendMessageTimeout(prog,0x052C,IntPtr.Zero,IntPtr.Zero,2,1000,out result);Native.SendMessageTimeout(prog,0x052C,new IntPtr(0xD),IntPtr.Zero,2,1000,out result);Native.SendMessageTimeout(prog,0x052C,new IntPtr(0xD),new IntPtr(1),2,1000,out result);
      defView=IconLayer();if(defView==IntPtr.Zero)return false;
      var childWorker=Native.FindWindowEx(prog,IntPtr.Zero,"WorkerW",null);Raised=Native.GetParent(defView)==prog&&childWorker!=IntPtr.Zero;
      parent=Raised?prog:Native.FindWindowEx(IntPtr.Zero,Native.GetParent(defView),"WorkerW",null);if(parent==IntPtr.Zero)return false;
      icons=Native.FindWindowEx(defView,IntPtr.Zero,"SysListView32",null);if(!captured&&icons!=IntPtr.Zero){originalVisible=Native.IsWindowVisible(icons);captured=true;}
      long style=Native.GetWindowLong(window,-16).ToInt64();style=(style&~0x80C40000L)|0x56000000L;Native.SetWindowLong(window,-16,new IntPtr(style));
      long ex=Native.GetWindowLong(window,-20).ToInt64();ex=(ex&~0x260300L)|0x08000080L;if(Raised)ex|=0x80000L;else ex&=~0x80000L;Native.SetWindowLong(window,-20,new IntPtr(ex));
      if(Native.GetParent(window)!=parent){Native.SetLastError(0);var previous=Native.SetParent(window,parent);if(previous==IntPtr.Zero&&Marshal.GetLastWin32Error()!=0)return false;}
      if(Raised&&!Native.SetLayeredWindowAttributes(window,0x00FF00FF,255,1))return false;
      Point origin=new Point(screen.Left,screen.Top);Native.ScreenToClient(parent,ref origin);
      bool positioned=Native.SetWindowPos(window,Raised?defView:new IntPtr(1),origin.X,origin.Y,screen.Width,screen.Height,0x70);Native.ShowWindow(window,5);
      Native.RECT wr,cr;Native.GetWindowRect(window,out wr);Native.GetClientRect(window,out cr);
      Description="bounds="+wr.left+","+wr.top+","+(wr.right-wr.left)+","+(wr.bottom-wr.top)+" client="+cr.right+","+cr.bottom+" parent="+Native.ClassName(parent)+" raised="+Raised+" correctOrder="+CorrectOrder(window)+" visible="+Native.IsWindowVisible(window);
      return positioned&&IsParentOf(window)&&CorrectOrder(window);
    }
    public void SetHidden(bool hidden){var layer=IconLayer();icons=Native.FindWindowEx(layer,IntPtr.Zero,"SysListView32",null);if(icons==IntPtr.Zero)return;Hidden=hidden;Native.ShowWindow(icons,hidden?0:5);}
    public void RestoreIcons(){if(captured)SetHidden(false);}
    public bool IsBackground(Point p){var root=Native.GetAncestor(Native.WindowFromPoint(p),2);string c=Native.ClassName(root);if(c!="Progman"&&c!="WorkerW")return false;if(!Hidden&&icons!=IntPtr.Zero&&Native.IsWindowVisible(icons)&&Native.IconAt(icons,p))return false;return true;}
  }
  class MouseObserver:IDisposable {
    IntPtr hook;Native.HookProc callback;Action<Point> click,hover;int lastMove;
    public MouseObserver(Action<Point> clickHandler,Action<Point> hoverHandler){click=clickHandler;hover=hoverHandler;callback=Observe;hook=Native.SetWindowsHookEx(14,callback,Native.GetModuleHandle(null),0);if(hook==IntPtr.Zero)throw new System.ComponentModel.Win32Exception();}
    IntPtr Observe(int n,IntPtr w,IntPtr l){if(n>=0){int kind=w.ToInt32();if(kind==0x201||(kind==0x200&&unchecked(Environment.TickCount-lastMove)>=40)){var data=(Native.MouseData)Marshal.PtrToStructure(l,typeof(Native.MouseData));if(kind==0x201)click(data.point);else{lastMove=Environment.TickCount;hover(data.point);}}}return Native.CallNextHookEx(hook,n,w,l);}
    public void Dispose(){if(hook!=IntPtr.Zero){Native.UnhookWindowsHookEx(hook);hook=IntPtr.Zero;}}
  }
}
