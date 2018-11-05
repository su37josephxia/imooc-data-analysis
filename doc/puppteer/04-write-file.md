###  安装
``` bash
cnpm i --save fs
cnpm i --save moment
```
### package 增加忽略
``` bash
nodemon app.js -i ./data/
```
### 写入文件
``` js
var fs = require('fs');

module.exports = function writeFile(json) {

    let str = `"${json.id}" "${json.time}" "${json.name}" "${json.person}" "${json.difficulty}" "${json.duration}" "${json.score}"`
    //文件写入
    fs.appendFileSync('./data/data.csv',str+'\r\n');
}
```