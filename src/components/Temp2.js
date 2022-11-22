import React from 'react';

const Temp = ({tempF}) => {
  return (
    <div>
      <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
          <h2>Fahrenheit: {tempF}º </h2>
        </div>
    </div>
  );
}

export default Temp;