// import { TodoTopBar, RenderTasks, TaskCounter, AcsiiArt } from './components'
import { useCat } from './hooks/useCat'
import { Button, RenderImg, ShowFact } from './components'

export function App () {
  const { loading } = useCat()

  // execute
  return (
    <div className='cat-facts'>
      <h1>Cat Facts</h1>
      {loading
        ? (
          <div className='loader'>Loading...</div>
          )
        : (
          <div className='card'>
            <RenderImg />
            <ShowFact />
          </div>
          )}
      <Button text='Show More Facts :3' />
    </div>
  )
}

export default App
