import { useGif } from '../hooks/useGif'
import { ImageItem } from './ImageItem'

// data.lenght > 0

export const DisplayGifs = () => {
  const { data, loading, addFav } = useGif()

  return (
    <div className='container-gifs'>
      {
                loading
                  ? <div className='loader'>loading...</div>
                  : (data.length > 0
                      ? data.map(img => (
                        <ImageItem key={img.id} img={img} title={img.title} url={img.images.downsized_medium.url} clikAction={addFav} />
                      ))
                      : <div>Oe mano, buscate alguito</div>)
            }
    </div>

  )
}
