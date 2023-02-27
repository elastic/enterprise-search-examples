import AppSearchAPIConnector from '@elastic/search-ui-app-search-connector'
import { SearchProvider, ErrorBoundary } from '@elastic/react-search-ui';
import { useMemo } from 'react'
import Head from 'next/head'
import Link from 'next/head'

import Footer from '../components/footer.jsx'

export default function SearchPage () {
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
        <ErrorBoundary>

          <p className="search-bar">
            <input type="search" />
            &nbsp;
            <input type="submit" value="Search" />
          </p>

          <h1>Search</h1>

          <div className="grid">
            <div className="grid-col">
              <div className="content-box">

                <p>Results:</p>

              </div>
            </div>
            <div className="grid-col">
              <div className="content-box">

                <p>By year:</p>

                <p>By author:</p>

              </div>
            </div>
          </div>

        </ErrorBoundary>
      </SearchProvider>

      <Footer />
    </>
  )
}

function getSearchProviderConfig () {
  //make sure this is called only once per page load
  console.log('Getting search provider config');

  const endpointBase = 'https://enterprise-search-8-6-1-4gb-ram.ent.us-central1.gcp.cloud.es.io';
  const engineName = 'content-site';
  const searchKey = 'search-se4wspv888i3itjnqghpm954';
  const apiConnectorConfig = { endpointBase, engineName, searchKey };
  const apiConnector = new AppSearchAPIConnector(apiConnectorConfig);

  return { apiConnector };
}
