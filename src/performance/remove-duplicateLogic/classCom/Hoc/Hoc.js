
import React, { Component } from 'react'



var Hoc = (OriginalComponent) => {
  
  class newComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    increaseCount = () => {
      console.log(this);
      this.setState({ count: this.state.count + 1 });
    };
    render() {
      return <OriginalComponent count={this.state.count} increaseCount={this.increaseCount } />
    }
  }

  return newComponent
  
  
}
export default Hoc