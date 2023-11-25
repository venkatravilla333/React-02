import React, { useEffect, useState } from 'react';
import A from './A';
import B from './B';
import axios from 'axios';

export var nameContext = React.createContext('Sachin');
export var ageContext = React.createContext(40);
export var incomeContext = React.createContext(100000);
export var numContext = React.createContext(0);
export var dataContext = React.createContext();

function Parent() {
  var [num, setNum] = useState(0);
  var [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      }, [])
      .catch((err) => console.log(err));
  });
  return (
    <dataContext.Provider value={posts}>
      <numContext.Provider value={{ num, setNum }}>
        <incomeContext.Provider value={200000}>
          <ageContext.Provider value={30}>
            <nameContext.Provider value='Gill'>
              <A />
              <B />
            </nameContext.Provider>
          </ageContext.Provider>
        </incomeContext.Provider>
      </numContext.Provider>
    </dataContext.Provider>
  );
}

export default Parent;
