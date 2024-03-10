// componente SearchBar
export function SearchBar (props) {
  const { handleSub, text, set } = props
  return (
    <form
      onSubmit={handleSub}
      className='search-bar'
    >
      <input
        value={text}
        onChange={e => set(e.target.value)}
      />
      <button type='submit'>Add</button>
    </form>
  )
}
