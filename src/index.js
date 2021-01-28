import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  { id: 1, message: "First Post", likesCount: 5},
  { id: 2, message: "Second Post", likesCount: 105 },
  { id: 3, message: "Third post", likesCount: 26 }
];
let dialogs = [
  { id: 1, name: "Andrey" },
  { id: 2, name: "Olga" },
  { id: 3, name: "Korney" },
  { id: 4, name: "Ksenia" },
  { id: 5, name: "Dima" }
];

let messages = [
  { id: 1, message: "Hey how are you" },
  { id: 2, message: "Im good" },
  { id: 3, message: "Cool" }
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
