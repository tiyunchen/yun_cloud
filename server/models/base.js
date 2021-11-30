class Base {
  constructor(props) {

  }

  // 创建数据
  create(data) {
    const Model = this.model;
    return new Promise((resolve, reject) => {
      Model.create(data).then((res) => {
        resolve(res);
      }).catch((e) => {
        reject(e);
      });
    });
  }
}

module.exports = Base;
