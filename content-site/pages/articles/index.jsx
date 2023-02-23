import Head from 'next/head'
import Link from 'next/link'

import Header from '../../components/header.jsx'
import Footer from '../../components/footer.jsx'
import ArticlesList from '../../components/articles-list.jsx'

import { getArticles, getAuthors, getArchives, getUrl } from '../../lib/data.js'

export default function ArticlesPage ({ articles, authors, archives }) {
  const archivesListItems = archives.map(({ id }) =>
    <li key={id}>
      <Link href={getUrl('archive', id)}>{id}</Link>
    </li>
  );
  const authorsListItems = authors.map(({ id, name }) =>
    <li key={id}>
      <Link href={getUrl('author', id)}>{name}</Link>
    </li>
  );

  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>

      <Header />

      <h1>Articles</h1>
      <div className="grid">
        <div className="grid-col">
          <div className="content-box">
            <p>Most recent:</p>
            <ArticlesList articles={articles} />
          </div>
        </div>
        <div className="grid-col">
          <div className="content-box">
            <p>By year:</p>
            <ul>{archivesListItems}</ul>
            <p>By author:</p>
            <ul>{authorsListItems}</ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const articles = getArticles();
  const authors = getAuthors();
  const archives = getArchives();

  return { props: { articles, authors, archives } };
}
