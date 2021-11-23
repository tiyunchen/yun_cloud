// import { History, Location } from 'history-with-query'
import type {IRouteProps, History, Location} from 'umi'
import ex from "umi/dist";

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

export interface ConfigProps {
  showLoading?: boolean; // 是否展示loading效果
  loadingMsg?: string; // loading 文案
  isHideError?: boolean; // 是否展示错误文案
  errorMsg?: string; // 错误文案
}

export interface HttpResponseProps<T> {
  result: boolean,
  msg?: string
  data?: T,

}
