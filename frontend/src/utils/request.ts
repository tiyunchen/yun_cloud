import {request} from 'umi'

import * as _ from 'lodash'

interface RequestIProps {
  data?: any,
  methods?: 'post' | 'get' | 'put',
  [key: string]: any;
}


function yunRequest(url: string,option: RequestIProps): Promise<any>{
  const token = localStorage.getItem('token')
  if(token){
    _.set(option, 'headers.authorization', token)
  }
  _.set(option, 'getResponse', true)
  return new Promise((resolve) => {
    request(url, option).then(res=>{
      const resToken = res.response.headers.get('authorization')
      if(resToken) localStorage.setItem('token', resToken)
      resolve(res.data)
    }).catch(err=>{
      console.log('2222', err.status)
    })
  })
}

export default yunRequest
