import React from 'react';

const Card = () => {
  return (
    <div className='card-container'>

      <div className='upper-container'>
        <div className='img-container'>
          <img className='img-character' src={require('../img/kermit.png')} alt='avatar-image' />
        </div>
      </div>
      <div className='lower-container'>
        <h1>Tod Frogalicious</h1>
        <h4>Research &amp; Development</h4>
        <h3>Frog Systems</h3>
        <div className='socials-container'>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <button className='more-info-btn'>
          More Info
        </button>
      </div>


    </div>
  )
}

export default Card