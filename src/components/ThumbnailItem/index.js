import './index.css'

const ThumbnailItem = props => {
  const {details, itemImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = details
  const selected = !isActive && 'image'
  const onImage = () => {
    itemImage(id)
  }

  return (
    <li className="list">
      <button className="button" type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onImage}
          className={`img ${selected}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
