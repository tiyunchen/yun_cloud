import type {ComponentType} from 'react'
import React from "react";
import type {IndexModelState} from "umi";
import {connect} from "umi";
import {useHistory} from 'react-router'
import * as _ from 'lodash'
import {message} from 'antd'
import allPath from '@/config/path'


function LoginHoc<T>(InputComponent: ComponentType<T>) {

  const Component = (props: T) => {

    const history = useHistory()
    const onClick = (e: MouseEvent) => {
      console.log(2212212, props)
      if (!_.get(props, 'app.userInfo.username')) {
        message.info('请先登录')

        // @ts-ignore
        history.push(`${allPath.login.url}?redirectUrl=${location.pathname}`, {
          redirectUrl: location.pathname
        })
        return
      }

      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      props.onClick && props.onClick(e)

    }


    return <InputComponent {...props} onClick={(e: MouseEvent) => onClick(e)}/>
  }

  // @ts-ignore
  return connect(({app}: { app: IndexModelState; }) => ({app}))(Component)
}

export default LoginHoc
