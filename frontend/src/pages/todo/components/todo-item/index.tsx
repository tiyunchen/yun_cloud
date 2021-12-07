import React, {useState} from 'react';
import {BorderOutlined, CheckSquareOutlined} from '@ant-design/icons'
import type {TodoProps} from '@/utils/types'
import './index.less'

export interface IndexProps {
  item: TodoProps
}

const Index: React.FC<IndexProps> = (props) => {
  const [item, setItem] = useState(props.item || {})
  return (
    <div className="todo-item display-align">
      <div className="todo-item-left">
        <BorderOutlined/>
        <CheckSquareOutlined/>
      </div>
      <div>{item.title}</div>
    </div>
  )
};

export default Index;
