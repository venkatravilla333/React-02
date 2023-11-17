import React, { useContext } from 'react';
import { nameContext, ageContext, incomeContext, numContext } from './Parent';

function F() {
  var name = useContext(nameContext);
  var age = useContext(ageContext);
  var income = useContext(incomeContext);
  var { num } = useContext(numContext);
  return (
    <div>
      <h2>Com F: </h2>
      <h2>Name : {name}</h2>
      <h2>Age: {age}</h2>
      <h2>Income: {income}</h2>
      <h2>F: Num: {num}</h2>
    </div>
  );
}

export default F;
