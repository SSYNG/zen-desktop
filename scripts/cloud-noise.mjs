// Original deterministic 3D high-pass/rank dither. No external SDK data.
export function cloudDither(){
  const width=128,height=128,depth=64,count=width*height*depth;
  const white=new Float32Array(count),filtered=new Float32Array(count);let seed=0x5a454e;
  for(let i=0;i<count;i++){seed=(Math.imul(seed,1664525)+1013904223)>>>0;white[i]=seed/4294967296;}
  const at=(x,y,z)=>white[((z+depth)%depth)*width*height+((y+height)%height)*width+(x+width)%width];
  for(let z=0,i=0;z<depth;z++)for(let y=0;y<height;y++)for(let x=0;x<width;x++,i++)filtered[i]=white[i]-(at(x-1,y,z)+at(x+1,y,z)+at(x,y-1,z)+at(x,y+1,z)+at(x,y,z-1)+at(x,y,z+1))/6;
  const order=Uint32Array.from({length:count},(_,i)=>i);order.sort((a,b)=>filtered[a]-filtered[b]);
  const result=new Uint8Array(count);for(let rank=0;rank<count;rank++)result[order[rank]]=Math.floor(rank*256/count);
  return result;
}
