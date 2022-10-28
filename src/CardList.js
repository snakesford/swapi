import React from 'react';
import Card from './Card.js'

const CardList = ({robots}) => {
  return (
    <div>
      {robots.map((name, i) => {
        return (
          <Card
            key={name}
            maxtemp_c={robots[i].maxtemp_c}
            // name={robots[i].name} 
            // height={robots[i].height} 
            // mass={robots[i].mass} 
            // hair_color={robots[i].hair_color} 
            // skin_color={robots[i].skin_color} 
            // eye_color={robots[i].eye_color}
            // birth_year={robots[i].birth_year} 
            // gender={robots[i].gender} 
            // homeworld={robots[i].homeworld}
          />
        )
      })
    }
    </div>
  );
}

export default CardList