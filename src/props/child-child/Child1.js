import React from 'react';

function Child1(props) {
  // console.log(props);
  return (
    <div>
      <h2>Child1 component</h2>
      <button
        onClick={() => {
          return props.test('child1 data');
        }}
      >
        child1-button
      </button>
    </div>
  );
}

export default Child1;
