import React, { useState } from 'react';

import { Link, Outlet } from 'react-router-dom';

function Products() {
  var [products, setProducts] = useState([
    { pName: 'Apple', id: 1, pPrice: 30 },
    { pName: 'Banana', id: 2, pPrice: 50 },
    { pName: 'Grap', id: 3, pPrice: 80 },
    { pName: 'Orange', id: 4, pPrice: 20 },
    { pName: 'Mango', id: 5, pPrice: 200 },
  ]);
  return (
    <div className='products'>
      <ul>
        {products.map((product) => {
          return (
            <>
              <li>
                <Link state={product} to={`/products/${product.id}`}>
                  {product.pName}
                </Link>
              </li>
            </>
          );
        })}
        <br />

        {/* <li>
          <Link to='/products/2'>Banana</Link>
          </li>
        <li>
          <Link to='/products/3'>Grap</Link>
        </li>
        <li>
          <Link to='/products/4'>Orange</Link>
        </li> */}
      </ul>
      {/* <Outlet context={products} /> */}
      <Outlet />
    </div>
  );
}

export default Products;
