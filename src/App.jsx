import { Router } from './Router'
import { Suspense, lazy } from 'react'
import Page404 from './404'

import './App.css'
import SearchPage from './pages/SearchPage'
import Route from './components/Route'

const AboutPage = lazy(() => import('./pages/About.jsx'))
const HomePage = lazy(() => import('./pages/Home.jsx'))

const appRoutes = [
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/about',
    Component: AboutPage,
  },
  {
    path: '/search/:query',
    Component: SearchPage,
  },
]

function App() {
  return (
    // <main>
    //   <Router routes={appRoutes} defaultComponent={Page404} />
    // </main>

    <main>
      <Suspense fallback={null} >
        <Router routes={appRoutes} defaultComponent={Page404}>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
