import React, { Component } from 'react'

export class Child3 extends Component {

  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      count: 0
  //   }
  // }

  // increaseCount = ()=> {
  //   console.log(this)
  //   this.setState({count: this.state.count+1})

  // }
  render() {
    return (
      <div>
        <h2>Count: {this.props.count}</h2>
        <button onClick={this.props.increaseCount}>increase</button>
      </div>
    )
  }
}

export default Child3