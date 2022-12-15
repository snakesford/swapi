import React from 'react';

const Name = ({name, region}) => {
  return (
    <div>
      <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
          <h1 className='pr3 pl3'>{name}, {region}</h1>
        </div>
    </div>
  );
}

export default Name;