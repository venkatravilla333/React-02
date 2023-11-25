import React, { Component } from 'react';

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    //if else
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       <h2>Sachin</h2>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <button onClick={() => this.setState({ isLoggedIn: true })}>
    //       Login
    //     </button>
    //   );
    // }
    // element varaible
    // var msg;
    // if (this.state.isLoggedIn) {
    //   msg = <h2>Sachin</h2>;
    // } else {
    //   msg = (
    //     <button onClick={() => this.setState({ isLoggedIn: true })}>
    //       Login
    //     </button>
    //   );
    // }
    // return msg;
    //ternary operator approach
    // return this.state.isLoggedIn ? (
    //   <h2>Sachin</h2>
    // ) : (
    //   <button onClick={() => this.setState({ isLoggedIn: true })}>Login</button>
    // );

    // short circuit approach
    return this.state.isLoggedIn && <h2>Sachin</h2>;
  }
}

export default Parent;
