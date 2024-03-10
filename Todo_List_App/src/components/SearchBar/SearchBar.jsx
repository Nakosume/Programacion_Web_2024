// componente SearchBar
export function SearchBar (props) {
  const { handleSub, text, set } = props
  return (
    <form
      onSubmit={handleSub}
      className='add-bar' style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      }}
    >
      <input
        value={text}
        onChange={e => set(e.target.value)}
      />
      <button type='submit'>Add</button>
    </form>
  )
}
