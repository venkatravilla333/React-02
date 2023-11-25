import React, { Component } from 'react';
import { nameContext } from './Parent';
import { ageContext } from './Parent';
import { incomeContext } from './Parent';
import { dataContext } from './Parent';

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
                        <dataContext.Consumer>
                          {(posts) => {
                            return (
                              <div>
                                <h2>{name}</h2>
                                <h2>{age}</h2>
                                <h2>{income}</h2>
                                <h2>posts</h2>
                                {posts.map((post) => {
                                  return <h6 key={post.id}>{post.id}</h6>;
                                })}
                              </div>
                            );
                          }}
                        </dataContext.Consumer>
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
