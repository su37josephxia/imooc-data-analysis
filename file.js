var fs = require('fs');

module.exports = function writeFile(json) {

    let str = `"${json.id}" "${json.time}" "${json.name}" "${json.person}" "${json.difficulty}" "${json.duration}" "${json.score}"`
    //文件写入
    fs.appendFileSync('./data/data.csv',str+'\r\n');
}