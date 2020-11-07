import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {Route} from "react-router-dom";

const App = (props) => {
  return (
    <main className="wrap">
      <Header/>
      <Navbar data={props.state.navigation}/>
      <div className="wrap__content">
        <Route path="/profile" render={() => {
          return <Profile
            profile={props.state.profile}
            dispatch={props.dispatch}
          />
        }}/>
        <Route path="/messages" render={() => {
          return <Dialogs data={props.state.dialogs}/>
        }}/>
        <Route path="/news" component={News}/>
        <Route path="/music" component={Music}/>
        <Route path="/settings" component={Settings}/>
      </div>
    </main>
  );
}

export default App;
