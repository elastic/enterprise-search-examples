import Link from 'next/link'

export default function ArticlesList () {
  return (
    <ul>
      <li>
        <p>
          <Link href="/article">Article</Link>
          <br />
          Published <var>year</var> by <var>author</var>
        </p>
      </li>
      <li>
        <p>
          <Link href="/article">Article</Link>
          <br />
          Published <var>year</var> by <var>author</var>
        </p>
      </li>
      <li>
        <p>
          <Link href="/article">Article</Link>
          <br />
          Published <var>year</var> by <var>author</var>
        </p>
      </li>
    </ul>
  )
}
