import React from 'react';

const Card = ({bool, name, region, tempC, temp_f, wind_mph, windMPH, text, weather, tempF}) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
        <h1 className='pr3 pl3'>{name}, {region}</h1>
        {/* {bool ?  */}
        
         <div>
           <h2>{temp_f}º </h2>
           <h2>{text}</h2>
           <h2>{wind_mph} MPH</h2>
        </div>
        {/* :
        
        <div>
          <h1>{tempF}º</h1>
          <h2>{weather}º</h2>
          <h3>{windMPH} MPH</h3>
        </div>
        } */}

    </div>
  )
}

export default Card;