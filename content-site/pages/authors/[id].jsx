import Head from 'next/head'
import Link from 'next/link'

import Header from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'
import ArticlesList from '../../components/articles-list.jsx'

import { getAuthors, getPaths, getElementById } from '../../lib/data.js'

export default function AuthorPage ({ author }) {
  return (
    <>
      <Head>
        <title>{author.name}</title>
      </Head>

      <Header />

      <h1>{author.name}</h1>
      <p className="content-placeholder"><var>Author content...</var></p>

      <ArticlesList />

      <Footer />
    </>
  );
}

export async function getStaticPaths () {
  const authors = getAuthors();
  const paths = getPaths(authors);

  return {
    paths: paths,
    fallback: false
  };
}

export async function getStaticProps ({ params }) {
  const authors = getAuthors();
  const author = getElementById(authors, params.id);


  return {
    props: { author: author }
  };
}
