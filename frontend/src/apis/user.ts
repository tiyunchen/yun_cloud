import Mock from 'mockjs'
import {request} from 'umi'
import {LoginProps} from '@/utils/types'
import yunRequest from '@/utils/request'

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock.mock('@name'));
    }, 1000);
  });
}

function loginApi(payload: LoginProps):Promise<object>{
  return yunRequest('/api/user/login', {
    method: 'post',
    data: payload,
  })
}



export default {
  getUsername,
  loginApi
}

