import type {ChangeEvent} from 'react'
import React, {useEffect, useRef, useState} from 'react';
import {Button, Input, message, Switch} from 'antd'
import {CheckOutlined, PlusOutlined} from '@ant-design/icons'
import todoService from '@/apis/todo'
import DatePicker from './DatePicker'
import LoginHoc from "@/components/LoginHoc";
import './index.less'

export interface IndexProps {
  active?: boolean; // 是否激活
}

const CreateBtn = LoginHoc(Button)


const Index: React.FC<IndexProps> = ({active}) => {
  const [inputActive, setActive] = useState(active)
  const [time, setTime] = useState('')
  const [value, setValue] = useState('')
  const [remind, setChecked] = useState(false)
  const inputEl = useRef<Input>(null)
  const wrapEl = useRef<HTMLDivElement>(null)
  useEffect(() => {
    activeChange()
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [active])

  // 判断是否在元素外点击
  function handleClick(event: MouseEvent) {
    const indexNum = event.composedPath().findIndex((e, index) => {
      const target = e as HTMLElement
      if (target.classList && Array.from(target.classList).includes('todo-edit')) {
        return index
      }
    })
    setActive(indexNum >= 0)

  }

  function activeChange() {
    setActive(active)
    if (active) onFocus()
  }

  // 自动聚焦
  function onFocus() {
    setActive(true)
    // console.log('inputEl', inputEl.current)
    inputEl.current?.focus()
  }



  function onChange(e: ChangeEvent<HTMLInputElement>) {
    if(e.target.value.length > 500) return
    setValue(e.target.value)
  }

  function onOpenChange(open: boolean) {
    console.log('open', open)
    onFocus()
  }

  async function onConfirm(){
    console.log('onConfirm')
    const res = await todoService.createTodoApi({
      title: value,
      endTime: time,
      remind: remind
    }, {
      showLoading: true,
      successMsg: '待办创建成功'
    })
    console.log('创建结果', res)
  }

  function onSwitch(checkedValue: boolean){
    if(checkedValue){
      message.info('将在截止时间15分钟前提醒您')
    }
    setChecked(checkedValue)
  }

  // console.log('inputActive', value)
  return (
    <div
      className="todo-edit"
      data-active={inputActive}
      ref={wrapEl}
    >
      <Input
        placeholder="例如: 下月去旅行"
        onFocus={() => onFocus()}
        // onBlur={()=>onBlur()}
        ref={inputEl}
        onChange={(e) => onChange(e)}
        value={value}
        prefix={<PlusOutlined/>}
      />
      <div className="edit-btns">
        <DatePicker
          onOpenChange={onOpenChange}
          getPopupContainer={() => wrapEl.current}
          onChange={(date, valueTime) => setTime(valueTime)}
          time={time}
        />
        <span className="ml-16">
          <Switch
            checkedChildren="提醒开启"
            onChange={(checkedV) => onSwitch(checkedV)}
            checked={remind}
            unCheckedChildren="提醒我"
            className="ml-16"
          />
        </span>
        <CreateBtn icon={<CheckOutlined/>}
                   onClick={() => onConfirm()}
                   type="primary"
                   style={{
                     float: 'right'
                   }}
                   disabled={!value}>
          新建待办
        </CreateBtn>
      </div>
    </div>
  )
};

export default Index;
