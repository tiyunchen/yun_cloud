import Mock from 'mockjs'
import type {LoginProps,ConfigProps} from '@/utils/types'
import yunRequest from '@/utils/request'

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}

function loginApi(payload: LoginProps, config: ConfigProps={}){
  return yunRequest('/api/user/login', {
    method: 'post',
    data: payload,
    config
  })
}



export default {
  getUsername,
  loginApi
}

