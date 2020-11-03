import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi, how are you?'},
    {id: 2, message: 'It\'s my first post'},
    {id: 3, message: 'Hi yo'}
  ],
  usersDialog = [
    {id: 1, name: 'Viktor'},
    {id: 2, name: 'Katya'},
    {id: 3, name: 'Lera'},
    {id: 4, name: 'Anton'},
    {id: 5, name: 'Vladislav'},
  ],
  messageDialog = [
    {id: 1, message: 'Hi, u from?'},
    {id: 2, message: 'Hello, i\'m Katya'},
    {id: 3, message: 'Good'},
    {id: 4, message: 'Looks'},
    {id: 5, message: 'Cool'},
  ]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} usersDialog={usersDialog} messageDialog={messageDialog}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
