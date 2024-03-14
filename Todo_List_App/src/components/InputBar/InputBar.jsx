// componente InputBar
export function InputBar (props) {
  //const [text, setText] = useState('')

  const { handleSub, text, set } = props
  return (
    <form
      onSubmit={handleSub}
      className='search-bar'
    >
      <input
        type='text'
        placeholder='Enter task'
        value={text}
        onChange={e => set(e.target.value)}
      />
      <button type='submit'>Add</button>
    </form>
  )
}
