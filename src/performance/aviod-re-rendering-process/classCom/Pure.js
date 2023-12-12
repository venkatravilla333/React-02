import React, { PureComponent } from 'react'

class Pure extends PureComponent {
  render() {
    console.log('**pure**')
    return (
      // <div>Pure {this.props.name }</div>
      // <div>Pure {this.props.count}</div>
      <div>Pure {this.props.colors}</div>
    )
  }
}

export default Pure