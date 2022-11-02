module.exports = (req, res, next) => {
    // 异常返回统一处理
    res.errMsg = function (msg = '网络错误') {
        res.status(200).send({ result: false, msg: msg, kind: '600000' });
    }
    next();
};
