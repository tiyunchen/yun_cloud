import type {ConnectProps, IndexModelState} from 'umi'
import {connect} from 'umi'
import {ConfigProvider} from 'antd'
import zhCN from 'antd/lib/locale/zh_CN';
import './index.less'
import Nav from "@/components/Nav"
import Home from '@/pages/home/index'

interface IndexProps extends ConnectProps {
  app: IndexModelState,
}

const Index: React.FC<IndexProps> = (props) => {
  console.log(props)
  return (<ConfigProvider locale={zhCN}>
      <div>
        <Nav {...props} />
        <Home {...props} />
        {
          props.children
        }
      </div>
    </ConfigProvider>

  )
};



export default connect(
  ({ app }: { app: IndexModelState; }) => ({
    app,
  }),
)(Index)
