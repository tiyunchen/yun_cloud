/**
 * 项目入口文件
 */
import Layout from '../components/Layout/index'
import './global.scss'
export default function App({ Component, pageProps }){
    return <Layout>
        <Component {...pageProps} />
    </Layout>
}