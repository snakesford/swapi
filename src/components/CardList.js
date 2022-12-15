import React from 'react';
import Card from './WindSpeed/Card.js'
import Temp from './Fahrenheit/Temp.js'
import Name from './Name.js'
import Condition from './Condition.js'

const CardList = ({weatherData}) => {
  return (
    <div>
      {weatherData.map((name, i) => {
        return (
          <div key={i}>
            <Name
              region={weatherData[i].location.region}
              name={weatherData[i].location.name}
            />
          <Temp 
            temp_f={weatherData[i].current.temp_f}
          />
          <Condition 
            text={weatherData[i].current.condition.text}
          />
          <Card
            wind_mph={weatherData[i].current.wind_mph}
          />
        </div>
            
        )
      })
    }
    </div>
  );
}

export default CardList