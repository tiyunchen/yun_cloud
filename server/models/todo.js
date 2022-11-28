const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

// 给分页设一些默认值
mongoosePaginate.paginate.options = {
  lean: true,
  customLabels: {
    totalDocs: 'totalCount',
    docs: 'list',
    limit: 'size',
  },
};

const { Schema } = mongoose;
const Base = require('./base');

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  }, // 标题
  endTime: Date, // 截止时间
  createTime: { type: Date, default: Date.now }, // 创建时间
  updateTime: Date, // 更新时间
  remind: { type: Boolean, default: false }, // 是否提醒
  finished: { type: Boolean, default: false }, // 是否完成
  deleted: { type: Boolean, default: false },
  author: {
    type: Schema.Types.ObjectId, ref: 'user',
  },

}, { versionKey: false });

// 导入分页插件
todoSchema.plugin(mongoosePaginate);

class TodoModel extends Base {
  constructor(props) {
    super(props);
    this.model = mongoose.model('todo', todoSchema);
  }

  async findOne(payload = {}) {
    return this.model.findOne(payload)
      .populate('author', 'username email');
  }

  async find(filter = {}, config = {}) {
    return this.model.paginate({
      ...filter,
      deleted: false,
    }, {
      ...config,
      limit: config.size || 15,
      populate: {
        path: 'author',
        select: 'username email',
        model: 'user',
      },
    });
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
