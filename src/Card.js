import React from 'react';

const Card = ({maxtemp_c}) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
      <img alt='robots' src='https://robohash.org/test?200x200' />
      <div>
        <p><b><i>WIND: {maxtemp_c}</i></b></p>
      </div>

    </div>
  )
}

export default Card;