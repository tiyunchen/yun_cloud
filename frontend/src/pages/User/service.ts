import yRequest from "@/utils/request";

type UserInfo = {}
type IUserRegister = {
    username?: string,
    password?: string,
    email?: string
}
export const userRegister = async (payload: IUserRegister) => {
    const res = await yRequest<UserInfo>({url: '/user/register', body: payload})
    console.log('res', res)
    return res
}

export const userLogin = async (payload: IUserRegister) => {
    const res = await yRequest<UserInfo>({url:  '/user/login',
        body: payload,
        option: {
            loading: '登入中',
            successMsg: '登入成功'
        }})
    return res
}

export default {
    userLogin,
    userRegister
}
