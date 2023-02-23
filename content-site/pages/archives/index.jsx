import Head from 'next/head'
import Link from 'next/link'

import Header from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'

import { getArchives, getUrl } from '../../lib/data.js'

export default function ArchivesPage ({ archives }) {
  const archivesListItems = archives.map(({ id }) =>
    <li key={id}>
      <Link href={getUrl('archive', id)}>{id}</Link>
    </li>
  );

  return (
    <>
      <Head>
        <title>Archives</title>
      </Head>

      <Header />

      <h1>Archives</h1>
      <ul>{archivesListItems}</ul>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const archives = getArchives();

  return { props: { archives: archives } };
}
