import React, { useState } from 'react';
import E from './E';
import F from './F';

function D(props) {
  // var [name, setName] = useState('Hari');

  return (
    <div>
      <E name={props.name} />
      <F name={props.name} />
    </div>
  );
}

export default D;
