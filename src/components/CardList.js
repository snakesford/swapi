import React from 'react';
import Card from './Card.js'

const CardList = ({weatherData, bool}) => {
  return (
    <div>
      {weatherData.map((name, i) => {
        return (
          <div key={i}>
          {bool ?
          // <h1>Loading API</h1>
          <Card
            className='AREI'
            key={i}
            bool={bool}
            name={weatherData[i].response.place.name}
            tempF={weatherData[i].response.ob.tempF}
            weather={weatherData[i].response.ob.weather}
            windMPH={weatherData[i].response.ob.windMPH}
        />
        :
          <Card
            key={i}
            bool={bool}
            region={weatherData[i].location.region}
            name={weatherData[i].location.name}
            temp_f={weatherData[i].current.temp_f}
            wind_mph={weatherData[i].current.wind_mph}
            text={weatherData[i].current.condition.text}
          />
        }
        </div>
            
        )
      })
    }
    </div>
  );
}

export default CardList








// import React from 'react';
// import Card from './Card.js'

// const CardList = ({weatherData, bool}) => {
//   return (
//     <div>
//       {weatherData.map((name, i) => {
//         return (
//           <div key={i}>
//           {bool ?
//           // <h1>Loading API</h1>
//           <Card
//             key={i}
//             bool={bool}
//             name={weatherData[i].response.place.name}
//             tempF={weatherData[i].response.ob.tempF}
//             weather={weatherData[i].response.ob.weather}
//             windMPH={weatherData[i].response.ob.windMPH}
//         />
//         :
        
        
//           <Card
//             key={i}
//             bool={bool}
//             region={weatherData[i].location.region}
//             name={weatherData[i].location.name}
//             temp_f={weatherData[i].current.temp_f}
//             wind_mph={weatherData[i].current.wind_mph}
//             text={weatherData[i].current.condition.text}
//           />
//         }
//         </div>
            
//         )
//       })
//     }
//     </div>
//   );

// }

// export default CardList