import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Navbar from './components/Nav/Nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import {Route} from 'react-router-dom';
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
  return (
    <main className="wrap">
      <Header/>
      <Navbar/>
      <div className="wrap__content">
        <Route path="/profile" render={() => { return <ProfileContainer/> }}/>
        <Route path="/messages" render={() => { return <DialogsContainer/> }}/>
        <Route path="/users" render={() => { return <UsersContainer/> }}/>
        <Route path="/news" component={News}/>
        <Route path="/music" component={Music}/>
        <Route path="/settings" component={Settings}/>
      </div>
    </main>
  );
}

export default App;
