import React from 'react';
import Card from '../WindSpeed/Card.js'
import Temp from '../Fahrenheit/Temp.jsx'
import Name from '../Name/Name.js'
import Condition from '../Condition/Condition.jsx'
import Forecast from '../Forecast/Forecast'

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
          <Forecast
            maxtemp_f={weatherData[i].forecast.forecastday[0].day.maxtemp_f}
            mintemp_f={weatherData[i].forecast.forecastday[0].day.mintemp_f}
          />
        </div>
            
        )
      })
    }
    </div>
  );
}

export default CardList