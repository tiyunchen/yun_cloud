import Link from 'next/link'


export default function Home() {
    return (
        <div className="container">

            <div className="bg-content"></div>
            <div className="homepage-conetnt">
                <div className="homeg-text">
                    <h1>Hello javascript</h1>
                    <h2>欢迎来到 8090</h2>
                    <h2>
                        <Link href='/todo'>我的 TODO</Link>
                    </h2>
                    <h2>
                        <Link href='/blog/first'>
                            to first page
                        </Link>
                    </h2>
                </div>
            </div>


        </div>
    )
}
