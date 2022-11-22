import React from 'react';
import Card2 from './Card2.js'

const CardList = ({weatherData2}) => {
  return (
    <div>
      {weatherData2.map((name, i) => {
        return (
          <div key={i}>
          <Card2
            key={i}
            name={weatherData2[i].response.place.name}
            tempF={weatherData2[i].response.ob.tempF}
            weather={weatherData2[i].response.ob.weather}
            windMPH={weatherData2[i].response.ob.windMPH}
          />
        </div>
        )
      })
    }
    </div>
  );
}

export default CardList