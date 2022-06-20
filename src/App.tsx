import { useTranslation } from 'react-i18next';
import { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import routes from '~react-pages'
import { Helmet } from 'react-helmet'
import { set as _set } from 'lodash'

import Shell from '~/components/Shell/Shell';
import ErrorBoundary from '~/pages/Fallback/ErrorBoundary';
import { BusyIndicator } from '@ui5/webcomponents-react';

export default function App() {
  const { t } = useTranslation();

  _set(window, '__appDebugger.routes', routes);
  return (
    <main className="font-sans px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      <Router>
        <Helmet title={t('helmet.title.app')} />
        <Shell title={t('shell.title')} />
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </Router>
    </main>
  )
}

function Routes() {
  return (
    <Suspense fallback={<BusyIndicator active />}>
      {useRoutes(routes)}
    </Suspense>
  )
}


