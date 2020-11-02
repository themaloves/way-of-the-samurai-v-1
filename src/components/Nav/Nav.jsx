import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__items">
        <li className="nav__item">
          <a href="/profile">
            Profile
          </a>
        </li>
        <li className="nav__item">
          <a href="/messages">
            Messages
          </a>
        </li>
        <li className="nav__item">
          <a href="/news">
            News
          </a>
        </li>
        <li className="nav__item">
          <a href="/music">
            Music
          </a>
        </li>
        <li className="nav__item">
          <a href="/settings">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
