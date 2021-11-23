import React, {useEffect} from "react";
import {connect} from 'umi'
import './index.less'
import type { IndexModelState, ConnectProps, Dispatch} from 'umi'

interface LoginPageProps extends ConnectProps  {
  app: IndexModelState,
  dispatch: Dispatch,
}

// 用户页面
const UserPage: React.FC<LoginPageProps> = (props)=>{

  useEffect(()=>{
    if(props.app.userInfo?.username){ // 如果已经登入要返回
      props.history.goBack()
    }
  }, [ ])

  return (
    <div className="login-register-wrap">
      { props.children}
    </div>
  );
}

export default connect(
  ({ app }: { app: IndexModelState; }) => ({
    app,
  }),
)(UserPage)
