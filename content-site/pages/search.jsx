import Head from 'next/head'

import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'

export default function SearchPage () {
  return (
    <>
      <Head>
        <title>Search</title>
      </Head>

      <Header />

      <h1>Search</h1>

      <div className="grid">
        <div className="grid-col">
          <div className="content-box">

            <p>Results:</p>

          </div>
        </div>
        <div className="grid-col">
          <div className="content-box">

            <p>By year:</p>

            <p>By author:</p>

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
