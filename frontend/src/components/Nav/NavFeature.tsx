import React from 'react';
import type {Dispatch, IndexModelState} from "umi";
import {connect, NavLink} from "umi";
import allPath from "@/config/path";

export interface NavFeatureProps {
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


const NavFeature: React.FC<NavFeatureProps> = () => {
  return (
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
  )
};

export default connect(({app}: { app: IndexModelState }) => ({app}))(NavFeature);
