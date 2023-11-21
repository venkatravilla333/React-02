import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buy_cake } from '../../redux/cake/cakeAction';
import { buy_book } from '../../redux/book/bookAction';

function J() {
  var noOfcakes = useSelector((state) => {
    return state.cake.noOfCakes;
  });
  var noOfbooks = useSelector((state) => {
    return state.book.noOfbooks;
  });

  var dispatch = useDispatch();
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
