import { request } from '@umijs/max';
import {message} from 'antd'


// 请求错误处理
const errorHandle = (res: IRes<any>, option: IOption) => {
    if(res && !res.result){
        switch (res.kind) {
            case '600000':
                if(res.msg) message.error(res.msg).then()
        }
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
    option?: IOption
}
export type IRes<T> = {
    result: boolean,
    data: T,
    msg?: string,
    kind?: string
}

type IRequest = <T=any, P = any>(req: IReq<P>) => Promise<T>
const yRequest:IRequest = ({url, body, option={}}) => {
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
        request(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Authorization
            },
            data: body,
            ...(option || {}),
        }).then((res: IRes<any>)=>{
            if(hide) hide()
            errorHandle(res, option)
            console.log('yRequest', res)
            // 默认直接返回全部结果
            if(!option.returnData){
                if(res && res.result){
                    resolve(res.data)
                } else {
                    reject(res)
                }

            } else {
                resolve(res)
            }
        }).catch(err=>{
            reject(err)
        })
    })

}




export default yRequest
