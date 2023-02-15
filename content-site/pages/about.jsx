import Head from 'next/head'

export default function AboutPage () {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <ul className="pages-nav">
        <li><a href="index.html">Home</a></li>
        <li><a href="articles.html">Articles</a></li>
      </ul>
      <p className="search-bar">
        <input type="search" />
        <input type="submit" value="Search" />
      </p>
      <h1>About</h1>
      <p className="content-placeholder"><var>About page content...</var></p>
      <p className="footer">
        Thanks for reading!
        <a href="about.html">About</a> this site.
      </p>
    </>
  )
}
