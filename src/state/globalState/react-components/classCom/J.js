import React, { Component } from 'react';

import { connect } from 'react-redux';
import { buy_cake } from '../../redux/cake/cakeAction';

class J extends Component {
  render(props) {
    return (
      <div>
        <h3>No of cakes: {this.props.noOfCakes} </h3>
        <button onClick={this.props.buy_cake}>buycake</button>
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    noOfCakes: state.noOfCakes,
  };
};

var mapDispatchToProps = (dispatch) => {
  return {
    buy_cake: () => {
      dispatch(buy_cake());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(J);
