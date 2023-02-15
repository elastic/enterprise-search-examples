import Head from 'next/head'

export default function AuthorsPage () {
  return (
    <>
      <Head>
        <title>Authors</title>
      </Head>
      <ul className="pages-nav">
        <li><a href="index.html">Home</a></li>
        <li><a href="articles.html">Articles</a></li>
      </ul>
      <p className="search-bar">
        <input type="search" />
        <input type="submit" value="Search" />
      </p>
      <h1>Authors</h1>
      <ul>
        <li><a href="author.html">Author</a></li>
        <li><a href="author.html">Author</a></li>
      </ul>
      <p className="footer">
        Thanks for reading!
        <a href="about.html">About</a> this site.
      </p>
    </>
  )
}
