import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2'>
      <input type='search' className='pa3 ba br2 b-green bg-lightest-blue'
      placeholder='Search weather'
      onChange={searchChange}/>
    </div>
  )
}

export default SearchBox;