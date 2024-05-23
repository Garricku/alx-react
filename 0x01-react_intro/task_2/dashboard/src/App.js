import React from 'react';
import logo from './holberton-logo.jpg';
import { getFullYear, getFooterCopy } from './utils';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Holberton Logo */}
        <img src={logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        {/* Add your content here */}
        <p>Login to access the full dashboard</p>
        <label>Email:</label>
        <input type='email' placeholder='example@gmail.com'></input>
        <label>Password:</label>
        <input type='password' placeholder='Enter Your Password'></input>
        <button>OK</button>
      </div>
      <footer className="App-footer">
        <p>Copyright { getFullYear() } - { getFooterCopy(true) }</p>
      </footer>
    </div>
  );
}

export default App;