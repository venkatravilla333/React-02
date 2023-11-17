import React, { Component } from 'react';
import A from './A';
import B from './B';

export var nameContext = React.createContext('Sachin');
export var ageContext = React.createContext(40);
export var incomeContext = React.createContext(100000);

class Parent extends Component {
  render() {
    return (
      <incomeContext.Provider value={200000}>
        <ageContext.Provider value={30}>
          <nameContext.Provider value='kohli'>
            <A />
            <B />
          </nameContext.Provider>
        </ageContext.Provider>
      </incomeContext.Provider>
    );
  }
}

export default Parent;
