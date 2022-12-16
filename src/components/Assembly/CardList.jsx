import React from 'react';
import Card from '../WindSpeed/Card.jsx'
import Temp from '../Fahrenheit/Temp.jsx'
import Name from '../Name/Name.jsx'
import Condition from '../Condition/Condition.jsx'
import Forecast from '../Forecast/Forecast.jsx'
import ForecastTomorrow from '../Forecast/ForecastTomorrow.jsx'
import ForecastDayAfterTomorrow from '../Forecast/ForecastDayAfterTomorrow.jsx'

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
            <ForecastTomorrow
              maxtemp_f={weatherData[i].forecast.forecastday[1].day.maxtemp_f}
              mintemp_f={weatherData[i].forecast.forecastday[1].day.mintemp_f}
            />

            <ForecastDayAfterTomorrow
              maxtemp_f={weatherData[i].forecast.forecastday[2].day.maxtemp_f}
              mintemp_f={weatherData[i].forecast.forecastday[2].day.mintemp_f}
            />
        </div>
            
        )
      })
    }
    </div>
  );
}

export default CardList