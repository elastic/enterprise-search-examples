import Head from 'next/head'

export default function ArticlesPage () {
  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>
      <ul className="pages-nav">
        <li><a href="index.html">Home</a></li>
        <li><a href="articles.html">Articles</a></li>
      </ul>
      <p className="search-bar">
        <input type="search" />
        <input type="submit" value="Search" />
      </p>
      <h1>Articles</h1>
      <div className="grid">
        <div className="grid-col">
          <div className="content-box">
            <p>Most recent:</p>
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
          </div>
        </div>
        <div className="grid-col">
          <div className="content-box">
            <p>By year:</p>
            <ul>
              <li><a href="archive.html">Archive</a></li>
              <li><a href="archive.html">Archive</a></li>
            </ul>
            <p>By author:</p>
            <ul>
              <li><a href="author.html">Author</a></li>
              <li><a href="author.html">Author</a></li>
            </ul>
          </div>
        </div>
      </div>
      <p className="footer">
        Thanks for reading!
        <a href="about.html">About</a> this site.
      </p>
    </>
  )
}
