import React from 'react';
import Card from './Card.js'

const CardList = ({weatherData}) => {
  return (
    <div>
      {weatherData.map((name, i) => {
        return (
          <Card
            key={name}
            maxtemp_c={weatherData[i].maxtemp_c}
          />
        )
      })
    }
    </div>
  );

}

export default CardList