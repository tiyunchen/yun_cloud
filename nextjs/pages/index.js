import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>steps for next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Link href='/blog/first'>
          to first page
        </Link>
      </div>
      <Image src='/photo1.jpg' width={128} height={128} />

    </div>
  )
}
