import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRouteLogin({ children }) {
  const user = useSelector((store) => store.currentUser);
  return (
    <div>
      {!user ? children : <Navigate to="/" />}
    </div>
  );
}

export default PrivateRouteLogin;
