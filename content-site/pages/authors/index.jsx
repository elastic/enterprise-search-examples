import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'

export default function AuthorsPage () {
  return (
    <>
      <Head>
        <title>Authors</title>
      </Head>

      <Header />

      <h1>Authors</h1>
      <ul>
        <li>
          <Link href="/author">Author</Link>
        </li>
        <li>
          <Link href="/author">Author</Link>
        </li>
      </ul>

      <Footer />
    </>
  )
}
