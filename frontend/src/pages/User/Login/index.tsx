import React from 'react';
import {history, useSearchParams} from '@umijs/max'
import { Button, Checkbox, Form, Input } from 'antd';
import {useModel, Link} from '@umijs/max'
import userService from '../service'
import {routePath} from "@/routers";
export interface LogonProps {

}
const Logon: React.FC<LogonProps> = () => {
    const {userDispatch} = useModel('global')
    const [query, setQuery] = useSearchParams(location.search)
    const onFinish = (values: any) => {
        console.log('Success:', values);
        userService.userLogin(values).then(res=>{
            let redirect = query.get('redirect')
            console.log('登录结果', res)
            userDispatch({type: 'login', payload: res})
            if(redirect){
                location.href = redirect
            } else {
                history.push('/')
            }

            // history.push('/')
            // userDispatch({type: 'login', payload: res})
        })
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="账号"
                name="username"
                rules={[{ required: true, message: '请输入你的用户名' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="密码"
                name="password"
                rules={[{ required: true, message: '请输入你的密码' }]}
            >
                <Input.Password />
            </Form.Item>

            {/*<Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>*/}
            {/*    <Checkbox>Remember me</Checkbox>*/}
            {/*</Form.Item>*/}

            <Form.Item wrapperCol={{offset: 8}}>
                <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                    登入
                </Button>
                <Link to={`${routePath.register}?redirect=${query.get('redirect')}`} >注册</Link>
            </Form.Item>
        </Form>
    )
};

export default Logon;
