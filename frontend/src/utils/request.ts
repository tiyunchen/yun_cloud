import { request } from '@umijs/max';
import qs from 'query-string'
import {message} from 'antd'
import {history} from '@umijs/max'
import * as _ from 'lodash'
import {routePath} from "@/routers";


// 请求错误处理
const errorHandle = (res: IRes<any>, option: IOption) => {
    if(res && !res.result){
        switch (res.kind) {
            case '600000':
                if(res.msg) message.error(res.msg).then();return
            default: !!(option.errMsg) && message.error(option.errMsg)
        }
    }
}

// 成功处理
const successHandle = (res: IRes<any>, option: IOption) => {
    if(!res || !res.result) return
    if(option.successMsg){
        message.success(option.successMsg).then()
    }
}

type IOption = {
    loading?: boolean | string,
    errMsg?: boolean | string,
    successMsg?: string,
    // 是否直接返回结果
    returnData?: boolean
}
type IReq<P> = {
    url: string,
    body?: P,
    method?: 'post' | 'put' | 'get' | 'delete'
    option?: IOption
}
export type IRes<T> = {
    result: boolean,
    data: T,
    msg?: string,
    kind?: string
}


// @ts-ignore
function yRequest<T=any, P = any>(req:IReq<P>):Promise<T>
function yRequest<T=any, P = any>(req:IReq<P>, showResStatus: true):Promise<IRes<T>>
function yRequest<T=any, P = any>(req:IReq<P>, showResStatus: boolean){
    const {url, body, option={}, method='post'} = req
    let hide: any = null
    if(option.loading){
        hide = message.loading(typeof option.loading === 'string' ? option.loading : '加载中')
    }


    return new Promise((resolve, reject) => {
        let apiUrl = url
        if(apiUrl.startsWith('/')){
            apiUrl = `/yun_service${url}`
        }

        let Authorization = `Bearer `
        let token = localStorage.getItem('token')
        if(token){
            Authorization += token
        }
        if(method === 'get'){
            apiUrl = qs.stringifyUrl({url: apiUrl, query: {...(body || {})}})
        }
        request(apiUrl, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Authorization
            },
            data: body,
            ...(option || {}),
        }).then((res)=>{
            if(hide) hide()

            // 失败消息处理
            errorHandle(res, option)

            // 成功消息处理
            successHandle(res, option)
            console.log('yRequest', res)
            // 默认直接返回全部结果
            if(!showResStatus){
                if(res && res.result){
                    resolve(res.data)
                } else {
                    reject(res)
                }

            } else {
                resolve(res)
            }
        }).catch(err=>{
            console.log('的点点滴滴', err, url)
            if(_.get(err,'response.status') === 401 && url !== '/user/refresh_token' ){
                message.error('用户未登录，请先登录')
                history.push(`${routePath.login}?redirect=${location.href}`)
            }
            reject(err)
        })
    })

}




export default yRequest
