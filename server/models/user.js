const mongoose = require('mongoose');

const {Schema} = mongoose;
const Base = require('./base');

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  sex: String,
  age: Number,
  token: String,
}, {versionKey: false});

class UserModel extends Base {
  constructor() {
    super();
    this.model = mongoose.model('user', userSchema);
  }

  save(data) {
    // eslint-disable-next-line new-cap
    const user = new this.model(data);
    console.log('11');
    // return user.save((error)=>{
    //     console.log('数据添加结果', error)
    //     if(error){
    //         return Promise.reject(error)
    //     } else {
    //         return Promise.resolve()
    //     }
    // })
  }
}

module.exports = UserModel;
