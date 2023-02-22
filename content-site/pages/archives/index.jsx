import Head from 'next/head'
import Link from 'next/link'

import Header from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'

import { getArchives } from '../../lib/data.js'

export default function ArchivesPage ({ archives }) {
  const getUrl = function (id) {
    return {
      pathname: '/archives/[id]',
      query: { id: id },
    };
  };

  const getListItem = function ({ id }) {
    return (
      <li key={id}>
        <Link href={getUrl(id)}>{id}</Link>
      </li>
    );
  };

  const listItems = archives.map(getListItem);

  return (
    <>
      <Head>
        <title>Archives</title>
      </Head>

      <Header />

      <h1>Archives</h1>
      <ul>{listItems}</ul>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const archives = getArchives();

  return {
    props: { archives: archives }
  };
}
