import React from 'react';

const Card = ({wind_mph, temp_c, temp_f, name, email, address}) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow'>
        <h1>Weather</h1>
      <img alt='weatherData' src='https://robohash.org/test?200x200' />
      <div>
        <h2>Name: {name}</h2>
        <p>Email: {email}</p>
      </div>
    </div>
  )
}

export default Card;