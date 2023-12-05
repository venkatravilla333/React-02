// import FunCom from './jsx/FunCom';
// import ClassCom from './components/ClassCom';
// import Parent from './props/child-child/Parent';
// import Parent from './life-cycle-methods-(in class only)/errorBoundry/Parent';
import Parent from './state/localSate/functionalCom/useReducer/Parent';
import Container from './side-effects/unmount/Container';
import ReferValue from './Refs/classCom/ReferValue';
// import Parent from './portals/Parent';
import Child from './css/inline/Child';
import Child1 from './css/css-modules/Child1';
import Child2 from './css/css-modules/Child2';
import Child3 from './css/css-modules/Child3';
import Child4 from './css/css-modules/Child4';
// import Parent from './css/external/Parent';

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
      {/* <Parent /> */}
      {/* <ReferValue /> */}
      {/* <Child1 />
      <Child2 />
      <Child3 />
      <Child4 /> */}
      <Parent />
    </div>
  );
}

export default App;
