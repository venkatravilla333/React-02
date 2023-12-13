import React, { Component } from 'react'

class ClassCom extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }

  increaseCount = () => {
    this.setState({count: this.state.count})
  }
  render() {
    console.log('class parent render')
    return (
      <>
        <div>ClassCom {this.state.count}</div>
        <button onClick={this.increaseCount}>increase</button>
      </>
      
    )
  }
}

export default ClassCom