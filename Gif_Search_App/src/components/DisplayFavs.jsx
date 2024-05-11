import { useGif } from '../hooks/useGif'
import { ImageItem } from './ImageItem'

// data.lenght > 0

export const DisplayFavs = () => {
  const { fav, loading, deleteFav } = useGif()

  return (
    <div className='fav-disp'>
      <h2>Favorites</h2>
      <div className='container-gifs'>
        {
                loading
                  ? <div className='loader'>loading...</div>
                  : (fav.length > 0
                      ? fav.map(img => (
                        <ImageItem key={img.id} img={img} title={img.title} url={img.images.downsized_medium.url} clikAction={deleteFav} />
                      ))
                      : <div>No hay favoritos</div>)
            }
      </div>
    </div>

  )
}
