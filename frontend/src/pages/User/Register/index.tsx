import React, {useEffect} from 'react';
import {history, useModel} from "@@/exports";
import userService, {userRegister} from "@/pages/User/service";
import {Button, Form, Input} from "antd";
import {Link} from '@umijs/max'
import {all} from "@umijs/utils/compiled/deepmerge";
export interface RegisterProps {

}
const Register: React.FC<RegisterProps> = () => {
    const {userDispatch, userInfo} = useModel('global')
    console.log('userInfo', userInfo)
    useEffect(()=>{
        if(userInfo && userInfo.username){
            history.replace('/')
        }
    }, [])

    const onFinish = (values: any) => {
        console.log('Success:', values);
        userService.userRegister(values).then(res=>{
            console.log('注册结果', res)
            history.push('/')
            userDispatch({type: 'login', payload: res})
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
            onValuesChange={(data, allData)=>{
                console.log('form', data, allData)
                const {password2} = data
                const {password} = allData
                if(password2 && password && password !== password2){

                }
            }}
            style={{width: '60%'}}
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
            <Form.Item
                label="确认密码"
                name="password2"
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: '请确认你的密码',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('两次密码不匹配'));
                        },
                    }),
                ]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item
                label="邮箱"
                name="email"
                rules={[{ required: true, message: '请输入邮箱' }]}
            >
                <Input type="email" />
            </Form.Item>


            <Form.Item wrapperCol={{offset: 8}}>
                <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                    注册
                </Button>
                <Link to="/user/login">登入</Link>
            </Form.Item>
        </Form>
    )
};

export default Register;
