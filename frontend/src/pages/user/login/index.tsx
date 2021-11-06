import React, {useEffect} from 'react'
import type {HttpResponseProps, LoginProps} from '@/utils/types'
import { Form, Input, Button} from 'antd'
import {connect, Link} from 'umi'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import userService from '@/apis/user'
import './index.less'
import type { IndexModelState, ConnectProps, UserInfoProps} from 'umi'

interface LoginPageProps extends ConnectProps {
  app: IndexModelState
}

const  LoginPage: React.FC<LoginPageProps> = (props)  => {
  useEffect(()=>{

  }, [])
  const onFinish = (values: LoginProps) => {
    userService.loginApi({username: values.username, password: values.password}).then((res: HttpResponseProps<UserInfoProps>)=>{
      if(res.result){
        props.dispatch && props.dispatch({
          type: 'app/save',
          payload: {
            userInfo: res.data
          }
        })
        props.history.push('/')
      }
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

      <Form.Item>
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

