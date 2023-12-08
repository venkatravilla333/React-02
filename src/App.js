import './App.css';
// import FunCom from './jsx/FunCom';
// import ClassCom from './components/ClassCom';
// import Parent from './props/child-child/Parent';
// import Parent from './life-cycle-methods-(in class only)/errorBoundry/Parent';
// import Child1 from './state/localSate/functionalCom/useReducer/Child1';
// import Child2 from './state/localSate/functionalCom/useReducer/Child2';
import Container from './side-effects/unmount/Container';
import ReferValue from './Refs/classCom/ReferValue';
// import Parent from './portals/Parent';
import Child from './css/inline/Child';
// import Child1 from './css/css-modules/Child1';
// import Child2 from './css/css-modules/Child2';
import Child3 from './css/css-modules/Child3';
import Child4 from './css/css-modules/Child4';
import Parent from './state/localSate/functionalCom/useReducer/functionalCom/Parent';
import Home from './Routing/components/Home';
import About from './Routing/components/About';
import Products from './Routing/components/Products';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './Routing/components/Footer';
import ErrorFound from './Routing/components/ErrorFound';
import ProductDec from './Routing/components/ProductDec';
import Login from './Routing/components/Login';
import Header from './Routing/components/Header';
// import Parent from './css/external/Parent';

function App() {
  var location = useLocation();
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
      {/* <Parent /> */}
      {/* <Child1 />
      <Child2 /> */}
      {/* <Parent /> */}
      {/* <Header /> */}
      {location.pathname !== '/login' && <Header />}
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />}>
          <Route path=':id' element={<ProductDec />} />
        </Route>

        <Route path='*' element={<ErrorFound />} />
      </Routes>
      {/* <Footer /> */}
      {location.pathname !== '/login' && <Footer />}
      {/* <Home />
      <About />
      <Products /> */}
    </div>
  );
}

export default App;
