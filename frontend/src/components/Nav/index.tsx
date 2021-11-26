import React from 'react';
import type {ConnectProps, Dispatch, IndexModelState} from 'umi'
import {connect, NavLink} from 'umi'
// @ts-ignore
import allPath from '/config/path'
import './index.less'

interface NavProps extends ConnectProps {
  app: IndexModelState,
  dispatch: Dispatch
}


const featureItems = [
  {
    content: '首页',
    key: 'home',
    show: true,
    link: allPath.home.url
  },
  {
    content: '待办',
    key: 'todo-list',
    show: true,
    link: allPath.todoList.url
  },
  {
    content: '流程图',
    key: 'xmind',
    show: true,
    link: allPath.xmind.url
  }
]

const unLoginList = [
  {
    content: '登录',
    key: 'login',
    show: true,
    link: allPath.login.url
  },
  {
    content: '注册',
    key: 'register',
    show: true,
    link: allPath.register.url
  }
]



const Nav: React.FC<NavProps> = (props) => (
  <nav className="home-nav content-width">
    <ul className="home-nav-items">
      {
        featureItems.map(item => (
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
