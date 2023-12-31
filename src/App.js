import './App.css';
import Todo from './Todo-App/Todo';
import './index.css';
// import Calvalue from './performance/aviod-re-rendering-process/functionalCom/Calvalue';
// import ClassCom from './performance/aviod-re-rendering-process/functionalCom/ClassCom';
// import Parent from './performance/aviod-re-rendering-process/functionalCom/Parent';
import Parent from './state/globalState/react-components/functionalCom/Parent';
// import FunCom from './jsx/FunCom';
// import ClassCom from './components/ClassCom';
// import Parent from './props/child-child/Parent';
// import Parent from './life-cycle-methods-(in class only)/errorBoundry/Parent';
// import Child1 from './state/localSate/functionalCom/useReducer/Child1';
// import Child2 from './state/localSate/functionalCom/useReducer/Child2';
// import Container from './side-effects/unmount/Container';
// import ReferValue from './Refs/classCom/ReferValue';
// import Parent from './portals/Parent';
// import Child from './css/inline/Child';
// import Child1 from './css/css-modules/Child1';
// import Child2 from './css/css-modules/Child2';
// import Child3 from './css/css-modules/Child3';
// import Child4 from './css/css-modules/Child4';

// import Parent from './state/localSate/functionalCom/useReducer/functionalCom/Parent';
// import Home from './Routing/components/Home';
// import About from './Routing/components/About';
// import Products from './Routing/components/Products';
// import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
// import Footer from './Routing/components/Footer';
// import ErrorFound from './Routing/components/ErrorFound';
// import ProductDec from './Routing/components/ProductDec';
// import Login from './Routing/components/Login';
// import Header from './Routing/components/Header';
// import React from 'react';
// import Child1 from './performance/remove-duplicateLogic/functionalCom/Child1';
// import Child2 from './performance/remove-duplicateLogic/functionalCom/Child2';
// import Child3 from './performance/remove-duplicateLogic/functionalCom/Child3';
// import Child2 from './performance/remove-duplicateLogic/classCom/withDuplicate/Child2';
// import Child3 from './performance/remove-duplicateLogic/classCom/withDuplicate/Child3';
// import Render from './performance/remove-duplicateLogic/classCom/RenderProps/Render';
// import { Hoc } from './performance/remove-duplicateLogic/classCom/Hoc/Hoc';
// import LazyComponent from './Routing/components/LazyComponent';
// var LazyComponent = React.lazy(() =>
//   import('./Routing/components/LazyComponent')
// );
// import Lazy from './Routing/components/Lazy';
// import Parent from './css/external/Parent';

function App() {
  // var location = useLocation();
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
      {/* {location.pathname !== '/login' && <Header />}
      <ul>
        <li>
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: 'green' } : { color: 'orange' }
            }
            to='/'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/products'>Products</NavLink>
        </li>
        <li>
          <NavLink to='/lazy'>Lazy</NavLink>
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
        <Route
          path='/lazy'
          element={
            <React.Suspense fallback='Loading'>
              <LazyComponent />
            </React.Suspense>
          }
        />
      </Routes>
      {/* <Footer /> */}
      {/* {location.pathname !== '/login' && <Footer />} */} 
      {/* <Home />
      <About />
      <Products /> */}
      {/* <Child1 />
      <Child2 />
      <Child3/> */}
      {/* <Hoc/> */}
      {/* <Render render={(count, increaseCount) => {
        return <Child1 count={count} increaseCount={ increaseCount} />
      } } />
      <Render render={(count, increaseCount) => {
        return <Child2 count={count} increaseCount={ increaseCount} />
      } } />
      <Render render={(count, increaseCount) => {
        return <Child3 count={count} increaseCount={ increaseCount} />
      } } /> */}
      {/* <Child1/>
      <Child2/>
      <Child3/> */}
     
      {/* <ClassCom /> */}
      {/* <Parent/> */}

      {/* <Calvalue/> */}
      <Todo/>
      
      
    </div>
  );
}

export default App;
