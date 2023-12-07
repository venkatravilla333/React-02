import React, { useReducer } from 'react';
import A from './A';
import B from './B';

export var countContext = React.createContext();

var initialState = 0;

var reducer = (state = initialState, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
      break;
    case 'decrement':
      return state - 1;
      break;
    case 'reset':
      return initialState;
      break;
    default:
      return state;
  }
};

function Parent() {
  var [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <countContext.Provider value={{ count: count, dispatch: dispatch }}>
        <A />
        <B />
      </countContext.Provider>
    </div>
  );
}

export default Parent;
