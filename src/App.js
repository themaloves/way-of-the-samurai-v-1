import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
    <main className="wrap">
      <Header/>
      <Navbar/>
      <div className="wrap__content">
        {/*<Profile/>*/}
        <Dialogs/>
      </div>
    </main>
  );
}

export default App;
