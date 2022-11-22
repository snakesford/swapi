import React from 'react';

const Condition = ({weather}) => {
  return (
    <div>
      <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
          <h2>Condition: {weather}</h2>
        </div>
    </div>
  );
}

export default Condition;