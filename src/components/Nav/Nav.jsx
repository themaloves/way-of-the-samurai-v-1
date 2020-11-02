import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__items">
        <li className="nav__item">
          <NavLink activeClassName="link--active" to="/profile">
            Profile
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink activeClassName="link--active" to="/messages">
            Messages
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink activeClassName="link--active" to="/news">
            News
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink activeClassName="link--active" to="/music">
            Music
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink activeClassName="link--active" to="/settings">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
