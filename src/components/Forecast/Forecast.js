import React from 'react';

const Forecast = ({maxtemp_f, mintemp_f}) => {
  return (
    <div>
      <h3>Thursday</h3>
      <h4>{maxtemp_f}</h4>
      <h4>{mintemp_f}</h4>
    </div>
  );
}

export default Forecast;