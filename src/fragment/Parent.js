import React from 'react';

function Parent() {
  var names = ['sachin', 'kohli', 'gill', 'sachin'];
  return (
    // <div>
    //   <h1>Sachin</h1>
    //   <h1>Kohli</h1>
    // </div>
    // [<h1>Sachin</h1>, <h1>Kohli</h1>]

    // <React.Fragment k>
    //   <h1>Sachin</h1>
    //   <h1>Kohli</h1>
    // </React.Fragment>
    // <div>
    //   {names.map((name) => {
    //     return <h1 key={name}>{name}</h1>;
    //   })}
    // </div>
    <>
      {/* <h1>Sachin</h1>
      <h1>Kohli</h1> */}
    </>
  );
}

export default Parent;
