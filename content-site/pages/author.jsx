import Head from 'next/head'

export default function AuthorPage () {
  return (
    <>
      <Head>
        <title>Author</title>
      </Head>
      <ul className="pages-nav">
        <li><a href="index.html">Home</a></li>
        <li><a href="articles.html">Articles</a></li>
      </ul>
      <p className="search-bar">
        <input type="search" />
        <input type="submit" value="Search" />
      </p>
      <h1>Author</h1>
      <p className="content-placeholder"><var>Author content...</var></p>
      <ul>
        <li>
          <p>
            <a href="article.html">Article</a>
            <br />
            Published <var>year</var> by <var>author</var>
          </p>
        </li>
        <li>
          <p>
            <a href="article.html">Article</a>
            <br />
            Published <var>year</var> by <var>author</var>
          </p>
        </li>
        <li>
          <p>
            <a href="article.html">Article</a>
            <br />
            Published <var>year</var> by <var>author</var>
          </p>
        </li>
      </ul>
      <p className="footer">
        Thanks for reading!
        <a href="about.html">About</a> this site.
      </p>
    </>
  )
}
