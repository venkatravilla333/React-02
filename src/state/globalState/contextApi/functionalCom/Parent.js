import React, { useState } from 'react';
import A from './A';
import B from './B';

export var nameContext = React.createContext('Sachin');
export var ageContext = React.createContext(40);
export var incomeContext = React.createContext(100000);
export var numContext = React.createContext(0);

function Parent() {
  var [num, setNum] = useState(0);
  return (
    <numContext.Provider value={{ num, setNum }}>
      <incomeContext.Provider value={200000}>
        <ageContext.Provider value={30}>
          <nameContext.Provider value='Gill'>
            <A />
            <B />
          </nameContext.Provider>
        </ageContext.Provider>
      </incomeContext.Provider>
    </numContext.Provider>
  );
}

export default Parent;
