import { BUY_BOOK } from './bookType';

var initialState = {
  noOfbooks: 500,
};

export var bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BOOK:
      return {
        ...state,
        noOfbooks: state.noOfbooks - 1,
      };
      break;
    default:
      return initialState;
  }
};
