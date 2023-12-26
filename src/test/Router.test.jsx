import { beforeEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import { Router } from '../Router'
import { Route } from '../components/Route'
import { Link } from '../components/Link'

describe('Router', () => {
  beforeEach(() => {
    cleanup()
  })
  it('should work', () => {
    render(<Router routes={[]} />)
    expect(true).toBeTruthy()
  })

  it('should render 404 if no routes match', () => {
    render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
    expect(screen.getByText('404')).toBeTruthy()
  })

  it('should render the component of the first route that matches', () => {
    const routes = [
      {
        path: '/',
        Component: () => <h1>Home</h1>,
      },
      {
        path: '/about',
        Component: () => <h1>About</h1>,
      },
    ]

    render(<Router routes={routes} />)
    expect(screen.getByText('Home')).toBeTruthy()
  })

  it('should navigate using links', async () => {
    render(
      <Router>
        <Route path='/' Component={() => {
          return (
            <>
            <h1>Home</h1>
            <Link to='/about'>About</Link>
            </>
          )
        }} />
        <Route path='/about' Component={() => <h1>About</h1>} />
      </Router>
    )
    const button = screen.getByText(/Go to About/)
    fireEvent.click(button)
    
    const aboutTitle = await screen.findByText('About')

    expect(aboutTitle).toBeTruthy()
  })
})
