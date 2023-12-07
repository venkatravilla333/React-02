import React from 'react';

import { Link } from 'react-router-dom';

var products = [
  { pName: 'Apple', id: 1, pPrice: 30 },
  { pName: 'Banana', id: 2, pPrice: 50 },
  { pName: 'Grap', id: 3, pPrice: 80 },
  { pName: 'Orange', id: 4, pPrice: 20 },
];

function Products() {
  return (
    <div>
      <ul>
        {products.map((product) => {
          return (
            <li>
              <Link to={`/products/${product.id}`}>{product.pName}</Link>
            </li>
          );
        })}
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
    </div>
  );
}

export default Products;
