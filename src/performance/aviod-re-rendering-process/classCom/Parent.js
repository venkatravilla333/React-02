import React, { Component, PureComponent } from 'react'
import Regular from './Regular'
import Pure from './Pure'

class Parent extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
      //  name: 'sachin'
      // count: 0
      colors : ['red', 'yellow']
    }
  }

  componentDidMount() {
    setInterval(() => {
      // this.setState({name: 'sachin'})
      // this.setState({count: this.state.count+1})
      this.setState({colors: ['red', 'yellow', 'green']})
    }, 3000)
  }
  render() {
    console.log('*****parent*****')
    return (
      <div>
        {/* <h2>Parent {this.state.name}</h2>
        <Regular name={ this.state.name} />
        <Pure name={ this.state.name} /> */}
        {/* <h2>Parent {this.state.count}</h2>
        <Regular count={ this.state.count} />
        <Pure count={ this.state.count} /> */}
        <h2>Parent {this.state.colors}</h2>
        <Regular colors={ this.state.colors} />
        <Pure colors={ this.state.colors} />
      </div>
    )
  }
}

export default Parent