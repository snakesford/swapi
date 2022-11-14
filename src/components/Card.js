import React from 'react';

const Card = ({name, region, temp_f, wind_mph, text}) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
        <h1 className='pr3 pl3'>{name}, {region}</h1>
      <div>
        {/* <h2>{tempF}º</h2> */}
        <h2>{temp_f}º </h2>
        <h2>{text}</h2>
        <h2>{wind_mph} MPH</h2>
      </div>
    </div>
  )
}

export default Card;