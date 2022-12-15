import React from 'react';

const Condition = ({weather}) => {
  return (
    <div>
      <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
          <h3>Condition: {weather}</h3>
        </div>
    </div>
  );
}

export default Condition;