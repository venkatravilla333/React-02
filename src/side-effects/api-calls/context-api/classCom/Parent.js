import React, { Component } from 'react';
import A from './A';
import B from './B';
import axios from 'axios';

export var nameContext = React.createContext('Sachin');
export var ageContext = React.createContext(40);
export var incomeContext = React.createContext(100000);

export var dataContext = React.createContext();

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      this.setState({ posts: res.data });
    });
  }
  render() {
    return (
      <dataContext.Provider value={this.state.posts}>
        <incomeContext.Provider value={200000}>
          <ageContext.Provider value={30}>
            <nameContext.Provider value='kohli'>
              <A />
              <B />
            </nameContext.Provider>
          </ageContext.Provider>
        </incomeContext.Provider>
      </dataContext.Provider>
    );
  }
}

export default Parent;
