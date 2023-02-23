import Head from 'next/head'
import Link from 'next/link'

import Header from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'
import ArticlesList from '../../components/articles-list.jsx'

import { getArchives, getArticles, getPaths } from '../../lib/data.js'

export default function ArchivePage ({ archive, articles }) {
  return (
    <>
      <Head>
        <title>{archive.id}</title>
      </Head>

      <Header />

      <h1>{archive.id}</h1>

      <ArticlesList articles={articles} />

      <Footer />
    </>
  );
}

export async function getStaticPaths () {
  const archives = getArchives();
  const paths = getPaths(archives);

  return { paths, fallback: false };
}

export async function getStaticProps ({ params }) {
  const archiveId = params.id;
  const archive = getArchives({id: archiveId});
  const articles = getArticles({archiveId: archiveId});

  return { props: { archive, articles } };
}
