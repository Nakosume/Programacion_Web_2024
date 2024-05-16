/* eslint-disable no-undef */
// Reducer & functions
import { useCallback, useEffect, useState } from 'react'
import { GifContext } from './GifContext'
import debounce from 'just-debounce-it'

const key = '0OgQXOAJvufNbdsE54ptzagc6G8ZP9lu'

let initFavs = []
const lclStrg = JSON.parse(window.localStorage.getItem('myFavourites'))
if (lclStrg !== null) {
  initFavs = lclStrg
} else if (lclStrg === null) {
  initFavs = []
} else {
  alert('Something went wrong loading the tasks!')
}

export const GifContextProvider = ({ children }) => {
  const [data, setData] = useState([])
  const [fav, setFav] = useState(initFavs)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  const fetchApi = (search) => {
    setLoading(true)
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${search}`)
      .then(res => res.json())
      .then(data => {
        setData(data.data)
        console.log(data.data)
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }

  const addFav = (gif) => {
    const storedItems = JSON.parse(window.localStorage.getItem('myFavourites')) || []
    const existingItem = storedItems.find(item => item.id === gif.id)

    if (!existingItem) {
      const items = [...storedItems, gif]
      window.localStorage.setItem('myFavourites', JSON.stringify(items))
      setFav([...fav, gif])
      alert('Added to favorites')
    } else {
      alert('Already exist on favorites')
    }
  }

  const deleteFav = (gif) => {
    const storedItems = JSON.parse(window.localStorage.getItem('myFavourites')) || []
    const items = storedItems.filter((item) => item.id !== gif.id)
    window.localStorage.setItem('myFavourites', JSON.stringify(items))
    setFav(items)
    alert('Removed from favs')
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
      search,
      debounceIt,
      fav,
      addFav,
      deleteFav
    }}
    >
      {children}
    </GifContext.Provider>
  )
}
