// 导入fs模块，用const fs 命名常量
// 读取成功，err为null，
// 读取失败 err为对象，data是undefined
// 几点注意：js文件应建立在lesson2下面，而不是files下面。terminal run node read.js 应该在lesson2文件夹下面因为read.js放在lesson2下面。
// 如果第一步有err直接return不再走下面一步
const fs = require("fs");
fs.readFile("./files/1.txt", 'utf-8', function (err, data) {
  if (err) {
    return console.log("err", err);
  }

  console.log('read file succeed', data);
});
