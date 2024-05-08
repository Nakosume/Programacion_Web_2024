import { useCat } from '../hooks/useCat'

export function Button (props) {
  const { text } = props
  const { newFact } = useCat()
  return (
    <div>
      <button onClick={newFact}>{text}</button>
    </div>
  )
}
