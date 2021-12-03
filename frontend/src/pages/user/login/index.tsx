import React, {useEffect} from 'react'
import type {HttpResponseProps, LoginProps} from '@/utils/types'
import type H from 'history';
import type {ConnectProps, Dispatch, IndexModelState, UserInfoProps} from 'umi'
import {connect, Link} from 'umi'
import {Button, Form, Input} from 'antd'
import {LockOutlined, UserOutlined} from '@ant-design/icons'
import userService from '@/apis/user'
import './index.less'


interface Location extends H.Location {
  query: Record<string, string>;
}

interface LoginPageProps extends ConnectProps {
  app: IndexModelState,
  dispatch: Dispatch,
  location: Location
}

const layout = {
  labelCol: {span: 8},
  wrapperCol: {span: 16},
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const  LoginPage: React.FC<LoginPageProps> = (props)  => {
  useEffect(()=>{

  }, [])

  const onFinish = (values: LoginProps) => {
    userService.loginApi(
      {username: values.username, password: values.password},
      {
        showLoading: true
      }
    ).then((res: HttpResponseProps<UserInfoProps>)=>{
      if(res.result) {
        props.dispatch({
          type: 'app/save',
          payload: {
            userInfo: res.data
          }
        })

        // 有redirectUrl 就replace他
        if (props.location.query.redirectUrl) {
          props.history.replace(props.location.query.redirectUrl)
          return
        }
        props.history.push('/')
      }
    }).catch(err=>{
      console.log('err', err)
    })
  }
  console.log('props', props)

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      {
        ...layout
      }
    >
      <Form.Item
        name="username"
        label={'用户名'}
        rules={[
          {
            required: true,
            message: '请输入用户名',
          },
        ]}
        {...layout}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        label={'密码'}
        rules={[
          {
            required: true,
            message: '请输入密码',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登入
        </Button>
        &nbsp;&nbsp;或者 <Link to={'register'}>立即注册</Link>
      </Form.Item>
    </Form>
  )
}


export default connect(
  ({ app }: { app: IndexModelState; }) => ({
    app,
  }),
)(LoginPage)

