import Head from 'next/head'
import Link from 'next/link'

import Header from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'
import ArticlesList from '../../components/articles-list.jsx'

import { getArchives, getPaths, getElementById } from '../../lib/data.js'

export default function ArchivePage ({ archive }) {
  return (
    <>
      <Head>
        <title>{archive.id}</title>
      </Head>

      <Header />

      <h1>{archive.id}</h1>

      <ArticlesList />

      <Footer />
    </>
  );
}

export async function getStaticPaths () {
  const archives = getArchives();
  const paths = getPaths(archives);

  return {
    paths: paths,
    fallback: false
  };
}

export async function getStaticProps ({ params }) {
  const archives = getArchives();
  const archive = getElementById(archives, params.id);

  return {
    props: { archive: archive }
  };
}
