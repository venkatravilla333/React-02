import React, { useEffect, useState } from 'react';

function Parent() {
  var [domCount, setDomcount] = useState(0);
  var [normalCount, setNormalcount] = useState(0);

  useEffect(() => {
    console.log('use effect');
    document.title = `dom count ${domCount}`;
  }, [domCount]);

  console.log('render');
  return (
    <div>
      <h2>Dom count: {domCount}</h2>
      <button onClick={() => setDomcount(domCount + 1)}>
        update dom count
      </button>
      <h2>Normal count: {normalCount}</h2>
      <button onClick={() => setNormalcount(normalCount + 1)}>
        update normal count
      </button>
    </div>
  );
}

export default Parent;
