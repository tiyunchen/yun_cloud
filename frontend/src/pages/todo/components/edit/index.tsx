import type {ChangeEvent} from 'react'
import React, {useEffect, useRef, useState} from 'react';
import {Input} from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import DatePicker from './DatePicker'
import './index.less'

export interface IndexProps {
  active?: boolean; // 是否激活
}

const Index: React.FC<IndexProps> = ({active}) => {
  const [inputActive, setActive] = useState(active)
  const [value, setValue] = useState('')
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


  function onBlur() {
    setActive(false)
  }

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    console.log('1', e.target.value)
    setValue(e.target.value)
  }

  function onOpenChange(open: boolean) {
    console.log('open', open)
    onFocus()
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
          onChange={(date, time) => console.log('da', date, time)}
        />
      </div>
    </div>
  )
};

export default Index;
