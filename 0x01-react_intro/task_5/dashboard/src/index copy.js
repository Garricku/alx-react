import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Notifications from './Notifications';

const root = document.getElementById('root');
root.render (
    <div id='app'>
        <Notifications />
        <App />
    </div>
);