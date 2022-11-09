import React from 'react';

const Card = ({name, region, temp_f, temp_c}) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
        <h1>Weather</h1>
      <img alt='weatherData' src='https://robohash.org/test?200x200' />
      <div>
        <h2>{name}, {region}</h2>
        <h3>{temp_f}º </h3>
      </div>
    </div>
  )
}

export default Card;