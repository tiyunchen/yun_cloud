import React from 'react';
import {connect, Link} from 'umi'
import type { IndexModelState, ConnectProps, Dispatch} from 'umi'
import './index.less'

interface NavProps extends ConnectProps  {
  app: IndexModelState,
  dispatch: Dispatch
}


const featureItems = [
  {
    content: '首页',
    key: 'home',
    show: true,
    link: '/'
  },
  {
    content: '待办',
    key: 'todo-list',
    show: true,
    link: '/todo-list'
  }
]



const Nav: React.FC<NavProps> = (props) => (
  <nav className="home-nav">
    <ul className="home-nav-items">
      {
        featureItems.map(item=><li key={item.key}><Link to={item.link}>{item.content}</Link></li>)
      }

    </ul>
    {
      !!props.app.userInfo?.username ? (
        <ul>
          <li>我的</li>
        </ul>
      ) : (
        <ul className="home-nav-items">
          <li><Link to={'/user/login'}>登入</Link></li>
          <li><Link to={'/user/register'}>注册</Link></li>
        </ul>
      )
    }

  </nav>
);

export default connect(({ app }: { app: IndexModelState; }) => ({
  app,
}),)(Nav);
