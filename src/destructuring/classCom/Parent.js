import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // count: 100,
      count: [100],
    };
  }
  render() {
    // var { count } = this.state;
    // var { count } = this.state;
    // var [one] = count;
    return (
      <div>
        {/* <h2>{this.state.count}</h2>
        <h2>{this.state.count}</h2>
        <h2>{this.state.count}</h2>
        <h2>{this.state.count}</h2>
        <h2>{this.state.count}</h2>
        <h2>{this.state.count}</h2>
        <h2>{this.state.count}</h2>
        <h2>{this.state.count}</h2>
        <h2>{this.state.count}</h2> */}
        {/* <h2>{count}</h2>
        <h2>{count}</h2>
        <h2>{count}</h2>
        <h2>{count}</h2>
        <h2>{count}</h2>
        <h2>{count}</h2>
        <h2>{count}</h2>
        <h2>{count}</h2> */}
        {/* <h2>{this.state.count[0]}</h2>
        <h2>{this.state.count[0]}</h2>
        <h2>{this.state.count[0]}</h2>
        <h2>{this.state.count[0]}</h2>
        <h2>{this.state.count[0]}</h2>
        <h2>{this.state.count[0]}</h2>
        <h2>{this.state.count[0]}</h2>
        <h2>{this.state.count[0]}</h2> */}
        {/* <h2>{one}</h2>
        <h2>{one}</h2>
        <h2>{one}</h2>
        <h2>{one}</h2>
        <h2>{one}</h2> */}
        <Child count={this.state.count} />
      </div>
    );
  }
}

export default Parent;
