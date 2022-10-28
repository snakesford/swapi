import React from 'react';

const Card = ({maxtemp_c, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld}) => {
  return (
    <div className='bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
      <img alt='robots' src='https://robohash.org/test?200x200' />
      <div>
        {/* <p>Height: {height}</p>
        <p>Mass: {mass}</p> */}
        <p><b><i>WIND: {maxtemp_c}</i></b></p>
        {/* <p>Skin color: {skin_color}</p>
        <p>Eye color: {eye_color}</p>
        <p>Birth year: {birth_year}</p>
        <p>Gender: {gender}</p>
        <p>Home world: {homeworld}</p> */}
      </div>

    </div>
  )
}

export default Card;