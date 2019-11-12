import React from 'react';
import './Nav.css';
import NavImage from '../../assets/Images/nav_logo.png';
import { useAuth0 } from '../../helpers/auth/react-auth0-spa';

const Nav = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  return (
    <div className="Nav_Container">
      <header className="header">
        <a href="/" className="logo">
          <img
            className="Nav_Logo"
            src={NavImage}
            alt="Appretice Study Guide Logo"
          />
        </a>
        {!isAuthenticated && (
          <button className="User_Auth" onClick={() => loginWithRedirect({})}>
            Log in
          </button>
        )}
        {isAuthenticated && (
          <span>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu">
              <li>
                <button onClick={() => logout()}>Log out</button>
              </li>
            </ul>
          </span>
        )}
      </header>
    </div>
  );
};
export default Nav;
