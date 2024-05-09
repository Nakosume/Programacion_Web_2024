// Reducer & functions
import { useEffect, useState } from 'react'
import { GifContext } from './GifContext'

const key = 'Pa7OKX0j4Wf0lfKDrH40M76Cm9wrYrXQ'

export const GifContextProvider = ({ children }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  const fetchApi = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${search}`)
      .then(res => res.json())
      .then(data => {
        setLoading(true)
        setData(data.data)
        // console.log(respuestaJson);
      })
      .then(console.log(data))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    setTimeout(() => {
      fetchApi()
    }, 2000)
  }, [search])

  return (
    <GifContext.Provider value={{
      data,
      loading,
      setSearch,
      search
    }}
    >
      {children}
    </GifContext.Provider>
  )
}
