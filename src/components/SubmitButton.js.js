import React from 'react';

const SubmitButton = ({ buttonPress }) => {
  return (
    <div>
        <input type="submit" value="Submit" onClick={buttonPress}/>
    </div>
  );
}

export default SubmitButton;