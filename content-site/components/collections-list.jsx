import Link from 'next/link'

import { getUrl } from '../lib/data.js'

export default function CollectionsList ({ collections, type }) {
  const listItems = collections.map(({ id, name }) =>
    <li key={id}>
      <Link href={getUrl(type, id)}>{name}</Link>
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}
