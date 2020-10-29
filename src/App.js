import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    <main className="wrapper">
      <Header/>
      <Aside/>
      <Profile/>
    </main>
  );
}

export default App;
