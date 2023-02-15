import Head from 'next/head'

export default function ArchivePage () {
  return (
    <>
      <Head>
        <title>Archive</title>
      </Head>
      <ul className="pages-nav">
        <li><a href="index.html">Home</a></li>
        <li><a href="articles.html">Articles</a></li>
      </ul>
      <p className="search-bar">
        <input type="search" />
        <input type="submit" value="Search" />
      </p>
      <h1>Archive</h1>
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
