import Link from 'next/link'
import Head from 'next/head'

export default function Detail(){
    return <div>
        <Head>
            <title>first page</title>
        </Head>
        <h1>first page</h1>
        <Link href='/'>banck index page</Link>
    </div>
}