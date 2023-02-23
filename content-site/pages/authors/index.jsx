import Head from 'next/head'
import Link from 'next/link'

import Header from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'

import { getAuthors, getUrl } from '../../lib/data.js'

export default function AuthorsPage ({ authors }) {
  const authorsListItems = authors.map(({ id, name }) =>
    <li key={id}>
      <Link href={getUrl('author', id)}>{name}</Link>
    </li>
  );

  return (
    <>
      <Head>
        <title>Authors</title>
      </Head>

      <Header />

      <h1>Authors</h1>
      <ul>{authorsListItems}</ul>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const authors = getAuthors();

  return { props: { authors } };
}
