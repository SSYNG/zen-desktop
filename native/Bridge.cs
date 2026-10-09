using System;
using System.Drawing;
using System.Globalization;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Script.Serialization;
using System.Windows.Forms;
namespace ZenDesktop {
  class Bridge {
    static readonly JavaScriptSerializer json=new JavaScriptSerializer();static readonly ConcurrentQueue<string> input=new ConcurrentQueue<string>();
    static IntPtr window;static Desktop desktop;static MouseObserver mouse;static Timer timer,click;static Point pending;static bool calendar=true,quit;static float scale=1;
    static void Emit(object value){Console.WriteLine(json.Serialize(value));Console.Out.Flush();}
    [STAThread]static void Main(string[] args){
      try{
        window=new IntPtr(long.Parse(args[0],CultureInfo.InvariantCulture));if(args.Length>1)scale=float.Parse(args[1],CultureInfo.InvariantCulture);
        Application.EnableVisualStyles();desktop=new Desktop();Mount();
        mouse=new MouseObserver(Click,Hover);click=new Timer{Interval=(int)Native.GetDoubleClickTime()};click.Tick+=(s,e)=>{click.Stop();Feed(pending);};
        Task.Run(()=>{string line;while((line=Console.ReadLine())!=null)input.Enqueue(line);input.Enqueue("{\"op\":\"quit\"}");});
        timer=new Timer{Interval=30};int ticks=0;timer.Tick+=(s,e)=>{
          try{string line;while(input.TryDequeue(out line)){var m=json.Deserialize<Dictionary<string,object>>(line);var op=Convert.ToString(m["op"]);if(op=="quit"){quit=true;Application.ExitThread();return;}if(op=="mount")Mount();if(op=="icons")desktop.SetHidden(Convert.ToBoolean(m["hidden"]));if(op=="config"){calendar=Convert.ToBoolean(m["calendar"]);desktop.SetHidden(Convert.ToBoolean(m["icons"]));}}
            if(++ticks%70==0&&!desktop.IsParentOf(window))Mount();
          }catch(Exception ex){Emit(new{type="error",message=ex.ToString()});}
        };timer.Start();Emit(new{type="ready",doubleClickTime=Native.GetDoubleClickTime(),refreshRate=Native.RefreshRate()});Application.Run();
      }catch(Exception ex){Emit(new{type="error",message=ex.ToString()});}
      finally{if(desktop!=null){desktop.RestoreIcons();Emit(new{type="shutdown",iconsVisible=desktop.IconsVisible});}if(mouse!=null)mouse.Dispose();}
    }
    static void Mount(){bool ok=desktop.Attach(window,Screen.PrimaryScreen.Bounds);Emit(new{type="mounted",success=ok,description=desktop.Description});}
    static bool Own(Point p){var h=Native.WindowFromPoint(p);return h==window||Native.IsChild(window,h);}
    static void Click(Point p){if(quit||Own(p)||!desktop.IsBackground(p))return;var b=Screen.PrimaryScreen.Bounds;if(!b.Contains(p))return;int x=(int)((p.X-b.X)/scale),y=(int)((p.Y-b.Y)/scale),width=(int)(b.Width/scale),buttonY=calendar?208:28;
      if(x>=width-75&&x<=width-30&&y>=buttonY&&y<=buttonY+45){click.Stop();Emit(new{type="openSettings"});return;}
      if(calendar&&x>=width-275&&x<=width-30&&y>=28&&y<202)return;
      if(click.Enabled&&Math.Abs(pending.X-(p.X-b.X))<SystemInformation.DoubleClickSize.Width&&Math.Abs(pending.Y-(p.Y-b.Y))<SystemInformation.DoubleClickSize.Height){click.Stop();desktop.SetHidden(!desktop.Hidden);Emit(new{type="icons",hidden=desktop.Hidden});return;}
      if(click.Enabled)Feed(pending);pending=new Point(p.X-b.X,p.Y-b.Y);click.Start();
    }
    static void Feed(Point p){var b=Screen.PrimaryScreen.Bounds;Emit(new{type="feed",x=p.X/(double)b.Width,y=p.Y/(double)b.Height,normalized=true});}
    static void Hover(Point p){var b=Screen.PrimaryScreen.Bounds;int x=(int)((p.X-b.X)/scale),y=(int)((p.Y-b.Y)/scale),w=(int)(b.Width/scale),buttonY=calendar?208:28;bool bg=desktop.IsBackground(p);Emit(new{type="desktopHover",calendar=bg&&calendar&&x>=w-275&&x<=w-30&&y>=28&&y<202,settings=bg&&x>=w-75&&x<=w-30&&y>=buttonY&&y<=buttonY+45});}
  }
}
