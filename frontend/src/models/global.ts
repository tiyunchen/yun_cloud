// 全局共享数据示例
import { DEFAULT_NAME } from '@/constants';
import { useState } from 'react';
import {UserInfo} from "@/pages/User/service";


type IDispatch = {
  type: string,
  payload?: any
}
const useUser = () => {
  const [name, setName] = useState<string>(DEFAULT_NAME);
  const [userInfo, setUserInfo] = useState<UserInfo>();

  const dispatch = (action: IDispatch) => {
    const {type, payload} = action
    switch (type) {
      case 'login':
        if(payload){
          setUserInfo(payload);
          localStorage.setItem('token', payload.token)
        }
        break
    }
  }

  return {
    name,
    setName,
    userInfo,
    setUserInfo,
    userDispatch: dispatch
  };
};

export default useUser;
