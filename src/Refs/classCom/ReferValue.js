import React, { Component } from 'react';

class ReferValue extends Component {
  clearValue;
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
    };
    // this.clearValue = React.createRef();
  }

  componentDidMount() {
    this.clearValue = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clearValue);
  }
  render() {
    return (
      <div>
        <h3>Class Timer: {this.state.timer}</h3>
        <button onClick={() => clearInterval(this.clearValue)}>stop</button>
      </div>
    );
  }
}

export default ReferValue;
