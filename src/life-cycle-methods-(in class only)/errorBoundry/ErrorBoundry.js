import React, { Component } from 'react';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(err, info) {
    console.log(err);
    console.log(info);
  }
  render() {
    if (this.state.hasError) {
      return <h3>Age limit crossed</h3>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
