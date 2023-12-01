import React, { useEffect, useRef } from 'react';

function InteractDomElement() {
  var inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  var getInputValue = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input type='text' ref={inputRef} />
      <button onClick={getInputValue}>click</button>
    </div>
  );
}

export default InteractDomElement;
