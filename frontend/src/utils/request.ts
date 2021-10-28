import {request} from 'umi'

interface RequestIProps {
  data?: any,
  methods?: 'post' | 'get' | 'put',
  [key: string]: any;
}


function yunRequest(url:string,option:RequestIProps){
  return new Promise((resolve, reject) => {
    request(url, option).then(res=>{
      console.log('请求成功', res)
        resolve(res)
    })
  })
}

export default yunRequest
