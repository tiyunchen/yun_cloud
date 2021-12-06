// import { History, Location } from 'history-with-query'
import type {History, IRouteProps, Location} from 'umi'


export interface ConfigProps {
  showLoading?: boolean; // 是否展示loading效果
  loadingMsg?: string; // loading 文案
  isHideError?: boolean; // 是否展示错误文案
  errorMsg?: string; // 错误文案
  successMsg?: string; // 成功文案
}

export interface HttpResponseProps<T> {
  result: boolean,
  msg?: string
  data?: T,

}
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

// 待办相关

export interface TodoProps {
  title: string, // 标题
  createTime?: string, // 创建时间
  finished?: boolean, // 是否完成
  updateTime?: string, // 更新时间
  remind?: boolean, // 是否开启提醒
  endTime?: string, // 截止时间
  [key: string]: any
}



