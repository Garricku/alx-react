import React from 'react';
import ReactDOM from 'react-dom/client';
import Notifications from './Notifications/Notifications'
import App from './App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='root-notifications'>
      <Notifications />
    </div>
    <App />
  </React.StrictMode>
);