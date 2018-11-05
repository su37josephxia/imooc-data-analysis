var mysql = require('mysql');
var TEST_DATABASE = 'imooc';
var TEST_TABLE = 'imock_log';

//创建连接 

var client = mysql.createConnection({
    user: 'imooc',
    password: '111111',
});

client.connect();
client.query("use " + TEST_DATABASE);


function createTable(){



}



function insertTable() {
    var userAddSql = 'INSERT INTO node_user(id,name,age) VALUES(0,?,?)';
    var userAddSql_Params = ['Wilson', 55];
    //增 ad
    connection.query(userAddSql, userAddSql_Params, function (err, result) {
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