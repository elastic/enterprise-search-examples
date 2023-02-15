import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

export default function AboutPage () {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Header />

      <h1>About</h1>
      <p className="content-placeholder"><var>About page content...</var></p>

      <Footer />
    </>
  )
}
