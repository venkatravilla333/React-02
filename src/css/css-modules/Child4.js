import React from 'react';

// import './Child3.css';
import Child1Css from './Child1.module.css';
function Child4() {
  return (
    <div>
      <button className={Child1Css.btn}>child4</button>
    </div>
  );
}

export default Child4;
