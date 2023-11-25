import React, { Component } from 'react';
import axios from 'axios';

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
    var { posts } = this.state;
    return (
      <div>
        {/* <h2>{this.state.posts[0]}</h2>
        <h2>{this.state.posts[1]}</h2>
        <h2>{this.state.posts[2]}</h2> */}
        {posts.map((obj) => {
          return <p key={obj.id}>{obj.title}</p>;
        })}
      </div>
    );
  }
}

export default Parent;
