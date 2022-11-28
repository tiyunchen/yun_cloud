/**
 * 发送错误信息
 * @param res
 * @param msg
 * @public
 */
function errMsg(res, msg = '网络错误') {
  res.status(200).send({ result: false, msg, kind: '600000' });
}

module.exports = () => {
  return (req, res, next) => {
    // 异常返回统一处理
    res.errMsg = (msg) => {
      errMsg(res, msg);
    };
    next();
  };
};
