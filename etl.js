var mysql = require('mysql');
var TEST_DATABASE = 'imooc';
var TEST_TABLE = 'imooc_log';

//创建连接 

var client = mysql.createConnection({
    user: 'imooc',
    password: '111111',
});

client.connect();
client.query("use " + TEST_DATABASE);
createTable()
insertTable()


function createTable() {
    var sql = `
    CREATE TABLE IF NOT EXISTS imooc_log(
        page_id VARCHAR(200),
        time VARCHAR(200),
        name VARCHAR(200),
        person VARCHAR(200),
        difficulty VARCHAR(200),
        duration VARCHAR(200),
        score VARCHAR(200)
     )
    `
    client.query(sql, null, function (err, result) {
        if (err) {
            console.log('[CREATE ERROR] - ', err.message);
            return;
        }
        console.log('CREATE ID:', result);
    });
}



function insertTable() {
    var userAddSql = 'INSERT INTO ' + TEST_TABLE + ' VALUES(?,?,?,?,?,?,?)';
    var userAddSql_Params = ["295", "2018-11-05 19:44:50", "Go语言实战抽奖系统", "28", "中级", "14小时", "10.00分"];
    //增 ad
    client.query(userAddSql, userAddSql_Params, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
        }
        console.log('INSERT ID:', result);
    });
}

function selectTable() {
    client.query(
        'SELECT * FROM ' + TEST_TABLE,
        function selectCb(err, results, fields) {
            if (err) {
                throw err;
            }
            if (results) {
                for (var i = 0; i < results.length; i++) {
                    console.log(results);
                }
            }
            client.end();
        }
    );
}