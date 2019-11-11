import React, { Component } from 'react';
import './Nav.css';
import NavImage from '../../assets/Images/nav_logo.png';

export default class Nav extends Component {
  render() {
    return (
      <div className="Nav_Container">
        <img
          className="Nav_Logo"
          src={NavImage}
          alt="Appretice Study Guide Logo"
        />
      </div>
    );
  }
}
