import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log('parent constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('parent get derived state from props');
    return null;
  }

  shouldComponentUpdate() {
    console.log('parent should update');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('parent snap');
    return null;
  }

  componentDidUpdate() {
    console.log('parent did update');
  }

  componentDidMount() {
    console.log('parent didMount');
  }
  render() {
    console.log('parent render');
    return (
      <div>
        <Child />
        <h2>count: {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          click
        </button>
      </div>
    );
  }
}

export default Parent;
