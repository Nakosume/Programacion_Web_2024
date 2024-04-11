import { useState } from 'react'

export function RenderImg (props) {
  const [showImg, setShowImg] = useState(false)
  const { imageUrl } = props

  const handleOnLoad = () => {
    setShowImg(true)
  }

  return (
    <div className={showImg ? 'cat-cont' : 'no-cat'}>
      <img
        className='cat-img'
        src={imageUrl}
        alt='Cat'
        onLoad={handleOnLoad}
      />
    </div>
  )
}
