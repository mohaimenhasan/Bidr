import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Auth/Login';
import Signup from './Pages/Auth/SignUp';
import Verify from './Pages/Auth/Verify';
import ResetPassword from './Pages/Auth/ResetPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/verify" Component={Verify} />
        <Route path='/resetpassword' Component={ResetPassword} />
      </Routes>
    </Router>
  );
}

export default App;
