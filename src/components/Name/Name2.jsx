import React from 'react';

const Name = ({name, state}) => {

  const name2 = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div>
      <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
          <h1 className='pr3 pl3'>{name2}, {state.toUpperCase()}</h1>
        </div>
    </div>
  );
}

export default Name;