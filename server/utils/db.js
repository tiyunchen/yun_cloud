const mongoose = require('mongoose')
const User = require('../models/user')
function connect(){
  const mongoDBurl = 'mongodb://localhost:27017/yun_cloud'
  mongoose.Promise = global.Promise;
  mongoose.connect(mongoDBurl, {useNewUrlParser: true, useUnifiedTopology: true}).then(res => {
    console.log(`数据库链接成功`, mongoDBurl)
  }).catch(err => {
    console.log('数据库链接失败', err)
  })
  const db = mongoose.connection
  // const userModel = new User()
  // userModel.update({username: 'chentyun',email: '949502498@qq.com'})
  // db.on('error', console.error.bind(console, 'connection error:'));
  // db.once('open', function() {
  //     // we're connected!
  //     console.log('链接成功')
  // });
}


module.exports = {
    connect
}
