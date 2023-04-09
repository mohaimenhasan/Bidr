import React, {useState, useEffect} from 'react';
import { Auth } from 'aws-amplify';
import { Navigate, Outlet } from 'react-router-dom';

async function isAuthenticated() {
  try {
    const user = await Auth.currentUserInfo();
    return user !== null;
  } catch (err) {
    console.error(err);
    return false;
  }
}

function PrivateRoute() {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    isAuthenticated().then((result) => {
      setLoading(false);
      setAuthenticated(result);
    });
  }, []);

  if (loading) {
    return null; // or a loading spinner
  }

  return authenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
}

export default PrivateRoute;
