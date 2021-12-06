const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema } = mongoose;
const Base = require('./base');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  sex: String,
  age: Number,
  token: String,
}, { versionKey: false });

// 给分页设一些默认值
mongoosePaginate.paginate.options = {
  lean: true,
  limit: 15,
};
userSchema.plugin(mongoosePaginate);

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

  async find(filter = {}, config = {}) {
    return this.model.paginate({
      ...filter,
      deleted: false,
    }, {
      ...config,
    });
  }
}

module.exports = UserModel;
