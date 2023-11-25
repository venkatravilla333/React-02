import React, { useEffect, useState } from 'react';

import axios from 'axios';

function Parent() {
  // var [posts, setPosts] = useState(['post1', 'post2', 'post3']);
  var [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  }, []);

  return (
    <div>
      {/* <h2>{posts[0]}</h2>
      <h2>{posts[1]}</h2>
      <h2>{posts[2]}</h2> */}
      {posts.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
}

export default Parent;
