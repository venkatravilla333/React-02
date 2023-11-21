import React, { Component } from 'react';

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: ['Sachin', 'Kohli', 'Gill', 'Rahul', 'Sami', 'Hari', 'Dilip'],
    };
  }
  render() {
    return (
      <div>
        {/* <h1>{this.state.names[0]}</h1>
        <h1>{this.state.names[1]}</h1>
        <h1>{this.state.names[2]}</h1>
        <h1>{this.state.names[3]}</h1>
        <h1>{this.state.names[4]}</h1> */}
        {this.state.names.map((name) => {
          return <h1>{name}</h1>;
        })}
      </div>
    );
  }
}

export default Parent;
