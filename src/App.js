import React from 'react';
import './App.css';

const App = () => {
  return (
    <main className="wrapper">
      <header className="header">
        <div className="header__logo">
          <a href="#" className="header__link">Service</a>
        </div>
      </header>
      <aside className="nav">
        <nav className="nav__links">
          <ul className="nav__items">
            <li className="nav__item">
              <a href="#">
                Profile
              </a>
            </li>
            <li className="nav__item">
              <a href="#">Settings</a>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="content">
        <div>
          <img src="https://www.donnashape.com/33840-medium_default/hot-girl-body.jpg" alt="hot-girl"/>
        </div>
        <div>
          <img src="https://sc02.alicdn.com/kf/HTB1yA_abXzsK1Rjy1Xbq6xOaFXaA.jpg" alt="hot-girl"/>
        </div>
        <div>
          my Post
          <div>
            new post
          </div>
          <div>
            post one
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
