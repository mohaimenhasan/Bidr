import React, { useState } from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle user login
  async function handleLogin() {
    try {
      const user = await Auth.signIn(username, password);
      console.log('User:', user);
      // Navigate to your app's main page
    } catch (error) {
      console.log('Error:', error);
      setErrorMessage(error.message);
    }
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="mb-4">Log In</h2>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="username" placeholder=" " value={username} onChange={e => setUsername(e.target.value)} />
                <label htmlFor="username">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control" id="password" placeholder=" " value={password} onChange={e => setPassword(e.target.value)} />
                <label htmlFor="password">Password</label>
              </div>
              {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
              <button className="btn btn-primary btn-lg w-100 mt-3" onClick={handleLogin}>Log In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAuthenticator(Login);
