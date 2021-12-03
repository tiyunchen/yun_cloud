import React from 'react';
import allPath from "@/config/path";
import type {Dispatch, IndexModelState} from "umi";
import {connect, NavLink} from "umi";

export interface UnLoginProps {
  app: IndexModelState,
  dispatch: Dispatch
}


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

const UnLogin: React.FC<UnLoginProps> = (props) => {
  if (props.app.userInfo?.username) return null
  return (
    <ul className="home-nav-items">
      {
        unLoginList.map(item => (
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
};

export default connect(({app}: { app: IndexModelState; }) => ({
  app,
}),)(UnLogin);
