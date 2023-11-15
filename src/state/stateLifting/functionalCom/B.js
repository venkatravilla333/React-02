import React, { useState } from 'react';
import G from './G';
import H from './H';

function B(props) {
  // var [name, setName] = useState('Hari');

  return (
    <div>
      <G />
      <H name={props.name} />
    </div>
  );
}

export default B;
