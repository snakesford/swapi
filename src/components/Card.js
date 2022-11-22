import React from 'react';

const Card = ({bool, name, region, wind_mph, windMPH, text, weather, tempF}) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
        
        {bool ? 
        <div className='pr3 pl3'>
          <h1>{tempF}º</h1>
          <h2>{weather}º</h2>
          <h3>{windMPH} MPH</h3>
        </div>
        :
        
        <div>
           <h2>Wind: {wind_mph} MPH</h2>
        </div>
         }

    </div>
  )
}

export default Card;