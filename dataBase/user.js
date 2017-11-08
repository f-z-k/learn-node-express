// 数据库模块
// 只做数据处理 不做业务逻辑处理

var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/fzk';
const findUser= function (fn) {
  MongoClient.connect(DB_CONN_STR, function(err, db) {
    var collection = db.collection('users');
    collection.find().toArray(function(err, result) {
      if (err) {
        console.log('错了')
      } else {
        fn (result)
        db.close()
      }
    })
  });
}
module.exports = { findUser }