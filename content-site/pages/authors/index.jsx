import Head from 'next/head'
import Link from 'next/link'

import Header from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'

import { getAuthors } from '../../lib/data.js'

export default function AuthorsPage ({ authors }) {
  const getUrl = function (id) {
    return {
      pathname: '/authors/[id]',
      query: { id: id },
    };
  };

  const getListItem = function ({ id, name }) {
    return (
      <li key={id}>
        <Link href={getUrl(id)}>{name}</Link>
      </li>
    );
  };

  const listItems = authors.map(getListItem);

  return (
    <>
      <Head>
        <title>Authors</title>
      </Head>

      <Header />

      <h1>Authors</h1>
      <ul>{listItems}</ul>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const authors = getAuthors();

  return {
    props: { authors: authors }
  };
}
