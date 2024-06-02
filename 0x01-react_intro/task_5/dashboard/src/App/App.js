import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications';

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </>
  );
}

export default App;