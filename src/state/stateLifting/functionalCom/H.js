import React from 'react';
import I from './I';
import J from './J';

function H(props) {
  return (
    <div>
      <I />
      <J name={props.name} />
    </div>
  );
}

export default H;
