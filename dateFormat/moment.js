// 创建moment package.js   npm init

// npm i 安装package.js底下所有的package
// npm i 包名称

// 开发需要用，上线后不需要用的package可以装在devDependency，比如，nodemon
// npm i nodemon -D
// npm i nodemon --save-dev

const moment = require ("moment");

const dt = moment().format("YYYY-MM-DD HH:mm:ss");

console.log(dt);

