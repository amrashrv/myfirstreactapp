import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

//rerenderEntireTree();
//store.subscribe(() => {//asking state from store
//let state = store.getState();
//rerenderEntireTree(state);
//});
reportWebVitals();
