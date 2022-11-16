import React from 'react';

const SubmitButton = ({ buttonPress }) => {
  // function control(e) {
  //   if(e.keyCode === 13) {
  //     buttonPress()
  //   }
  // }
  // document.addEventListener('keyup', control)
  return (
    <div className='pa3'>
        <a className="f6 link dim ph3 br3 pv2 mb2 dib white bg-black" onClick={buttonPress}>Search</a>
    </div>
  );
}

export default SubmitButton;