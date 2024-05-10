import { useState } from 'react'

const ImageItem = ({ title, url }) => {
  const [show, setShow] = useState(false)

  const handleOnLoad = () => {
    setShow(true)
  }
  return (
    <div>
      <img src={url} alt={title} onLoad={handleOnLoad} />
      <div className={show ? 'no-img' : 'loader-img'} />
      <p>{title}</p>
    </div>
  )
}

export default ImageItem
