import React, {useEffect, useRef, useState} from 'react';
import {Input, Button, DatePicker, Form} from 'antd'
import type { RangePickerProps } from 'antd/es/date-picker';

import moment, {Moment} from "moment";
import TodoList, {TodoListRef} from "@/pages/Todo/components/TodoList";
import {CalendarTwoTone} from '@ant-design/icons'
import TodoApi from '@/pages/Todo/service'
import './index.less'
import {useModel} from "@@/exports";
export interface TodoProps {
    [prop: string]: any
}
const TextArea = Input.TextArea
type FORM = {
    content: string,
    date: Moment
}
const Todo: React.FC<TodoProps> = () => {
    const listRef= useRef<TodoListRef>()
    const { userInfo } = useModel('global');
    useEffect(()=>{

    }, [])


    const onSubmit = (data: FORM) =>{
        TodoApi.todoCreate({
            title: data.content,
            endTime: moment(data.date).format('YYYY-MM-DD HH:MM:ss'),
            remind: true,
            finished: false
        }).then(res=>{
            console.log('新建结果', res)
        })
    }
    const onFinishFailed = () =>{

    }

    const disabledDate: RangePickerProps['disabledDate'] = current => {
        // Can not select days before today and today
        return current && current < moment();
    };
    console.log('userInfo', userInfo)
    return (
        <div className="todo">
            <Form
                name="basic"
                wrapperCol={{ span: 24 }}
                onFinish={onSubmit}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="content"
                    rules={[{ required: true, message: '请输入待办内容' }]}
                >
                    <TextArea placeholder="新建一个待办" />
                </Form.Item>
                <Form.Item
                    label={<CalendarTwoTone className="todo-icon mr-10" />}
                    name="date"
                    rules={[{ required: true, message: '请选择截止时间' }]}
                >
                    <DatePicker
                        placeholder="设置截止时间"
                        showTime
                        disabledDate={disabledDate}
                    />
                </Form.Item>

                <Form.Item wrapperCol={{  span: 24 }}>
                    <Button type="primary" htmlType="submit">
                        新建待办
                    </Button>
                </Form.Item>
            </Form>
            {
                userInfo && userInfo.username && <TodoList ref={listRef} />
            }

        </div>
    )
};

export default Todo;
