import './SingleCard.css'

export const SingleCard = ({ img }) => {
  return (
    <div className='card'>
      <div>
        <img src={img} className='front' alt='card front' />
        <img src='/img/cover.png' className='back' alt='card back' />
      </div>
    </div>
  )
}
