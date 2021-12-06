import React, {useEffect, useState} from 'react';
import {Button} from 'antd'
import type {ConnectProps, Dispatch, IndexModelState} from "umi";
import {connect} from "umi";
import type {TodoProps} from '@/utils/types'
import TodoEdit from '../edit/index'
import todoApi from '@/apis/todo'
import TodoItem from '@/pages/todo/components/TodoItem'
// @ts-ignore
import emptyImg from '@public/todo/20211126103908.jpg'

import './index.less'

interface IndexProps extends ConnectProps {
  app: IndexModelState,
  dispatch: Dispatch,
}

const Index: React.FC<IndexProps> = (props) => {
  const [active, setActive] = useState(false)
  const [todoList, setList] = useState([])

  useEffect(() => {
    if (!props.app.userInfo?.username) return
    getTodoList()
  }, [props.app.userInfo?.username])

  // 获取待办列表
  function getTodoList() {
    todoApi.getTodos({isMy: true}).then(res => {
      console.log('res', res)
      if (res.result) {
        setList(res.docs)
      }
    })
  }

  function activeEdit() {
    setActive(true)
  }

  console.log('todoList', todoList)

  return (
    <div className="todo-main">
      <TodoEdit active={active}/>
      {
        todoList && todoList.length > 0 ? (
          <div>
            {
              todoList.map((item: TodoProps) => <TodoItem key={item._id} item={item}/>)
            }
          </div>
        ) : (<div className="todo-empty">
          <img src={emptyImg} alt=""/>
          <p>有什么想法吗？赶快记下来</p>
          <Button
            onClick={() => activeEdit()}
            type="primary"
          >新建待办</Button>
        </div>)
      }

    </div>
  )
};

export default connect(({app}: { app: IndexModelState; }) => ({app}))(Index);
