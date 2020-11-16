import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="header">
      <div className="header__logo">
        <NavLink to="/">
          Service
        </NavLink>
      </div>
      <div className="login">
        {
          props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  )
}

export default Header;