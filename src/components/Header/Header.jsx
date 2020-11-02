import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <NavLink to="/">
          Service
        </NavLink>
      </div>
    </header>
  )
}

export default Header;