import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function ErrorFound() {
  var navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }, []);
  return (
    <div>
      {/* <Navigate to='/' /> */}

      <h2>404 Not found</h2>
    </div>
  );
}

export default ErrorFound;
