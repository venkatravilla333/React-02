import React, { Component } from 'react';

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  updateState = (e) => {
    console.log('update state');
    this.setState({ x: e.clientX, y: e.clientY });
  };
  componentDidMount() {
    console.log('did mount');
    window.addEventListener('click', this.updateState);
  }
  render() {
    console.log('render');
    return (
      <div className='myparent'>
        <h2>X: {this.state.x}</h2>
        <h2>Y: {this.state.y}</h2>
      </div>
    );
  }
}

export default Parent;
