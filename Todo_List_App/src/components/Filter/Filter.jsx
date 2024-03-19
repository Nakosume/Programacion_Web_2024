import { useToDo } from '../../hooks/useToDo'

// componente Filter
export function Filter (props) {
  const { id, name, label } = props
  const { filter, setFilter } = useToDo()

  return (
    <div className='filter'>
      <input type='radio' id={id} name={name} checked={filter === id} onChange={() => setFilter(id)} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}
