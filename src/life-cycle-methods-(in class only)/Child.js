import React, { Component } from 'react';

class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log('child constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('child get derived state from props');
    return null;
  }

  componentDidMount() {
    console.log('child didMount');
  }

  shouldComponentUpdate() {
    console.log('child should update');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('child snap');
    return null;
  }

  componentDidUpdate() {
    console.log('child did update');
  }
  render() {
    console.log('child render');
    return <div>Child</div>;
  }
}

export default Child;
