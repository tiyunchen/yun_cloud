import React from 'react';
import type {TodoProps} from '@/utils/types'
import './index.less'

export interface IndexProps {
  item: TodoProps
}

const Index: React.FC<IndexProps> = (props) => {
  const {item} = props
  return (
    <div className="todo-item">
      <div>{item.title}</div>
    </div>
  )
};

export default Index;
