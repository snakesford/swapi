import React from 'react';
import Card2 from './WindSpeed/Card2.js'
import Condition2 from './Condition2.js'
import Temp2 from './Fahrenheit/Temp2'
import Name2 from './Name2.js'

const CardList = ({weatherData2}) => {
  return (
    <div>
      {weatherData2.map((name, i) => {
        return (
          <div key={i}>
            <Name2 name={weatherData2[i].response.place.name}/>
            <Temp2 tempF={weatherData2[i].response.ob.tempF}/>
            <Condition2 weather={weatherData2[i].response.ob.weather}/>
          <Card2
            key={i}
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