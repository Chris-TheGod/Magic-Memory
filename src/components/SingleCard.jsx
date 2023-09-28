import './SingleCard.css'

export const SingleCard = ({ img, handleChoice, id }) => {
  const handleClick = () => {
    handleChoice({ img, id })
  }

  return (
    <div className='card'>
      <div>
        <img src={img} className='front' alt='card front' />
        <img
          src='/img/cover.png'
          onClick={handleClick}
          className='back'
          alt='card back'
        />
      </div>
    </div>
  )
}
