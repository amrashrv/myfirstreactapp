import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App
            state={state}
            addPost={store.addPost.bind(store)}
            addMessage={store.addMessage.bind(store)}
            updateNewPostText={store.updateNewPostText.bind(store)}
            updateNewMessageText={store.updateNewMessageText.bind(store)} />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
  
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
reportWebVitals();
