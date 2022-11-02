import React from 'react';

const Card = ({wind_mph, temp_c, temp_f, name, email, address}) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow'>
        <h1>Weather</h1>
      <img alt='weatherData' src='https://robohash.org/test?200x200' />
      <div>
        {/* <h3>Fahrenheit: {temp_f}º</h3>
        <h3>Celsius: {temp_c}º</h3>
        <h3>{`wind_mph`}: {wind_mph}</h3>
        <h3>Wind speed: {wind_mph} MPH</h3> */}
        <h1>Name: {name}</h1>
        <p>Email: {email}</p>
        <p>Address {address}</p>
      </div>
    </div>
  )
}

export default Card;