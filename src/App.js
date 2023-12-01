// import FunCom from './jsx/FunCom';
// import ClassCom from './components/ClassCom';
// import Parent from './props/child-child/Parent';

import Container from './side-effects/unmount/Container';
import ReferValue from './Refs/classCom/ReferValue';
import Parent from './portals/Parent';

function App() {
  return (
    <div className='App'>
      {/* <h1>App component</h1> */}
      {/* {FunCom()} */}
      {/* <FunCom /> */}
      {/* {new ClassCom().render()} */}
      {/* <ClassCom /> */}
      {/* <FunCom /> */}
      {/* <Parent /> */}
      {/* <Parent /> */}
      {/* <ReferValue /> */}
      <Parent />
    </div>
  );
}

export default App;
