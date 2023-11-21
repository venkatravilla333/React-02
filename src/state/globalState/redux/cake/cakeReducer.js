import { BUY_CAKE } from './cakeType';

var initialState = {
  noOfCakes: 1000,
};

export var cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    default:
      return initialState;
  }
};
