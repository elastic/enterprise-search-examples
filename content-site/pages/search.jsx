import AppSearchAPIConnector from '@elastic/search-ui-app-search-connector'
import {
  SearchProvider,
  ErrorBoundary,
  SearchBox,
  Results,
  Facet,
  Sorting,
  ResultsPerPage,
  PagingInfo,
  Paging
} from '@elastic/react-search-ui';
import { useMemo } from 'react'
import Head from 'next/head'
import Link from 'next/head'

import Footer from '../components/footer.jsx'

export default function SearchPage ({ sortOptions, resultsPerPageOptions }) {
  const searchProviderConfig = useMemo(getSearchProviderConfig, []);

  return (
    <>
      <Head>
        <title>Search</title>
      </Head>

      <ul className="pages-nav">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/articles">Articles</Link>
        </li>
      </ul>

      <SearchProvider config={searchProviderConfig}>

        <SearchBox />

        <h1>Search</h1>

        <ErrorBoundary>

          <div className="grid">
            <div className="grid-col">
              <div className="content-box">

                <p>Results:</p>
                <Sorting sortOptions={sortOptions} />
                <ResultsPerPage options={resultsPerPageOptions} />
                <PagingInfo />
                <Paging />
                <Results titleField="title" urlField="url" />

              </div>
            </div>
            <div className="grid-col">
              <div className="content-box">

                <p>By year:</p>
                <Facet field="archive" />

                <p>By author:</p>
                <Facet field="author" />

              </div>
            </div>
          </div>

        </ErrorBoundary>

      </SearchProvider>

      <Footer />
    </>
  )
}

export async function getStaticProps () {
  const sortOptions = [
    {
      name: 'Relevance',
      value: '',
      direction: ''
    },
    {
      name: 'Title',
      value: 'title',
      direction: 'asc'
    }
  ];
  const resultsPerPageOptions = [1, 5, 10, 20];

  return { props: { sortOptions, resultsPerPageOptions } };
}

function getSearchProviderConfig () {
  const endpointBase = 'https://enterprise-search-8-6-1-4gb-ram.ent.us-central1.gcp.cloud.es.io';
  const engineName = 'content-site';
  const searchKey = 'search-se4wspv888i3itjnqghpm954';
  const apiConnectorConfig = { endpointBase, engineName, searchKey };
  const apiConnector = new AppSearchAPIConnector(apiConnectorConfig);

  const search_fields = {
    title: {},
    headings: {},
    body_content: {},
    author: {},
    archive: {}
  };
  const result_fields = {
    title: { raw: {} },
    url: { raw: {} },
    body_content: { raw: {} }
  };
  const facets = {
    author: { type: "value" },
    archive: { type: "value" }
  };
  const searchQuery = { search_fields, result_fields, facets };

  return { apiConnector, searchQuery };
}
