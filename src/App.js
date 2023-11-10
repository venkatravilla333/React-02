import FunCom from './jsx/FunCom';
import ClassCom from './components/ClassCom';
import Parent from './props/Parent';

function App() {
  return (
    <div>
      <h1>Parent component</h1>
      {/* {FunCom()} */}
      {/* <FunCom /> */}
      {/* {new ClassCom().render()} */}
      {/* <ClassCom /> */}
      {/* <FunCom /> */}
      <Parent />
    </div>
  );
}

export default App;
