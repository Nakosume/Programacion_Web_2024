import { useReducer, useState, useEffect } from 'react'
import { CatContext } from './CatContext'
import { CAT_ACTIONS } from '../const/CatActions'
import { reducerCat } from '../reducers/CatReducer'

// Reducer & functions

const IMG_CATS = 'https://cataas.com/cat/says/'

export const CatContextProvider = ({ children }) => {
  const [fact, dispatchFact] = useReducer(reducerCat, '')
  const [catImageUrl, setCatImageUrl] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(data => {
        dispatchFact({ type: CAT_ACTIONS.SET_CAT, payload: data.fact })
        const catImageUrl = IMG_CATS + data.fact.split(' ').slice(0, 4).join(' ')
        setCatImageUrl(catImageUrl)
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  const newFact = () => {
    setLoading(true)
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(data => {
        dispatchFact({ type: CAT_ACTIONS.SET_CAT, payload: data.fact })
        const catImageUrl = IMG_CATS + data.fact.split(' ').slice(0, 4).join(' ')
        setCatImageUrl(catImageUrl)
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }

  return (
    <CatContext.Provider value={{
      fact,
      catImageUrl,
      loading,
      newFact
    }}
    >
      {children}
    </CatContext.Provider>
  )
}
