import React from 'react';

const AppContext = React.createContext({
  user: {
    email: '',
    password: '',
    isLoggedIn: false,
  },
  logOut: () => {},
});

export default AppContext;