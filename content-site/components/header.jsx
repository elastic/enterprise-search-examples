import Link from 'next/link'

export default function Header () {
  return (
    <>
      <ul className="pages-nav">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/articles">Articles</Link>
        </li>
      </ul>
      <p className="search-bar">
        <input type="search" />
        &nbsp;
        <input type="submit" value="Search" />
      </p>
    </>
  )
}
