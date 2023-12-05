import React from 'react';
import Child1Css from './child1.module.css';
import './child3.css';
function Child3() {
  return (
    <div>
      <button className={Child1Css.btn}>child3</button>
    </div>
  );
}

export default Child3;
