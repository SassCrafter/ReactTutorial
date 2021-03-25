import React from 'react';
import Person from './Person';


function NameList() {
  const persons = [
    {
      id: 1,
      name: 'Bruce',
      skills: 'React',
      age: 30,
    },
    {
      id: 2,
      name: 'Clark',
      skills: 'Vue',
      age: 25,
    },
    {
      id: 3,
      name: 'Diana',
      skills: 'Angular',
      age: 22,
    },
  ];
  const personComponents = persons.map((person) => <Person key={person.id} person={person} />);

  return (
    <div>
      {personComponents}
    </div>
  )

}

export default NameList;
