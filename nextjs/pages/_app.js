/**
 * 项目入口文件
 */
import Layout from '../components/Layout/index'
import './global.scss'
import Head from 'next/head'

const fontCdn = '//at.alicdn.com/t/font_1044629_mvenzw33xze'

export default function App({ Component, pageProps }){
    return <Layout>
        <Head>
            <link rel="preload" href={`${fontCdn}.woff2`} as="font" type="font/woff2"
                  crossOrigin="anonymous" />
            <script src={`${fontCdn}.js`} />
            <link rel="stylesheet" href={`${fontCdn}.css`} />
        </Head>
        <Component {...pageProps} />
    </Layout>
}