import { EVENT } from '../consts'

function navigate(href) {
  window.history.pushState({}, '', href)
  // Crear un evento personalizado
  const navigationEvent = new Event(EVENT.PUSH_EVENT)
  window.dispatchEvent(navigationEvent)
}

export function Link({ target, to, ...props }) {
  const handleClick = (e) => {
    const isMainEvent = e.button === 0
    const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && !isModifiedEvent && isManageableEvent) {
      e.preventDefault()
      navigate(to)
      window.scrollTo(0, 0)
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props}></a>
}
