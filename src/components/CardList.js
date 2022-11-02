import React from 'react';
import Card from './Card.js'

const CardList = ({weatherData}) => {
  return (
    <div>
      {weatherData.map((name, i) => {
        return (
            <Card
              key={i}
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