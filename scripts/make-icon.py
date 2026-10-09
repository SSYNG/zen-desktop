from PIL import Image, ImageDraw
from pathlib import Path
import math
S=4
im=Image.new('RGBA',(256*S,256*S));d=ImageDraw.Draw(im)
def ellipse(box,color,width=None):
 b=tuple(int(x*S) for x in box)
 if width:d.ellipse(b,outline=color,width=int(width*S))
 else:d.ellipse(b,fill=color)
def poly(points,color):d.polygon([(round(x*S),round(y*S)) for x,y in points],fill=color)
def bez(points):
 out=[]
 for i in range(41):
  t=i/40;u=1-t;out.append((u**3*points[0][0]+3*u*u*t*points[1][0]+3*u*t*t*points[2][0]+t**3*points[3][0],u**3*points[0][1]+3*u*u*t*points[1][1]+3*u*t*t*points[2][1]+t**3*points[3][1]))
 return out
ellipse((6,6,250,250),'#315b4d');ellipse((27,27,229,229),'#93af91',2)
# A single koi curved along a quiet open circle.
fish=bez([(176,70),(219,111),(194,169),(118,180)])+bez([(118,180),(174,147),(185,120),(163,94)])+bez([(163,94),(155,80),(160,66),(176,70)])
poly(fish,'#f2ead1');poly(bez([(169,84),(193,95),(194,113),(178,123)])+[(172,110)],'#c57a58')
poly([(124,175),(103,162),(98,188),(116,179),(112,204),(141,183)],'#e3dfbd')
poly([(180,128),(209,133),(190,145)],'#c6d5b1');ellipse((175,80,180,85),'#284739')
# Lotus leaf: a readable gold-green disc with its characteristic notch.
ellipse((56,64,125,133),'#aabc83');poly([(90,99),(107,59),(130,85)],'#315b4d')
d.line([(int(x*S),int(y*S)) for x,y in [(89,99),(65,117)]],fill='#e5e6bb',width=2*S)
im=im.resize((256,256),Image.Resampling.LANCZOS)
Path('assets').mkdir(exist_ok=True);im.save('assets/zen-icon.png');im.save('assets/zen.ico',sizes=[(16,16),(24,24),(32,32),(48,48),(64,64),(128,128),(256,256)])
