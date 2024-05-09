import { useState } from 'react'
import { useGif } from '../hooks/useGif'

const AddCategory = ({ setCategory }) => {
  const { search, setSearch } = useGif()
  const [error, setError] = useState(false)

  const searchGif = e => {
    e.preventDefault()
    if (search === '') {
      setError(true)
      return
    }
    setError(false)
    setCategory(search)
    setSearch('')
  }

  /* const debounceHandler = (e) => {
    const searchIt = e.target.value
    useCallback(
      setTimeout(() => { setSearch(searchIt) }, 2000)
      , []
    )
  } */

  return (
    <>
      <form onSubmit={searchGif}>
        <input
          type='text' placeholder='Search...'
          onChange={e => setSearch(e.target.value)}
          value={search}
        />
      </form>
      {error ? <p className='error'>El campo no puede estar vacio...</p> : ''}
    </>
  )
}

export default AddCategory
