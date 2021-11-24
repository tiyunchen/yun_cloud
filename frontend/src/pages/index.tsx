import type { IndexModelState, ConnectProps} from 'umi'
import { connect } from 'umi'
import './index.less'
import Nav from "@/components/Nav"
import Home from '@/pages/home/index'

interface IndexProps extends ConnectProps{
  app: IndexModelState,
}
const Index: React.FC<IndexProps> = (props) => {
  console.log(props)
  return (
    <div>
      <Nav {...props} />
      <Home {...props} />
      {
        props.children
      }
    </div>
  )
};



export default connect(
  ({ app }: { app: IndexModelState; }) => ({
    app,
  }),
)(Index)
