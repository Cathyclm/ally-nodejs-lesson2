// new Date()
// console.log(new Date()); 

// YYYY-MM-DD HH:MM:SS

// 定义格式化时间的方法
function dateFormat(dtStr) {
  const dt = new Date(dtStr);
  const y = dt.getFullYear();
  const m = padZero (dt.getMonth());
  const d = padZero (dt.getDate());
  const h = padZero (dt.getHours());
  const mm = padZero (dt.getMinutes());
  const ss = padZero (dt.getSeconds());

  // console.log('dateTime', `${y}-${m}-${d} ${h}:${mm}:${ss}`);
return `${y}-${m}-${d} ${h}:${mm}:${ss}`
}
// 检查是否需要补0
function padZero(n) {
  // if (n < 10) {
  //   return `0${n}`;
  // } else {
  //   return n;
  // }

// ?:  三元运算符
 return n<10? `0${n}`:n
 
}

// dateFormat("date");

module.exports = {
  dateFormat,
};