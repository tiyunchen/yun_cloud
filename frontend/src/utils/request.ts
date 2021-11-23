import {request} from 'umi'
import {message} from 'antd'
import type {HttpResponseProps, ConfigProps} from '@/utils/types'

import * as _ from 'lodash'

interface RequestIProps {
  data?: any,
  methods?: 'post' | 'get' | 'put',
  config?: ConfigProps;
  [key: string]: any;
}



/**
 * 统一的请求配置
 * @param url
 * @param option
 */
function yunRequest(url: string,option: RequestIProps): Promise<any>{
  const token = localStorage.getItem('token')
  if(token){
    _.set(option, 'headers.authorization', token)
  }
  const config = option.config || {}
  delete option.config
  _.set(option, 'getResponse', true)
  let hide: any = null
  console.log('config', config)
  if(config.showLoading){
    hide = message.loading(config.loadingMsg || '加载中', 0)
  }
  return new Promise((resolve) => {
    request(url, option).then(res=>{
      const resToken = res.response.headers.get('authorization')
      if(resToken) localStorage.setItem('token', resToken)
      processErrorMsg(res.data, config)
      // 关闭loading
      if(hide) hide()
      resolve(res.data)
    }).catch(err=>{
      if(hide) hide()
      // processErrorMsg(err, config)
      console.log('2222', err.status)
    })
  })
}


/**
 * 错误处理
 * @param data
 * @param config
 */
function processErrorMsg(data: HttpResponseProps<any>, config: ConfigProps){
  if(!data.result) {
    if(!config.isHideError){
      message.error(data.msg || config.errorMsg)
    }
  }
  console.log('dada', data, config)

}


export default yunRequest
