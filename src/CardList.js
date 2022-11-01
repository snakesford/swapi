import React from 'react';
import Card from './Card.js'

const CardList = ({weatherData}) => {
  return (
    <div>
      {weatherData.map((name, i) => {
        return (
          <Card
            key={i}
            text={weatherData[i].text}
            day={weatherData[i].day}
            // temp_f={weatherData[i].temp_f}
            // temp_c={weatherData[i].temp_c}
          />
        )
      })
    }
    </div>
  );

}

export default CardList