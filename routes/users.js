var express = require('express');
var router = express.Router();
var fs = require('fs')
var path = require('path');
var config = require('./../config/config.js');
/* GET users listing. */
router.get('/info', function(req, res, next) {
  fs.readFile(path.join(__dirname, "/../public/data/user.json"), function(err, data) {
    if (err)
      throw err;
      // console.log(JSON.parse(data.toString()))
      // var obj = JSON.parse(data.toString())
      // // cb(JSON.parse(data.toString()));
      // // console.log(req)
      // var _callback = req.query.callback
      // res.send(_callback + '(' + JSON.stringify(obj) + ')');
      res.jsonp(JSON.parse(data.toString()))
    });
});
router.get('/mongodb', function(req, res, next) {
  // var mongoose = require('mongoose');
  // mongoose.connect('mongodb://localhost/fzk')
  // var db = mongoose.connection;
  // db.on('open', function(){
  //   console.log('MongoDB Connection Successed');
  // });
  // // 连接失败
  // db.on('error', function(){
  //   console.log('MongoDB Connection Error');
  // });
  console.log(config)
  var MongoClient = require('mongodb').MongoClient;
  var DB_CONN_STR = config.mongodbString;
  MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
    var collection = db.collection('user'); // 连接到user
    // console.log(collection.find({name:"改动"}))
    collection.find({age:"6"}).toArray(function(err, result) {
      if (err) {
        console.log('错了')
      } else {
        res.jsonp(result)
        db.close()
      }
    })
  });
});
module.exports = router;
