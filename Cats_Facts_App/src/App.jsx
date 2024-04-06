// import { TodoTopBar, RenderTasks, TaskCounter, AcsiiArt } from './components'
// import { useToDo } from './hooks/useToDo'

import { useEffect, useState } from 'react'

export function App () {
  const [fact, setFact] = useState('')

  // For context, reducers & acctions
  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(data => {
        setFact(data.fact)
      })
      .catch(err => console.log(err))
  }, [])

  const newFact = () => {
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(data => {
        setFact(data.fact)
      })
      .catch(err => console.log(err))
  }

  // For components
  function RenderImg (props) {
    const { fact } = props
    return (
      <div className='cat-cont'>
        <img className='cat-img' src={'https://cataas.com/cat/says/' + fact.split(' ').slice(0, 4).join(' ')} />
      </div>
    )
  }

  function ChangeButton (props) {
    const { text, onClick } = props
    return (
      <div>
        <button onClick={() => onClick()}>{text}</button>
      </div>
    )
  }

  // execute
  return (
    <div className='cat-facts'>
      <h1>Cat Facts</h1>
      <RenderImg fact={fact} />
      <p className='the-fact'>{fact}</p>
      <ChangeButton text='Show Mewr Facts :3' onClick={newFact} />
    </div>
  )
}

export default App
