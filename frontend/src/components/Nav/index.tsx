import React from 'react';
import {connect, Link, NavLink} from 'umi'
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

const unLoginList = [
  {
    content: '登录',
    key: 'login',
    show: true,
    link: '/user/login'
  },
  {
    content: '注册',
    key: 'register',
    show: true,
    link: '/user/register'
  }
]



const Nav: React.FC<NavProps> = (props) => (
  <nav className="home-nav">
    <ul className="home-nav-items">
      {
        featureItems.map(item=>(
          <li
            key={item.key}
            className="home-nav-items-item"
          >
            <NavLink
              to={item.link}
              activeClassName="home-nav-items-item-active"
              className="home-nav-items-item-default"
              exact={true}
            >{item.content}</NavLink>
          </li>
        ))
      }

    </ul>
    {
      !!props.app.userInfo?.username ? (
        <ul className="home-nav-items">
          <li className="home-nav-items-item">我的</li>
        </ul>
      ) : (
        <ul className="home-nav-items">
          {
            unLoginList.map(item=>(
              <li
                key={item.key}
                className="home-nav-items-item"
              >
                <NavLink
                  to={item.link}
                  activeClassName="home-nav-items-item-active"
                  className="home-nav-items-item-default"
                  exact={true}
                >{item.content}</NavLink>
              </li>
            ))
          }
        </ul>
      )
    }

  </nav>
);

export default connect(({ app }: { app: IndexModelState; }) => ({
  app,
}),)(Nav);
