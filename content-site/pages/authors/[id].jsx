import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/header'
import Footer from '../../components/footer'
import ArticlesList from '../../components/articles-list'

export default function AuthorPage ({ author }) {
  return (
    <>
      <Head>
        <title>{author.name}</title>
      </Head>

      <Header />

      <h1>{author.name}</h1>
      <p className="content-placeholder"><var>Author content...</var></p>

      <ArticlesList />

      <Footer />
    </>
  );
}

const getAuthors = function () {
  return [
    { id: 'chris', name: 'Chris'},
    { id: 'alex', name: 'Alex'}
  ];
};

const getAuthor = function (id) {
  const authors = getAuthors();
  return authors.find(author => author.id === id);
};

const getPaths = function (collection) {
  collection.map(element => { params: { id: element.id} } );
};

export async function getStaticPaths () {
  const authors = getAuthors();
  const paths = getPaths(authors);

  return {
    paths: paths,
    fallback: false
  };
}

export async function getStaticProps ({ params }) {
  const author = getAuthor(params.id);

  return {
    props: { author: author }
  };
}
