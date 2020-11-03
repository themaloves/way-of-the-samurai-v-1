import React from 'react';
import {NavLink} from 'react-router-dom';
import BestFriends from './BestFriends/BestFriends';

const Navbar = (props) => {
  return (
    <nav className="nav">
      <div>
        <ul className="nav__items">
          <li className="nav__item">
            <NavLink className="nav__link" activeClassName="nav__link--active" to="/profile">
              Profile
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" activeClassName="nav__link--active" to="/messages">
              Messages
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" activeClassName="nav__link--active" to="/news">
              News
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" activeClassName="nav__link--active" to="/music">
              Music
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" activeClassName="nav__link--active" to="/settings">
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <BestFriends data={props.data}/>
      </div>
    </nav>
  )
}

export default Navbar;
