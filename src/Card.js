import React from 'react';

const Card = ({text, day}) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
        <h1>{day}'s weather</h1>
      <img alt='weatherData' src='https://robohash.org/test?200x200' />
      <div>
        {/* <p>Temperature Fahrenheit: {temp_f}</p>
        <p>Temp Celsius {temp_c}</p> */}
        <p>Weather desc: {text}</p>
      </div>

    </div>
  )
}

export default Card;