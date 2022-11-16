import React from 'react';
import Card from './Card.js'

const CardList = ({weatherData, bool}) => {
  return (
    <div>
      {weatherData.map((name, i) => {
        return (
            // <Card
            //   key={i}
            //   region={weatherData[i].location.region}
            //   name={weatherData[i].location.name}
            //   temp_f={weatherData[i].current.temp_f}
            //   wind_mph={weatherData[i].current.wind_mph}
            //   text={weatherData[i].current.condition.text}
            // />
            <Card
              bool={bool}
              key={i}
              name={weatherData[i].response.place.name}
              tempF={weatherData[i].response.ob.tempF}
              weather={weatherData[i].response.ob.weather}
              windMPH={weatherData[i].response.ob.windMPH}
            />
        )
      })
    }
    </div>
  );

}

export default CardList