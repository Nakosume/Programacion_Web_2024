import { useGif } from '../hooks/useGif'
import ImageItem from './ImageItem'

// data.lenght > 0

const DisplayGifs = () => {
  const { data, loading } = useGif()

  return (
    <div className='container-gifs'>
      {
                loading
                  ? <div className='loader'>loading...</div>
                  : (data.length > 0
                      ? data.map(img => (
                        <ImageItem key={img.id} title={img.title} url={img.images.downsized_medium.url} />
                      ))
                      : <div>Oe mano, buscate alguito</div>)
            }
    </div>

  )
}

export default DisplayGifs
