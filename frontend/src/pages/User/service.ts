import yRequest from "@/utils/request";

export type UserInfo = {
    username:string,
    token: string,
    email: string,
    _id: string
}
export type IUserRegister = {
    username?: string,
    password?: string,
    email?: string
}
export const userRegister = async (payload: IUserRegister) => {
    const res = await yRequest<UserInfo>({
        url: '/user/register',
        body: payload,
    })
    console.log('res', res)
    return res
}

export const userLogin = async (payload: IUserRegister) => {
    const res = await yRequest<UserInfo>({url:  '/user/login',
        body: payload,
        option: {
            loading: '登入中',
            successMsg: '登入成功',
        }})
    return res
}


export const refreshToken = async () => {
    const res = await yRequest<UserInfo>({url:  '/user/refresh_token'})
    return res
}


export default {
    userLogin,
    userRegister
}
