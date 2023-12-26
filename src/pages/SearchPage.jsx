import  { useEffect } from 'react'

function useQueryParams ({ req }) {
  const isServer = typeof window === 'undefined'

  if (isServer) {
    const { query } = req
    
    return query
  }

  const search = window.location.search
  const params = new URLSearchParams(search)
  return Object.fromEntries(params.entries())
}

export default function SearchPage({ routeParams }) {
  
  const query = useQueryParams()
  console.log(query);

  useEffect(() => {
    document.title = `Has buscado ${routeParams.query}`
  }, [])
  

  return (
    <div>SearchPage</div>
  )
}
