import React, {useEffect} from 'react';
import './index.less'

export interface IndexProps {

}

const Index: React.FC<IndexProps> = (props) => {
  console.log('props', props)
  useEffect(() => {

  }, [])


  return (<div
    className="todo-list content-width"
  >
    <div>欢迎来到待办</div>
    <div>我的待办</div>
  </div>)
};

export default Index;
