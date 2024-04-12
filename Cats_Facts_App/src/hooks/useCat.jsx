import { useContext } from 'react'
import { CatContext } from '../context/CatContext'

export function useCat () {
  const context = useContext(CatContext)

  if (!context) {
    throw new Error('This Component should be within TaskContextProvider')
  }
  return { ...context }
}
