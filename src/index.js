import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App
            state={state}
            dispatch={store.dispatch.bind(store)} 
            store={store}
             />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
  
rerenderEntireTree(store.getState());
store.subscribe(() => {//asking state from store
  let state = store.getState();
  rerenderEntireTree(state);
});
reportWebVitals();
