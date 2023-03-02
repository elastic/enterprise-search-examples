import Head from 'next/head'
import Link from 'next/link'

import Header from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'
import CollectionsList from '../../components/collections-list.jsx'

import { getArchives, getUrl } from '../../lib/data.js'

export default function ArchivesPage ({ archives }) {
  return (
    <>
      <Head>
        <title>Archives</title>
        <meta name="robots" content="noindex" />
      </Head>

      <Header />

      <h1>Archives</h1>
      <CollectionsList collections={archives} type="archive" />

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const archives = getArchives();

  return { props: { archives: archives } };
}
