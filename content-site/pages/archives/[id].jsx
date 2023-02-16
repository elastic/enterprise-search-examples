import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/header'
import Footer from '../../components/footer'
import ArticlesList from '../../components/articles-list'

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
  return {
    paths: [
      { params: { id: '2022' } },
      { params: { id: '2023' } }
    ],
    fallback: false
  };
}

export async function getStaticProps ({ params }) {
  const getArchive = function (id) {
    return { id: id };
  };

  return {
    props: { archive: getArchive(params.id) }
  };
}
