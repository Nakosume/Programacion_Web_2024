// componente InputBar
import { useToDo } from '../../hooks/useToDo'

export function InputBar () {
  // const [text, setText] = useState('')

  const { handleSubmit, text, setText } = useToDo()
  return (
    <form
      onSubmit={handleSubmit}
      className='input-bar'
    >
      <input
        type='text'
        placeholder='Enter task'
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type='submit'>Add</button>
    </form>
  )
}
