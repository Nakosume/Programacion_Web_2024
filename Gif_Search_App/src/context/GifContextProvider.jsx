// Reducer & functions
import { useEffect, useState } from 'react'
import { GifContext } from './GifContext'

const apiKey = 'RtKKP5KXHprTMZbzf7WZTABA187e2JxP'
const baseUrl = 'api.giphy.com/v1/gifs'

export const GifContextProvider = ({ children }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  const fetchApi = () => {
    fetch(`${baseUrl}/search?api_key=${apiKey} (something goes here)`)
      .then(respuesta => respuesta.json())
      .then(respuestaJson => {
        setLoading(true)
        setData(respuestaJson.data)
        // console.log(respuestaJson);
      })
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchApi()
  }, [search])

  return (
    <GifContext.Provider value={{
      data,
      loading
    }}
    >
      {children}
    </GifContext.Provider>
  )
}
