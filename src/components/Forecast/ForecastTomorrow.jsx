import React from 'react';

const ForecastTomorrow = ({maxtemp_f, mintemp_f}) => {
  return (
    <div>
      <h3>Friday</h3>
      <h4>{maxtemp_f}</h4>
      <h4>{mintemp_f}</h4>
    </div>
  );
}

export default ForecastTomorrow;