import type {ConnectProps} from 'umi'
import './index.less'

export type IndexProps = ConnectProps
const Index: React.FC<IndexProps> = (props) => {
  console.log('home', )
  if(props.location.pathname !== '/'){
    return null
  }
  return  (
    <main className='homepage-main'>
      <h1>欢迎来到工具页面</h1>
      <div>我们为你准备了一些有用的工具，喜欢你能喜欢</div>
      <div>service worker 测试</div>
      <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2Fdc%2Fd2%2Fe3%2Fdcd2e350f4fcae5d336b04756417c6dd.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634369522&t=6157027b79ae1682cfccadb6bdc447d9" alt=""/>
    </main>
  )


};

export default Index;
