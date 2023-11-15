import React from 'react';

class Parent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    // console.log(this);
    // this.state.count = this.state.count + 1;
    // console.log((this.state.count = this.state.count + 1));
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div>
        <h3>Count: {this.state.count} </h3>
        <button onClick={this.incrementCount}>click</button>
      </div>
    );
  }
}

export default Parent;
