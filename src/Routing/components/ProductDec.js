import React from 'react';
import { useLocation, useOutletContext, useParams } from 'react-router-dom';

function ProductDec() {
  var { id } = useParams();
  // var products = useOutletContext();
  var location = useLocation();
  return (
    <div>
      <h2>Product description page</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum velit
        minima veniam sequi, consectetur nesciunt labore voluptate inventore
        quibusdam necessitatibus? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Consectetur corrupti quibusdam, optio voluptatem
        itaque maxime voluptate nemo. Ipsam, modi perspiciatis.
      </p>
      {/* <h3>{JSON.stringify(products[0])}</h3> */}
      <h3>{JSON.stringify(location.state)}</h3>

      <h2>{id}</h2>
    </div>
  );
}

export default ProductDec;
