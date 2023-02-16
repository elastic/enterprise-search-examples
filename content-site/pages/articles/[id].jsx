import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'

export default function ArticlePage () {
  return (
    <>
      <Head>
        <title>Article</title>
      </Head>

      <Header />

      <h1>Article</h1>
      <p>Published <Link href="/archive">year</Link> by <Link href="/author">author</Link></p>
      <p className="content-placeholder"><var>Article content...</var></p>

      <Footer />
    </>
  )
}
