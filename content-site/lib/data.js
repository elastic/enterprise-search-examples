const articles = [
  {
    id: 'foo',
    name: 'Foo',
    content: '<p>Content for Foo article.</p>',
    authorId: 'chris',
    authorName: 'Chris',
    archiveId: '2023',
    archiveName: '2023'
  },
  {
    id: 'bar',
    name: 'Bar',
    content: '<p>Bar article content.</p>',
    authorId: 'alex',
    authorName: 'Alex',
    archiveId: '2023',
    archiveName: '2023'
  },
  {
    id: 'baz',
    name: 'Baz',
    content: '<p>The Baz content.</p>',
    authorId: 'chris',
    authorName: 'Chris',
    archiveId: '2022',
    archiveName: '2022'
  },
];

export function getArticles ({ id, authorId, archiveId } = {}) {
  if (id) { return articles.find(e => e.id === id) }
  if (authorId) { return articles.filter(e => e.authorId === authorId) }
  if (archiveId) { return articles.filter(e => e.archiveId === archiveId) }
  return articles;
}

export function getAuthors ({ id } = {}) {
  const articles = getArticles();
  const authorIds = getUniqueIds(
    articles.map(article => article.authorId)
  );
  const authors = authorIds.map((id) => {
    return {
      id: id,
      name: getName(id)
    };
  });

  if (id) { return authors.find(e => e.id === id) }
  return authors;
}

export function getArchives ({ id } = {}) {
  const articles = getArticles();
  const archiveIds = getUniqueIds(
    articles.map(article => article.archiveId)
  );
  const archives = archiveIds.map((id) => {
    return {
      id: id,
      name: getName(id)
    };
  });

  if (id) { return archives.find(e => e.id === id) }
  return archives;
}

export function getPaths (collection) {
  return collection.map(
    element => ({ params: { id: element.id } })
  );
};

export function getUrl (type, id) {
  return {
    pathname: `/${type}s/[id]`,
    query: { id: id },
  };
}

function getName (id) {
  const first = id.slice(0,1);
  const rest = id.slice(1);

  return first.toUpperCase() + rest;
}

function getUniqueIds (ids) {
  return [...new Set(ids)];
}
