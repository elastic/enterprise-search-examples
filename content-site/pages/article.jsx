import Head from 'next/head'

export default function ArticlePage () {
  return (
    <>
      <Head>
        <title>Article</title>
      </Head>
      <ul className="pages-nav">
        <li><a href="index.html">Home</a></li>
        <li><a href="articles.html">Articles</a></li>
      </ul>
      <p className="search-bar">
        <input type="search" />
        <input type="submit" value="Search" />
      </p>
      <h1>Article</h1>
      <p>Published <a href="archive.html">year</a> by <a href="author.html">author</a></p>
      <p className="content-placeholder"><var>Article content...</var></p>
      <p className="footer">
        Thanks for reading!
        <a href="about.html">About</a> this site.
      </p>
    </>
  )
}
