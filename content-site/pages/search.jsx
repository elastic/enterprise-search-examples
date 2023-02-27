import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/head'

import Footer from '../components/footer.jsx'

export default function SearchPage () {
  //const [data, setData] = useState(null)

  useEffect(() => {
    //setLoading(true)
    //fetch('/api/profile-data')
      //.then((res) => res.json())
      //.then((data) => {
        //setData(data)
        //setLoading(false)
      //})
    console.log('using effect');
  }, [])

  return (
    <>
      <Head>
        <title>Search</title>
      </Head>

      <ul className="pages-nav">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/articles">Articles</Link>
        </li>
      </ul>

      <p className="search-bar">
        <input type="search" />
        &nbsp;
        <input type="submit" value="Search" />
      </p>

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
