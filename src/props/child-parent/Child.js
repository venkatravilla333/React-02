import React from 'react';

function Child(props) {
  console.log(props);
  return (
    <div>
      <button
        onClick={() => {
          return props.test('Child data');
        }}
      >
        child-component-button
      </button>
    </div>
  );
}

export default Child;
