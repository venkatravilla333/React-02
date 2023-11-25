import React, { Component } from 'react';
import axios from 'axios';

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '',
      title: '',
      body: '',
    };
  }

  // changeState = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  changeUserid = (e) => {
    this.setState({ userId: e.target.value });
  };
  changeTitle = (e) => {
    this.setState({ title: e.target.value });
  };
  changeBody = (e) => {
    this.setState({ body: e.target.value });
  };

  sendState = (e) => {
    e.preventDefault();
    axios
      .post('https://jsonplaceholder.typicode.com/posts', this.state)
      .then((res) => {
        console.log(res);
      });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.sendState}>
          <input
            type='text'
            value={this.state.userId}
            name='userId'
            // onChange={this.changeState}
            onChange={this.changeUserid}
          />
          <input
            type='text'
            value={this.state.title}
            name='title'
            // onChange={this.changeState}
            onChange={this.changeTitle}
          />
          <input
            type='text'
            value={this.state.body}
            name='body'
            // onChange={this.changeState}
            onChange={this.changeBody}
          />
          <button type='submit'>submit</button>
        </form>

        <h4>{this.state.userId}</h4>
        <h4>{this.state.title}</h4>
        <h4>{this.state.body}</h4>
      </div>
    );
  }
}

export default Parent;
