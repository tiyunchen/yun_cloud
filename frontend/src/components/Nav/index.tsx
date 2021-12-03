import React from 'react';
import type {ConnectProps, Dispatch, IndexModelState} from 'umi'
import {connect} from 'umi'
import NavLogin from "@/components/Nav/LoginUser";
import NavUnlogin from "@/components/Nav/UnLogin";
import NavFeature from "@/components/Nav/NavFeature";

import './index.less'

interface NavProps extends ConnectProps {
  app: IndexModelState,
  dispatch: Dispatch
}





const Nav: React.FC<NavProps> = (props) => (
  <nav className="home-nav content-width">
    <NavFeature/>
    <NavUnlogin/>
    <NavLogin/>
  </nav>
);

export default connect(({ app }: { app: IndexModelState; }) => ({
  app,
}),)(Nav);
