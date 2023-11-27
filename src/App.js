// import FunCom from './jsx/FunCom';
// import ClassCom from './components/ClassCom';
// import Parent from './props/child-child/Parent';

import Container from './side-effects/unmount/Container';
import Parent from './side-effects/api-calls/functionalCom/Parent';

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
      <Parent />
    </div>
  );
}

export default App;
