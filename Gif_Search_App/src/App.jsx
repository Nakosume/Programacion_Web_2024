import { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { DisplayGifs } from './components/DisplayGifs'
import { DisplayFavs } from './components/DisplayFavs'

function App () {
  const [category, setCategory] = useState('')

  return (
    <div className='App'>
      <h2>Gifs Expert App</h2>
      <AddCategory setCategory={setCategory} />
      <DisplayFavs />
      <DisplayGifs category={category} />
    </div>
  )
}

export default App
