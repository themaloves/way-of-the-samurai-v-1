import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from "./components/Nav/Nav";

const App = () => {
  return (
    <main className="wrap">
      <Header/>
      <Navbar/>
      <Profile/>
    </main>
  );
}

export default App;
