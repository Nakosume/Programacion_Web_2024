// import { TodoTopBar, RenderTasks, TaskCounter, AcsiiArt } from './components'
// import { useToDo } from './hooks/useToDo'

import { useEffect, useState } from 'react'
import { Button, RenderImg, ShowFact } from './components'

const IMG_CATS = 'https://cataas.com/cat/says/'

export function App () {
  const [fact, setFact] = useState('')
  const [catImageUrl, setCatImageUrl] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetchCatFact()
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  // actions and others
  const fetchCatFact = async () => {
    try {
      const response = await fetch('https://catfact.ninja/fact')
      const data = await response.json()
      setFact(data.fact)

      const catImageUrl = IMG_CATS + data.fact.split(' ').slice(0, 4).join(' ')
      setCatImageUrl(catImageUrl)
    } catch (error) {
      console.log(error)
    }
  }

  const newFact = async () => {
    setLoading(true)
    fetchCatFact()
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timeout)
  }

  // execute
  return (
    <div className='cat-facts'>
      <h1>Cat Facts</h1>
      {loading
        ? (
          <div>Loading...</div>
          )
        : (
          <div className='card'>
            <RenderImg imageUrl={catImageUrl} />
            <ShowFact fact={fact} />
          </div>
          )}
      <Button text='Show More Facts :3' onClick={newFact} />
    </div>
  )
}

export default App
