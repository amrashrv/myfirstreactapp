import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/reduxStore';

// setInterval(() => {
//   store.dispatch({type: "FAKE"})
// }, 1000);

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>

  ,
  document.getElementById('root')
);

//rerenderEntireTree();
//store.subscribe(() => {//asking state from store
//let state = store.getState();
//rerenderEntireTree(state);
//});
reportWebVitals();
