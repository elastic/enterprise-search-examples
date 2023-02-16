import Head from 'next/head'
import Link from 'next/link'

import Header from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'
import ArticlesList from '../../components/articles-list.jsx'

import { getAuthors, getArticles, getPaths } from '../../lib/data.js'

export default function AuthorPage ({ author, articles }) {
  return (
    <>
      <Head>
        <title>{author.name}</title>
      </Head>

      <Header />

      <h1>{author.name}</h1>
      <p className="content-placeholder"><var>Author content...</var></p>

      <ArticlesList articles={articles} />

      <Footer />
    </>
  );
}

export async function getStaticPaths () {
  const authors = getAuthors();
  const paths = getPaths(authors);

  return { paths, fallback: false };
}

export async function getStaticProps ({ params }) {
  const authorId = params.id;
  const author = getAuthors({id: authorId});
  const articles = getArticles({authorId: authorId});

  return { props: { author, articles } };
}
