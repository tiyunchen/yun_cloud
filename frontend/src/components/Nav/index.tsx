import React from 'react';
import {Link} from 'umi'
export interface NavProps {

}
const Nav: React.FC<NavProps> = () => (
  <nav>
    首页
    <ul>
      <li><Link to={'/user/login'}>登入</Link></li>
      <li><Link to={'/user/register'}>注册</Link></li>
    </ul>
  </nav>
);

export default Nav;
