import React, { Component } from 'react';

class Child extends Component {
  render() {
    console.log(this.props);
    var { count } = this.props;

    return (
      <div>
        {/* <h2>{this.props.count}</h2>
        <h2>{this.props.count}</h2>
        <h2>{this.props.count}</h2>
        <h2>{this.props.count}</h2> */}
        {/* <h2>{count}</h2>
        <h2>{count}</h2>
        <h2>{count}</h2>
        <h2>{count}</h2>
        <h2>{count}</h2>
        <h2>{count}</h2>
        <h2>{count}</h2> */}
        {/* <h2>{this.props.count}</h2>
        <h2>{this.props.count}</h2>
        <h2>{this.props.count}</h2>
        <h2>{this.props.count}</h2> */}
        <h2>{count}</h2>
        <h2>{count}</h2>
        <h2>{count}</h2>
        <h2>{count}</h2>
      </div>
    );
  }
}

export default Child;
