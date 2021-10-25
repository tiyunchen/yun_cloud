const jwt = require('express-jwt')
const verToken = require('../utils/token')
const whileList = ['/user/login']

// token 验证
module.exports = function loginTokenVerify(req, res, next){
   const token = req.headers['authorization']
    console.log('sssss', token)
    if(token === undefined){
        res.send({msg: '请先登入'})
    } else {
        verToken.getToken(token).then(res=>{
            req.data = res.data
            next()
        }).catch(err=>{
            res.send({msg: 'token 无效, 请先登入'})
        })
    }
}

