import {RoutePageProps} from '@/utils/types'
import './index.less'
export default function LoginPage(props: RoutePageProps) {
  console.log(333333, props)
  return (
    <div className="login">
      <div>这是登录页面</div>
    </div>
  );
}
