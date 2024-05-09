import { useGif } from '../hooks/useGif'
import ImageItem from './ImageItem'

const DisplayGifs = () => {
  const { loading, data } = useGif()

  return (
    <div className='container-gifs'>
      {
                loading
                  ? data.map(img => (
                    <ImageItem key={img.id} title={img.title} url={img.images.downsized_medium.url} />
                  ))
                  : ''
            }
    </div>

  )
}

export default DisplayGifs
