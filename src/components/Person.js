import React from 'react';

function Person({person}) {
  return (
    <div>
      <h2>Hi, I'm {person.name}, I'm {person.age} years old, I know {person.skills}</h2>
    </div>
  )
}

export default Person;
