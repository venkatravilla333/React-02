import React, { Component } from 'react';

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      domCount: 0,
      normalCount: 0,
    };
  }

  componentDidMount() {
    console.log('did mount');
    document.title = `dom count ${this.state.domCount}`;
  }
  componentDidUpdate(preProps, preState) {
    if (preState.domCount !== this.state.domCount) {
      console.log('did update');
      document.title = `dom count ${this.state.domCount}`;
    }
  }
  render() {
    console.log('render');
    return (
      <div>
        <h2>Dom count: {this.state.domCount}</h2>
        <button
          onClick={() => this.setState({ domCount: this.state.domCount + 1 })}
        >
          dom count update
        </button>
        <h2>Normal count: {this.state.normalCount}</h2>
        <button
          onClick={() =>
            this.setState({ normalCount: this.state.normalCount + 1 })
          }
        >
          normal count update
        </button>
      </div>
    );
  }
}

export default Parent;
