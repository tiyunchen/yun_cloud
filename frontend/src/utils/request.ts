import { request } from '@umijs/max';
import {message, MessageArgsProps} from 'antd'
type IOption = {
    loading?: boolean | string,
    errMsg?: boolean | string,
    successMsg?: string
}
type IReq<P> = {
    url: string,
    body?: P,
    option?: IOption
}
type IRes<T> = {
    result: boolean,
    data: T,
    msg?: string,
    kind?: string
}
type IRequest = <T=any, P = {}>(req: IReq<P>) => Promise<IRes<T>>
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
        request(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': Authorization
            },
            data: body,
            ...(option || {}),
        }).then(res=>{
            hide && hide()
            errorHandle(res, option)
            console.log('yRequest', res)
            resolve(res)
        })
    })

}

// 请求错误处理
const errorHandle = (res: IRes<any>, option: IOption) => {
    if(res && !res.result){
        switch (res.kind) {
            case '600000':
                res.msg && message.error(res.msg)
        }
    }
}


export default yRequest
