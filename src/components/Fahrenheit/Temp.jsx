import React from 'react';

const Temp = ({temp_f, feelslike_f}) => {
  return (
    <div>
      <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
          <h2>{temp_f}º </h2>
          <h3>Feels {feelslike_f}º</h3>
        </div>
    </div>
  );
}

export default Temp;