import Head from 'next/head'
import Link from 'next/link'

import Header from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'

import { getArticles, getPaths, getUrl } from '../../lib/data.js'

export default function ArticlePage ({ article }) {
  return (
    <>
      <Head>
        <title>{article.name}</title>
      </Head>

      <Header />

      <h1>{article.name}</h1>
      <p>
        Published by {' '}
        <Link href={getUrl('author', article.authorId)} data-elastic-name="author">
          {article.authorName}
        </Link>
        {' '} in {' '}
        <Link href={getUrl('archive', article.archiveId)} data-elastic-name="archive">
          {article.archiveName}
        </Link>
      </p>
      <div dangerouslySetInnerHTML={{__html: article.content}} />

      <Footer />
    </>
  )
}

export async function getStaticPaths () {
  const articles = getArticles();
  const paths = getPaths(articles);

  return { paths, fallback: false };
}

export async function getStaticProps ({ params }) {
  const articleId = params.id;
  const article = getArticles({id: articleId});

  return { props: { article } };
}
