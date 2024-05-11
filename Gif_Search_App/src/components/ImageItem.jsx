import { useState } from 'react'

export const ImageItem = ({ img, clikAction, title, url }) => {
  const [show, setShow] = useState(false)

  const handleOnLoad = () => {
    setShow(true)
  }
  return (
    <div className='gif-card'>
      <img src={url} alt={title} onLoad={handleOnLoad} onClick={() => clikAction(img)} />
      <div className={show ? 'no-img' : 'loader-img'} />
      <p>{title}</p>
    </div>
  )
}
