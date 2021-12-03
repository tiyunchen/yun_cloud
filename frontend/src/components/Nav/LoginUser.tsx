import React from 'react';
import type {Dispatch, IndexModelState} from "umi";
import {connect, NavLink} from "umi";

interface NavProps {
  app: IndexModelState,
  dispatch: Dispatch
}


const loginList = [
  {
    content: '我的',
    key: 'user',
    show: true,
    link: '/404'
  },
]

const LoginUser = (props: NavProps) => {
  console.log('www', props)
  if (!props.app.userInfo?.username) return null
  return (
    <ul className="home-nav-items">
      {
        loginList.map(item => (
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
}),)(LoginUser);
