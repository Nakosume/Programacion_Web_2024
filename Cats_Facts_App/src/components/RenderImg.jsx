export function RenderImg (props) {
  const { imageUrl } = props
  return (
    <div className='cat-cont'>
      <img className='cat-img' src={imageUrl} alt='Cat' />
    </div>
  )
}
