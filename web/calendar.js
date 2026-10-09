export function calendarInfo(date=new Date()){
  const solar=Solar.fromYmd(date.getFullYear(),date.getMonth()+1,date.getDate());const lunar=solar.getLunar();
  let next=null;
  // Search actual calendar days. This handles lunar festival dates and solar terms across years.
  for(let days=0;days<=370;days++){const day=solar.next(days),l=day.getLunar();const festivals=[...day.getFestivals(),...l.getFestivals()];const term=l.getJieQi();let name=festivals[0]||term;if(name){next={name,days};break;}}
  return {solar:`${date.getFullYear()}年${date.getMonth()+1}月${date.getDate()}日`,lunar:`农历 ${lunar.getMonthInChinese()}月${lunar.getDayInChinese()} · 星期${solar.getWeekInChinese()}`,next};
}
