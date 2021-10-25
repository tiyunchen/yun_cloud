const mongoose = require('mongoose')
const {Schema} = mongoose
const userSchema = new Schema({
    username: String,
    email: String,
    sex: String,
    age: Number
})


class UserModel{
    constructor() {
        this.model = mongoose.model('user', userSchema)
        this.test = {
            count: 1
        }
    }

    save(data){
        const user = new this.model(data)
        return user.save((error)=>{
            console.log('数据添加解雇', error)
            if(error){
                return Promise.reject(error)
            } else {
                return Promise.resolve()
            }
        })
    }
}

module.exports = UserModel
