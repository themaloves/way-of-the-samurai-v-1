import React from 'react';
import ReactDOM from 'react-dom';
import state from './state/state';
import './index.css';
import App from './App';
import {addPost, updateNewPostText, subscribe} from './state/state';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}
        />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
