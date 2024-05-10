import { useState } from 'react'
import { useGif } from '../hooks/useGif'

export const AddCategory = ({ setCategory }) => {
  const { search, setSearch, debounceIt } = useGif()
  const [error, setError] = useState(false)

  const searchGif = e => {
    e.preventDefault()
    if (search === '') {
      setError(true)
      return
    }
    setError(false)
    setCategory(search)
    debounceIt(search)
  }

  return (
    <>
      <form onSubmit={searchGif}>
        <input
          type='text' placeholder='Search...'
          onChange={e => setSearch(e.target.value)}
          value={search}
        />
        <button type='submit'>Search</button>
      </form>
      {error ? <p className='error'>El campo no puede estar vacio...</p> : ''}
    </>
  )
}
