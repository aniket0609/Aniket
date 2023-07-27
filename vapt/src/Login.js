import React, { useState } from 'react'; // Importing React and useState hook
import Axios from 'axios'; // Importing Axios for making HTTP requests
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook from react-router-dom
import './Login.css'; // Import the CSS file

function Login() {
  const navigate = useNavigate(); // Initializing the useNavigate hook

  // State variables for registration form
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [GidReg, setGidReg] = useState('');

  // State variables for login form
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Gid, setGid] = useState('');

  // State variables for login status and authentication
  const [loginStatus, setLoginStatus] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Registration function
  const Register = () => {
    Axios.post('http://localhost:3001/register', {
      username: usernameReg,
      password: passwordReg,
      Gid: GidReg,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Login function
  const login = () => {
    Axios.post('http://localhost:3001/login', {
      username: username,
      password: password,
      Gid: Gid,
    })
      .then((response) => {
        if (response.data.success) {
          setLoginStatus(response.data.success);
          navigate('/dash'); // Navigate to '/dash' route on successful login
        }
      })
      .catch((error) => {
        setLoginStatus(false);
        console.log(error);
        alert('wrong details');
      });
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      <h1 className="welcome-message">Welcome to the Login Page</h1>

      <div className="container">
        {/* Registration Form */}
        <div className="registration">
          <h1>Registration</h1>
          <label>Username</label>
          <input type="text" onChange={(e) => setUsernameReg(e.target.value)} />

          <label>Password</label>
          <input type="password" onChange={(e) => setPasswordReg(e.target.value)} />

          <label>Gid</label>
          <input type="text" onChange={(e) => setGidReg(e.target.value)} />

          <button onClick={Register}>Register</button>
        </div>

        {/* Login Form */}
        <div className="login">
          <h1>Login</h1>
          <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />

          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

          <input type="text" placeholder="Gid" onChange={(e) => setGid(e.target.value)} />

          <button onClick={login}>Login</button>
        </div>
      </div>

      {/* Login Status Message */}
      {loginStatus && <h1 className="notification-message">{loginStatus}</h1>}
    </div>
  );
}

export default Login;
