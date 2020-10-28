import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <Header/>
      <Technologies/>
    </div>
  );
}

const Header = () => {
  return (
    <div>
      <a href='#'>Home</a>
      <a href='#'>Home</a>
      <a href='#'>Home</a>
    </div>
  )
}

const Technologies = () => {
  return (
    <div className="App">
      <ul>
        <li>
          Css
        </li>
        <li>
          HTML
        </li>
        <li>
          JS
        </li>
      </ul>
    </div>
  )
}

export default App;
