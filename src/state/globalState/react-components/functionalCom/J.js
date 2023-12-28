import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buy_cake } from '../../redux/cake/cakeAction';
import { buy_book } from '../../redux/book/bookAction';
import { store } from '../../redux/store';

function J() {
  console.log(store.getState().cake.noOfCakes)

  var noOfcakes = useSelector((store) => {
    return store.cake.noOfCakes
  });
  console.log(noOfcakes)

  var noOfbooks = useSelector((state) => {
    return state.book.noOfbooks;
  });

  var dispatch = useDispatch();
  console.log(() => dispatch(buy_cake()))
  return (
    <div>
      <h2>No of cakes: {noOfcakes}</h2>
      <button onClick={() => dispatch(buy_cake())}>buy cake</button>
      <h2>No of books: {noOfbooks} </h2>
      <button onClick={() => dispatch(buy_book())}>buy book</button>
    </div>
  );
}

export default J;
