import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

export default function HomePage () {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Header />

      <h1>Home</h1>
      <p className="content-placeholder"><var>Home page content...</var></p>

      <Footer />
    </>
  )
}
