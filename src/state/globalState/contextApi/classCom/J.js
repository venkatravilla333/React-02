import React, { Component } from 'react';
import { nameContext } from './Parent';
import { ageContext } from './Parent';
import { incomeContext } from './Parent';

class J extends Component {
  render() {
    return (
      <nameContext.Consumer>
        {(name) => {
          return (
            <ageContext.Consumer>
              {(age) => {
                return (
                  <incomeContext.Consumer>
                    {(income) => {
                      return (
                        <div>
                          <h2>Name: {name}</h2>
                          <h2>Age: {age}</h2>
                          <h2>Income: {income}</h2>
                        </div>
                      );
                    }}
                  </incomeContext.Consumer>
                );
              }}
            </ageContext.Consumer>
          );
        }}
      </nameContext.Consumer>
    );
  }
}

export default J;
