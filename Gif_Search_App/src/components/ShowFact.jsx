import { useCat } from '../hooks/useCat'

export function ShowFact () {
  const { fact } = useCat()
  return (
    <p className='the-fact'>{fact}</p>
  )
}
