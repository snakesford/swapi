import React from 'react';

const Temp = ({tempF}) => {
  return (
    <div>
      <div className='pr3 pl3'>
          <h1>{tempF}º</h1>
          <h2>{weather}º</h2>
          <h3>{windMPH} MPH</h3>
        </div>
    </div>
  );
}

export default Temp;