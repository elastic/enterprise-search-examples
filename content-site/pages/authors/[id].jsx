import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import ArticlesList from '../components/articles-list'

export default function AuthorPage () {
  return (
    <>
      <Head>
        <title>Author</title>
      </Head>

      <Header />

      <h1>Author</h1>
      <p className="content-placeholder"><var>Author content...</var></p>
      <ArticlesList />

      <Footer />
    </>
  )
}
