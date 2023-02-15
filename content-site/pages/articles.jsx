import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import ArticlesList from '../components/articles-list'

export default function ArticlesPage () {
  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>

      <Header />

      <h1>Articles</h1>
      <div className="grid">
        <div className="grid-col">
          <div className="content-box">
            <p>Most recent:</p>
            <ArticlesList />
          </div>
        </div>
        <div className="grid-col">
          <div className="content-box">
            <p>By year:</p>
            <ul>
              <li>
                <Link href="/archive">Archive</Link>
              </li>
              <li>
                <Link href="/archive">Archive</Link>
              </li>
            </ul>
            <p>By author:</p>
            <ul>
              <li>
                <Link href="/author">Author</Link>
              </li>
              <li>
                <Link href="/author">Author</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
