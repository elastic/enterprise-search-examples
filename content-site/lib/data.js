export function getArticles () {
  return [
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
}

export function getAuthors () {
  const articles = getArticles();
  const authorIds = getUniqueIds(
    articles.map(article => article.authorId)
  );

  return authorIds.map((id) => {
    return {
      id: id,
      name: getName(id)
    };
  });
}

export function getArchives () {
  const articles = getArticles();
  const archiveIds = getUniqueIds(
    articles.map(article => article.archiveId)
  );

  return archiveIds.map((id) => {
    return {
      id: id,
      name: getName(id)
    };
  });
}

export function getPaths (collection) {
  return collection.map(
    element => ({ params: { id: element.id } })
  );
};

export function getElementById (collection, id) {
  return collection.find(
    element => element.id === id
  );
}

function getName (id) {
  const first = id.slice(0,1);
  const rest = id.slice(1);

  return first.toUpperCase() + rest;
}

function getUniqueIds (ids) {
  return [...new Set(ids)];
}
