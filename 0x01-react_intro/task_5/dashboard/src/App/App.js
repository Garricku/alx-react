import React from 'react';
import logo from '../assets/holberton-logo';
import { getFullYear, getFooterCopy } from './utils';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor='email'>Email:
            <input id='email' type='email' placeholder='example@gmail.com' autoComplete='on'></input>
          </label>
          <label htmlFor='password'>Password:
            <input id='password' type='password' placeholder='Enter Your Password' autoComplete='on'></input>
          </label>
          <button>OK</button>
        </form>
      </div>
      <footer className="App-footer">
        <p>Copyright { getFullYear() } - { getFooterCopy(true) }</p>
      </footer>
    </div>
  );
}

export default App;