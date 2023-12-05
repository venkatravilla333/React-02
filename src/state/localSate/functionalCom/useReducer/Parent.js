import React, { useReducer } from 'react';

// state and action as string

// var initialState = 0;

// var reducer = (state = initialState, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1;
//       break;
//     case 'decrement':
//       return state - 1;
//       break;
//     case 'reset':
//       return initialState;
//       break;
//     default:
//       return state;
//   }
// };

// function Parent() {
//   var [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <h2>State: {state}</h2>
//       <button onClick={() => dispatch('increment')}>increment</button>
//       <button onClick={() => dispatch('decrement')}>decrement</button>
//       <button onClick={() => dispatch('reset')}>reset</button>
//     </div>
//   );
// }

// export default Parent;

//state and action as object form

// var initialState = {
//   count1: 0,
//   count2: 100,
// };

// var reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'increment1':
//       return { ...state, count1: state.count1 + 1 };
//       break;
//     case 'decrement1':
//       return { ...state, count1: state.count1 - 1 };
//       break;
//     case 'reset1':
//       return initialState;
//       break;
//     case 'increment2':
//       return { ...state, count2: state.count2 + 1 };
//       break;
//     case 'decrement2':
//       return { ...state, count2: state.count2 - 1 };
//       break;
//     case 'reset2':
//       return initialState;
//       break;
//     default:
//       return state;
//   }
// };

// function Parent() {
//   var [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <h2>state: {state.count1}</h2>
//       <h2>state: {state.count2}</h2>
//       <button onClick={() => dispatch({ type: 'increment1' })}>
//         increment1
//       </button>
//       <button onClick={() => dispatch({ type: 'decrement1' })}>
//         decrement1
//       </button>
//       <button onClick={() => dispatch({ type: 'reset1' })}>reset1</button>
//       <button onClick={() => dispatch({ type: 'increment2' })}>
//         increment2
//       </button>
//       <button onClick={() => dispatch({ type: 'decrement2' })}>
//         decrement2
//       </button>
//       <button onClick={() => dispatch({ type: 'reset2' })}>reset2</button>
//     </div>
//   );
// }

// export default Parent;

//multiple useReducers

var initialState = {
  count1: 0,
  count2: 0,
};

var reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return {};
      break;
    case 'decrement':
      return { count: state.count - 1 };
      break;
    case 'reset':
      return initialState;
      break;
    default:
      return state;
  }
};

function Parent() {
  var [state1, dispatch] = useReducer(reducer, initialState);
  var [state2, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>state: {state1.count}</h2>
      <h2>state: {state2.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
      <button onClick={() => dispatch({ type: 'increment' })}>
        increment2
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        decrement2
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>reset2</button>
    </div>
  );
}

export default Parent;
