import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';

// setInterval(() => {
//   store.dispatch({type: "FAKE"})
// }, 1000);

ReactDOM.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//rerenderEntireTree();
//store.subscribe(() => {//asking state from store
//let state = store.getState();
//rerenderEntireTree(state);
//});
reportWebVitals();
