// Reducer & functions
import { useCallback, useEffect, useState } from 'react'
import { GifContext } from './GifContext'
import debounce from 'just-debounce-it'

const key = '0OgQXOAJvufNbdsE54ptzagc6G8ZP9lu'

export const GifContextProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  const fetchApi = (search) => {
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

  const debounceIt = useCallback(debounce((q) => fetchApi(q), 2000), [])

  useEffect(() => {
    debounceIt(search)
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
