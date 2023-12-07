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

var initialState = 0;

var reducer = (state = initialState, action) => {
  switch (action.type) {
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

function Child1() {
  var [count1, dispatch1] = useReducer(reducer, initialState);
  var [count2, dispatch2] = useReducer(reducer, initialState);
  var [count3, dispatch3] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>count1: {count1}</h2>
      <h2>count2: {count2}</h2>
      <h2>count3: {count3}</h2>
      <button onClick={() => dispatch1({ type: 'increment' })}>
        increment1
      </button>
      <button onClick={() => dispatch1({ type: 'decrement' })}>
        decrement1
      </button>
      <button onClick={() => dispatch1({ type: 'reset' })}>reset1</button>
      <button onClick={() => dispatch2({ type: 'increment' })}>
        increment2
      </button>
      <button onClick={() => dispatch2({ type: 'decrement' })}>
        decrement2
      </button>
      <button onClick={() => dispatch2({ type: 'reset' })}>reset2</button>
      <button onClick={() => dispatch3({ type: 'increment' })}>
        increment3
      </button>
      <button onClick={() => dispatch3({ type: 'decrement' })}>
        decrement3
      </button>
      <button onClick={() => dispatch3({ type: 'reset' })}>reset3</button>
    </div>
  );
}

export default Child1;
