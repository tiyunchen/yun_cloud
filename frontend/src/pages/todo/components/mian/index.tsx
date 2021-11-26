import React, {useState} from 'react';
import {Button} from 'antd'
import TodoEdit from '../edit/index'
// @ts-ignore
import emptyImg from '@public/todo/20211126103908.jpg'

import './index.less'

export interface IndexProps {

}

const Index: React.FC<IndexProps> = () => {
  const [active, setActive] = useState(false)

  function activeEdit() {
    setActive(true)
  }

  return (
    <div className="todo-main">
      <TodoEdit active={active}/>
      <div className="todo-empty">
        <img src={emptyImg} alt=""/>
        <p>有什么想法吗？赶快记下来</p>
        <Button
          onClick={() => activeEdit()}
          type="primary"
        >新建待办</Button>
      </div>
    </div>
  )
};

export default Index;
