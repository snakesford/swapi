import React from 'react';

const Forecast = ({maxtemp_f, mintemp_f}) => {
  return (
    <div>
      <h3>Sunday</h3>
      <h5>{maxtemp_f}</h5>
      <h5>{mintemp_f}</h5>
    </div>
  );
}

export default Forecast;