import {Link} from 'umi'
import type {RoutePageProps, LoginProps} from '@/utils/types'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import userService from '@/apis/user'
import './index.less'
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const  RegisterPage = (props: RoutePageProps) => {
  const onFinish = async (values: LoginProps) => {
    if(values.confirmPassword !== values.password){
      message.error('两次密码不正确')
      return
    }
    delete values.confirmPassword
    const res = await userService.registerApi(values)
    if(res.result){
      message.success('注册成功')
      props.history.push('/user/login')
    }
    console.log('Received values of form: ', values, res);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      {...layout}
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
          placeholder="请输入密码"
        />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        label={'确认密码'}
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
          placeholder="请再次输入密码"
        />
      </Form.Item>
      <Form.Item
        name="email"
        label={'邮箱'}
        rules={[
          {
            required: true,
            message: '请输入邮箱',
          },
        ]}
      >
        <Input
          prefix={<MailOutlined />}
          type="email"
          placeholder="请输入邮箱"
        />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" className="login-form-button">
          注册
        </Button>
        &nbsp;&nbsp;或者 <Link to={'/user/login'}>登入</Link>
      </Form.Item>
    </Form>
  );
};

export default RegisterPage

