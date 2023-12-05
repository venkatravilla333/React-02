import React from 'react';

var css = { color: 'red', background: 'blue' };

function Child() {
  return (
    <div>
      <h1 style={css}>One</h1>
      <h1 style={css}>Two</h1>
    </div>
  );
}

export default Child;
