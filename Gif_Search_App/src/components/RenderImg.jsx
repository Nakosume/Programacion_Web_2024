import { useState } from 'react'
import { useCat } from '../hooks/useCat'

export function RenderImg () {
  const [showImg, setShowImg] = useState(false)
  const { catImageUrl } = useCat()

  const handleOnLoad = () => {
    setShowImg(true)
  }

  return (
    <div className={showImg ? 'cat-cont' : 'no-cat'}>
      <img
        className='cat-img'
        src={catImageUrl}
        alt='Cat'
        onLoad={handleOnLoad}
      />
    </div>
  )
}
