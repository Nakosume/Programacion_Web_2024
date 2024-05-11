import { useState } from 'react'

import { AddCategory, DisplayGifs, DisplayFavs } from './components'

function App () {
  const [showFav, setShowFav] = useState(false)

  function handleChange () {
    setShowFav(!showFav)
  }

  return (
    <div className='App'>
      <h2>Gifs Search App</h2>
      <AddCategory />
      <button onClick={handleChange}>
        {!showFav
          ? <>Show Favs</>
          : <>Hide Favs</>}
      </button>
      {!showFav
        ? <DisplayGifs />
        : <DisplayFavs />}

    </div>
  )
}

export default App
