import { useContext } from 'react'
import { GifContext } from '../context/GifContext'

export function useGif () {
  const context = useContext(GifContext)

  if (!context) {
    throw new Error('This Component should be within TaskContextProvider')
  }
  return { ...context }
}
