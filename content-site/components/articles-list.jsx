import Link from 'next/link'

import { getUrl } from '../lib/data.js'

export default function ArticlesList ({ articles }) {
  const listItems = articles.map(({ id, name, authorName, archiveName }) =>
    <li key={id}>
      <p>
        <Link href={getUrl('article', id)}>{name}</Link>
        <br />
        Published by <em>{authorName}</em> in <em>{archiveName}</em>
      </p>
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
