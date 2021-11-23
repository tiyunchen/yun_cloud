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

/**
 * 登录接口
 * @param payload
 * @param config
 */
function loginApi(payload: LoginProps, config: ConfigProps={}){
  return yunRequest('/api/user/login', {
    method: 'post',
    data: payload,
    config
  })
}

/**
 * 注册接口
 * @param payload
 * @param config
 */
export function registerApi(payload: LoginProps, config: ConfigProps={}){
  return yunRequest('/api/user/register', {
    method: 'put',
    data: payload,
    config
  })
}

/**
 * 刷新状态
 */
function refreshTokenApi(){
  return yunRequest('/api/user/refresh_token', {
    method: 'post',
  })
}



export default {
  getUsername,
  loginApi,
  registerApi,
  refreshTokenApi
}

