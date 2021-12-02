const mongoose = require('mongoose');

const { Schema } = mongoose;
const Base = require('./base');

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  }, // 标题
  endTime: String, // 截止时间
  createTime: { type: Date, default: Date.now }, // 创建时间
  updateTime: Date, // 更新时间
  remind: { type: Boolean, default: false }, // 是否提醒
  finished: { type: Boolean, default: false }, // 是否完成
  deleted: { type: Boolean, default: false },
  author: {
    type: Schema.Types.ObjectId, ref: 'user',
  },

}, { versionKey: false });

class TodoModel extends Base {
  constructor(props) {
    super(props);
    this.model = mongoose.model('todo', todoSchema);
  }

  async findOne(payload = {}) {
    return this.model.findOne(payload)
      .populate('author', 'username email');
  }

  async find(filter = {}) {
    return this.model.find({
      ...filter,
      deleted: false,
    })
      .populate('author', 'username email');
  }

  async findOneAndUpdate(filter = {}, payload = {}) {
    return this.model.findOneAndUpdate(filter,
      {
        ...payload,
        updateTime: new Date(),
      },
      { new: true })
      .populate('author', 'username email');
  }
}

module.exports = TodoModel;
