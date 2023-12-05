import React, { Component } from 'react';
import Child from './Child';
import ErrorBoundry from './ErrorBoundry';

class Parent extends Component {
  render() {
    return (
      <div>
        <ErrorBoundry>
          <Child age={20} />
        </ErrorBoundry>
        <ErrorBoundry>
          <Child age={28} />
        </ErrorBoundry>
        <ErrorBoundry>
          <Child age={32} />
        </ErrorBoundry>
        <ErrorBoundry>
          <Child age={25} />
        </ErrorBoundry>
        <ErrorBoundry>
          <Child age={40} />
        </ErrorBoundry>
      </div>
    );
  }
}

export default Parent;
