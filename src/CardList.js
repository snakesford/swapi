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
          />
        )
      })
    }
    </div>
  );
}

export default CardList