import React, {useEffect} from 'react';
import Main from './components/mian'
import List from './components/list'
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
    <Main/>
    <List/>
  </div>)
};

export default Index;
