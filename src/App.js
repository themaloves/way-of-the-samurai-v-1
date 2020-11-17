import React from 'react';
import './App.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Nav/Nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import {Route} from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';

const App = () => {
  return (
    <main className="wrap">
      <HeaderContainer/>
      <Navbar/>
      <div className="wrap__content">
        <Route path="/profile/:userId?" render={() => { return <ProfileContainer/> }}/>
        <Route path="/messages" render={() => { return <DialogsContainer/> }}/>
        <Route path="/users" render={() => { return <UsersContainer/> }}/>
        <Route path="/login" render={() => { return <Login/> }}/>
        <Route path="/news" component={News}/>
        <Route path="/music" component={Music}/>
        <Route path="/settings" component={Settings}/>
      </div>
    </main>
  );
}

export default App;
