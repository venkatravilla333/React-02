import React, { Component } from 'react';

import { connect } from 'react-redux';
import { buy_cake } from '../../redux/cake/cakeAction';
import { buy_book } from '../../redux/book/bookAction';

class J extends Component {
  render(props) {
    return (
      <div>
        <h3>No of cakes: {this.props.noOfCakes} </h3>
        <button onClick={this.props.buy_cake}>buycake</button>
        <h3>No of books: {this.props.noOfbooks} </h3>
        <button onClick={this.props.buy_book}>buybook</button>
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    noOfCakes: state.cake.noOfCakes,
    noOfbooks: state.book.noOfbooks,
  };
};

var mapDispatchToProps = (dispatch) => {
  return {
    buy_cake: () => {
      dispatch(buy_cake());
    },
    buy_book: () => {
      dispatch(buy_book());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(J);
