// import { History, Location } from 'history-with-query'
import {IRouteProps, History, Location} from 'umi'

export interface RoutePageProps {
  history: History,
  location: Location,
  route: IRouteProps,
  [propName: string]: any;
}

// 用户登入相关
export interface LoginProps {
  username: string,
  email?: string,
  password: string,
  confirmPassword?: string,
  checked?: boolean,
}
