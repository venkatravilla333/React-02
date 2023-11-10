// function Child(props) {
//   // console.log((props.name = 'Kohli'));
//   return <h2>Child: {(props.name = 'gill')}</h2>;
// }

// export default Child;

import React, { Component } from 'react';

class Child extends Component {
  render() {
    console.log(this.props);
    return <div>Child: {this.props.name}</div>;
  }
}

export default Child;
