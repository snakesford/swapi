import React from 'react';
import Card from './Card.js'

const CardList = ({weatherData}) => {
  return (
    <div>
      {weatherData.map((name, i) => {
        return (
            <Card
              key={i}
              // title={weatherData[i].title}
              // email={weatherData[i].email}
              region={weatherData[i].location.region}
              name={weatherData[i].location.name}
              temp_c={weatherData[i].current.temp_c}
              temp_f={weatherData[i].current.temp_f}
              // street={weatherData[i].address.street}

            />
        )
      })
    }
    </div>
  );

}

export default CardList