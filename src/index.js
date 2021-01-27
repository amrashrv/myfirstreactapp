import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

 let dialogsData = [
  { id: 1, name: "Andrey" },
  { id: 2, name: "Olga" },
  { id: 3, name: "Korney" },
  { id: 4, name: "Ksenia" },
  { id: 5, name: "Dima" }
];
export let messagesData = [
  { id: 1, message: "Hey how are you" },
  { id: 2, message: "Im good" },
  { id: 3, message: "Cool" }
];
 let posts = [
  { id: 1, post: "First Post", likes: 5},
  { id: 2, post: "Second Post", likes: 105 },
  { id: 3, post: "Third post", likes: 26 }
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
