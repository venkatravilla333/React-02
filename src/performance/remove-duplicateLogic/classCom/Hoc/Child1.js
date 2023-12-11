import React, { Component } from 'react';

export class Child1 extends Component {
  

 
  render() {
    return (
      <div>
        <h2>Count: {this.props.count}</h2>
        <button onDoubleClick={this.props.increaseCount}>increase</button>
      </div>
    );
  }
}

export default Child1;
