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
      </div>
      <footer className="App-footer">
        <p>Copyright { getFullYear() } - { getFooterCopy(true) }</p>
      </footer>
    </div>
  );
}

export default App;