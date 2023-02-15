import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'

export default function ArchivesPage () {
  return (
    <>
      <Head>
        <title>Archives</title>
      </Head>

      <Header />

      <h1>Archives</h1>
      <ul>
        <li>
          <Link href="/archive">Archive</Link>
        </li>
        <li>
          <Link href="/archive">Archive</Link>
        </li>
      </ul>

      <Footer />
    </>
  )
}
