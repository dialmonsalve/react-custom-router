import { useEffect, useState, Children } from 'react'
import { EVENT } from './consts'
import { match } from 'path-to-regexp'

export function Router({
  routes = [],
  defaultComponent: DefaultComponent = () => <h1>404</h1>,
}) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENT.PUSH_EVENT, onLocationChange)
    window.addEventListener(EVENT.POP_EVENT, onLocationChange)

    return () => {
      window.removeEventListener(EVENT.PUSH_EVENT, onLocationChange)
      window.removeEventListener(EVENT.POP_EVENT, onLocationChange)
    }
  }, [])

  let routeParams = {}
  const routesFromChildren = Children.map( ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'

    return isRoute ? props : null
  })
  const routesToUse = routes.concat(routesFromChildren).filter(Boolean)

  const Page = routesToUse.find(({ path }) => {
    if (path === currentPath) return true

    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)
    if (!matched) return false

    routeParams = matched.params
    return true
  })?.Component

  return Page ? (
    <Page routeParams={routeParams} />
  ) : (
    <DefaultComponent routeParams={routeParams} />
  )
}
