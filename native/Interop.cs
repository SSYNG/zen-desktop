using System;
using System.Drawing;
using System.Runtime.InteropServices;
using System.Windows.Forms;
namespace ZenDesktop {
  static class Native {
    [DllImport("user32.dll")] public static extern IntPtr SetThreadDpiAwarenessContext(IntPtr context);
    [DllImport("user32.dll")] public static extern IntPtr GetWindowDpiAwarenessContext(IntPtr window);
    [StructLayout(LayoutKind.Sequential)]public struct RECT{public int left,top,right,bottom;}
    [DllImport("user32.dll")]public static extern bool GetWindowRect(IntPtr h,out RECT rect);
    [DllImport("user32.dll")]public static extern bool GetClientRect(IntPtr h,out RECT rect);
    public delegate bool EnumProc(IntPtr h,IntPtr l);public delegate IntPtr HookProc(int n,IntPtr w,IntPtr l);
    [StructLayout(LayoutKind.Sequential)]public struct MouseData {public Point point;public uint data,flags,time;public UIntPtr extra;}
    [DllImport("user32.dll")]public static extern bool EnumWindows(EnumProc p,IntPtr l);
    [DllImport("user32.dll")]public static extern bool EnumChildWindows(IntPtr h,EnumProc p,IntPtr l);
    [DllImport("user32.dll",CharSet=CharSet.Unicode)]public static extern IntPtr FindWindow(string c,string n);
    [DllImport("user32.dll",CharSet=CharSet.Unicode)]public static extern IntPtr FindWindowEx(IntPtr p,IntPtr a,string c,string n);
    [DllImport("user32.dll",SetLastError=true)]public static extern IntPtr SetParent(IntPtr c,IntPtr p);
    [DllImport("user32.dll")]public static extern IntPtr GetParent(IntPtr h);
    [DllImport("user32.dll")]public static extern bool IsChild(IntPtr parent,IntPtr child);
    [DllImport("kernel32.dll")]public static extern void SetLastError(uint e);
    [DllImport("user32.dll")]public static extern bool SetWindowPos(IntPtr h,IntPtr a,int x,int y,int w,int z,uint f);
    [DllImport("user32.dll")]public static extern bool ShowWindow(IntPtr h,int c);
    [DllImport("user32.dll")]public static extern bool IsWindowVisible(IntPtr h);
    [DllImport("user32.dll")]public static extern bool IsWindow(IntPtr h);
    [DllImport("user32.dll")]public static extern IntPtr SendMessageTimeout(IntPtr h,uint m,IntPtr w,IntPtr l,uint f,uint t,out IntPtr r);
    [DllImport("user32.dll")]public static extern uint GetDoubleClickTime();
    [DllImport("user32.dll")]public static extern IntPtr WindowFromPoint(Point p);
    [DllImport("user32.dll")]public static extern IntPtr GetAncestor(IntPtr h,uint f);
    [DllImport("user32.dll",CharSet=CharSet.Unicode)]public static extern int GetClassName(IntPtr h,System.Text.StringBuilder b,int n);
    [DllImport("user32.dll",SetLastError=true)]public static extern IntPtr SetWindowsHookEx(int id,HookProc p,IntPtr m,uint t);
    [DllImport("user32.dll")]public static extern bool UnhookWindowsHookEx(IntPtr h);
    [DllImport("user32.dll")]public static extern IntPtr CallNextHookEx(IntPtr h,int n,IntPtr w,IntPtr l);
    [DllImport("kernel32.dll",CharSet=CharSet.Unicode)]public static extern IntPtr GetModuleHandle(string n);
    [DllImport("user32.dll",EntryPoint="GetWindowLongPtrW")]public static extern IntPtr GetWindowLong(IntPtr h,int index);
    [DllImport("user32.dll",EntryPoint="SetWindowLongPtrW")]public static extern IntPtr SetWindowLong(IntPtr h,int index,IntPtr value);
    public static void MakeTopLevel(IntPtr h){SetParent(h,IntPtr.Zero);SetWindowLong(h,-16,new IntPtr((GetWindowLong(h,-16).ToInt64()&~0x40000000L)|0x80000000L));SetWindowLong(h,-8,IntPtr.Zero);}
    public static string ClassName(IntPtr h){var b=new System.Text.StringBuilder(128);GetClassName(h,b,128);return b.ToString();}
    [DllImport("user32.dll",CharSet=CharSet.Unicode)]static extern bool EnumDisplaySettings(string name,int mode,IntPtr devMode);
    public static int RefreshRate(){var mode=Marshal.AllocHGlobal(220);try{for(int i=0;i<220;i++)Marshal.WriteByte(mode,i,0);Marshal.WriteInt16(mode,68,220);if(EnumDisplaySettings(Screen.PrimaryScreen.DeviceName,-1,mode))return Marshal.ReadInt32(mode,184);return 0;}finally{Marshal.FreeHGlobal(mode);}}
    [DllImport("user32.dll")]static extern uint GetWindowThreadProcessId(IntPtr h,out uint p);
    [DllImport("user32.dll")]public static extern bool ScreenToClient(IntPtr h,ref Point p);
    [DllImport("user32.dll")]public static extern IntPtr GetWindow(IntPtr h,uint command);
    [DllImport("user32.dll",SetLastError=true)]public static extern bool SetLayeredWindowAttributes(IntPtr h,uint color,byte alpha,uint flags);
    [DllImport("user32.dll")]static extern IntPtr SendMessage(IntPtr h,uint m,IntPtr w,IntPtr l);
    [DllImport("kernel32.dll")]static extern IntPtr OpenProcess(uint a,bool i,uint p);
    [DllImport("kernel32.dll")]static extern IntPtr VirtualAllocEx(IntPtr h,IntPtr a,UIntPtr s,uint t,uint p);
    [DllImport("kernel32.dll")]static extern bool VirtualFreeEx(IntPtr h,IntPtr a,UIntPtr s,uint t);
    [DllImport("kernel32.dll")]static extern bool WriteProcessMemory(IntPtr h,IntPtr a,byte[] b,int s,out IntPtr n);
    [DllImport("kernel32.dll")]static extern bool CloseHandle(IntPtr h);
    public static bool IconAt(IntPtr list,Point p){ScreenToClient(list,ref p);uint pid;GetWindowThreadProcessId(list,out pid);var process=OpenProcess(0x28,false,pid);if(process==IntPtr.Zero)return true;IntPtr mem=IntPtr.Zero;try{mem=VirtualAllocEx(process,IntPtr.Zero,new UIntPtr(24),0x3000,4);if(mem==IntPtr.Zero)return true;var b=new byte[24];Buffer.BlockCopy(BitConverter.GetBytes(p.X),0,b,0,4);Buffer.BlockCopy(BitConverter.GetBytes(p.Y),0,b,4,4);IntPtr written;if(!WriteProcessMemory(process,mem,b,b.Length,out written))return true;return SendMessage(list,0x1012,IntPtr.Zero,mem).ToInt32()>=0;}finally{if(mem!=IntPtr.Zero)VirtualFreeEx(process,mem,UIntPtr.Zero,0x8000);CloseHandle(process);}}
  }
}
