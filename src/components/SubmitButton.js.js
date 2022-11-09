import React from 'react';

const SubmitButton = ({ buttonPress }) => {
  function doThing() {
    console.log('doingthingsifjsofglo');
  }
  return (
    <div>
        <input type="submit" value="Submit" onClick={buttonPress}/>
    </div>
  );
}

export default SubmitButton;