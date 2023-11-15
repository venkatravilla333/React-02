import React, { useState } from 'react';
import C from './C';
import D from './D';

function A(props) {
  // var [name, setName] = useState('Hari');

  return (
    <div>
      <C name={props.name} />
      <D name={props.name} />
    </div>
  );
}

export default A;
