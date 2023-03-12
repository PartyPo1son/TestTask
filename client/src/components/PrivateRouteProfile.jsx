import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function PrivateRouteProfile({ children }) {
  const user = useSelector((store) => store.currentUser);
  return (
    <div>
      {user ? children : <Navigate to="/login" />}
    </div>
  );
}

export default PrivateRouteProfile;
