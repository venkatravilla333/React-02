import React from 'react';
import './style.css';
function Child(props) {
  var className = props.color ? 'success' : 'error';
  return (
    <div>
      <h2 className={className}>hello-1</h2>
    </div>
  );
}

export default Child;
