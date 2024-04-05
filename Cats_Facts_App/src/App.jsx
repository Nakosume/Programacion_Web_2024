// import { TodoTopBar, RenderTasks, TaskCounter, AcsiiArt } from './components'
// import { useToDo } from './hooks/useToDo'

import { useEffect, useState } from 'react'

export function App () {
  const [fact, setFact] = useState('')
  const [catImg, setCatImg] = useState('')

  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(data => {
        setFact(data.fact)
      })
      .then(setCatImg('https://cataas.com/cat/says/' + fact.split(' ').slice(0, 3).join(' ')))
      .catch(err => console.log(err))
  }, [])

  // {fact.split(' ').slice(0, 3).join(' ')}

  function RenderImg () {
    const src = 'https://cataas.com/cat/says/' + fact.split(' ').slice(0, 3).join(' ')
    return (
      <img src={src} />
    )
  }

  // execute
  return (
    <div className='todo-list'>
      <h1>Cat Facts</h1>
      <RenderImg />
      <p>{fact}</p>
    </div>
  )
}

export default App
