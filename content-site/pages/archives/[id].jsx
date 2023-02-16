import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/header'
import Footer from '../components/footer'
import ArticlesList from '../components/articles-list'

export default function ArchivePage () {
  return (
    <>
      <Head>
        <title>Archive</title>
      </Head>

      <Header />

      <h1>Archive</h1>

      <ArticlesList />

      <Footer />
    </>
  )
}
