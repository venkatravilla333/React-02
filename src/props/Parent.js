// import Child from './Child';

// function Parent() {
//   return (
//     <div>
//       <h1>Parent</h1>
//       <Child name={'Sachin'} />
//       {/* {Child(100)} */}
//     </div>
//   );
// }

// export default Parent;

import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  render() {
    return (
      <div>
        <Child name={'Sachin'} />
      </div>
    );
  }
}

export default Parent;
