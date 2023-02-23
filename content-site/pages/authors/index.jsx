import Head from 'next/head'
import Link from 'next/link'

import Header from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'
import CollectionsList from '../../components/collections-list.jsx'

import { getAuthors, getUrl } from '../../lib/data.js'

export default function AuthorsPage ({ authors }) {
  return (
    <>
      <Head>
        <title>Authors</title>
      </Head>

      <Header />

      <h1>Authors</h1>
      <CollectionsList collections={authors} type="author" />

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const authors = getAuthors();

  return { props: { authors } };
}
