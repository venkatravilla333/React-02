import React, { useState } from 'react';

function Parent() {
  var [names] = useState([
    'Sachin',
    'Kohli',
    'Gill',
    'Rahul',
    'Sami',
    'Hari',
    'Dilip',
  ]);

  return (
    <div className='Parent'>
      {/* <h1>{names[0]}</h1>
      <h1>{names[1]}</h1>
      <h1>{names[2]}</h1>
      <h1>{names[3]}</h1>
      <h1>{names[4]}</h1> */}
      {names.map((name) => {
        return <h1>{name}</h1>;
      })}
    </div>
  );
}

export default Parent;
