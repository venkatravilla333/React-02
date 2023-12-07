import React from 'react';
// import './style.css';
// import './Child1.css';
import Child1Css from './Child1.module.css';
function Child1() {
  return (
    <div>
      <button className={Child1Css.btn}>child1</button>
    </div>
  );
}

export default Child1;
