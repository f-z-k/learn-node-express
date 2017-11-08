
// 用户信息操作
var dataFn = require('./../dataBase/user')
const goLogin = function (req, res) {
  dataFn.findUser(function (data) {
    //  数据逻辑处理
    res.json(data)
  })
}
const goResiter = function (req, res) {
  res.send('注册改变1123werwe')
}
module.exports = { goLogin, goResiter }