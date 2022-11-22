import React from 'react';

const Card2 = ({windMPH, weather, tempF}) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
        
        <div className='pr3 pl3'>
          <h3>Wind: {windMPH} MPH</h3>
        </div>
    </div>
  )
}

export default Card2;