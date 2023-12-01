import React, { Component } from 'react';

class InteractDomElement extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  getInputValue = () => {
    console.log(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />
        <button onClick={this.getInputValue}>click</button>
      </div>
    );
  }
}

export default InteractDomElement;
