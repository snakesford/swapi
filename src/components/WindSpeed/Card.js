import React from 'react';

const Card = ({wind_mph}) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
        <div>
           <h3>Wind: {wind_mph} MPH</h3>
        </div>
    </div>
  )
}

export default Card;