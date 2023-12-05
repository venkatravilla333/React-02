import React from 'react';
// import './style.css';
import Child1Css from './child1.module.css';
function Child1() {
  return (
    <div>
      <button className={Child1Css.btn}>Child1</button>
    </div>
  );
}

export default Child1;
