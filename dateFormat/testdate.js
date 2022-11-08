// 导入dateFormat方法
const Time = require('./date.js');


const dt = new Date();

const newDT = Time.dateFormat(dt);

console.log('newDT', newDT);


