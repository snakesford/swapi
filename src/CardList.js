import React from 'react';
import Card from './Card.js'

const CardList = ({weatherData}) => {
  return (
    <div>
      {weatherData.map((name, i) => {
        return (
            <Card
              key={i}
              // wind_mph={weatherData[i].wind_mph}
              // temp_f={weatherData[i].temp_f}
              // temp_c={weatherData[i].temp_c}
              name={weatherData[i].name}
              email={weatherData[i].email}
            />
        )
      })
    }
    </div>
  );

}

export default CardList