import React from 'react';
import Child1Css from './child1.module.css';
function Child2() {
  return (
    <div>
      <button className={Child1Css.btn}>child2</button>
    </div>
  );
}

export default Child2;
