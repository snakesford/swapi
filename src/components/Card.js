import React from 'react';

const Card = ({name, region, temp_f, temp_c}) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow'>
        <h1>Weather</h1>
      <img alt='weatherData' src='https://robohash.org/test?200x200' />
      <div>
        <h2>Region: {region}</h2>
        <h3>Name: {name}</h3>
        <h3>Fahrenheit {temp_f}º</h3>
        <h3>Celsius {temp_c}º</h3>
        {/* <p>Email: {email}</p> */}
        {/* <p>street: {street}</p> */}
      </div>
    </div>
  )
}

export default Card;