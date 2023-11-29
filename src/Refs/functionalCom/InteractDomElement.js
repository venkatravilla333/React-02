import React, { useEffect, useRef } from 'react';

function InteractDomElement() {
  var inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    console.log(inputRef);
  }, []);
  return (
    <div>
      <input type='text' ref={inputRef} />
    </div>
  );
}

export default InteractDomElement;
