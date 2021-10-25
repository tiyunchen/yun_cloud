// import { History, Location } from 'history-with-query'
import {IRouteProps, History, Location} from 'umi'

export interface RoutePageProps {
  history: History,
  location: Location,
  route: IRouteProps,
  [propName: string]: any;
}
