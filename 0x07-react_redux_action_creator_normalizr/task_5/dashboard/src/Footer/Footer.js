import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import React, { useContext } from 'react';
import AppContext from '../App/AppContext';

export default function appFooter() {
return (
    <footer className="App-footer">
        <p>Copyright { getFullYear() } - { getFooterCopy(true) }</p>
    </footer>
    );
}

export default function Footer() {
  const { user } = useContext(AppContext);

  return (
    <footer>
      {user.isLoggedIn && (
        <p>
          Contact us: <a href="mailto:contact@example.com">Email</a>
        </p>
      )}
    </footer>
  );
}