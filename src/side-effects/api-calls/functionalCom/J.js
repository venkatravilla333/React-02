import React, { useEffect } from 'react';

import { fetchPosts } from '../redux/posts/posts-actions';

import { connect } from 'react-redux';

function J({ data, fetchPosts }) {
  // console.log(data);
  useEffect(() => {
    fetchPosts();
  }, []);
  return data.loading ? (
    <h2>Loading</h2>
  ) : data.error ? (
    <h3>{data.error}</h3>
  ) : (
    <div>
      {data.posts.map((post) => {
        return <h5 key={post.id}>{post.title}</h5>;
      })}
    </div>
  );
}

var mapStateToProps = (state) => {
  return {
    data: state,
  };
};

var mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(J);
