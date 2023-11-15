import React, { useState } from 'react';
import A from './A';
import B from './B';

function Parent() {
  var [name, setName] = useState('Hari');
  return (
    <div>
      <A name={name} />
      <B name={name} />
    </div>
  );
}

export default Parent;
