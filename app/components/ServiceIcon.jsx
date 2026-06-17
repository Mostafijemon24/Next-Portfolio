export default function ServiceIcon({ icon, iconImage, alt = '' }) {
  return (
    <div className={`ico${iconImage ? ' ico--image' : ''}`}>
      {iconImage ? (
        <img src={iconImage} alt={alt} loading="lazy" />
      ) : (
        icon
      )}
    </div>
  )
}
