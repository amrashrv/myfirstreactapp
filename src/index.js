import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { addMessage, addPost, subscribe, updateNewMessageText, updateNewPostText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

let rerenderEntireTree = () => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App
            state={state}
            addPost={addPost}
            addMessage={addMessage}
            updateNewPostText={updateNewPostText}
            updateNewMessageText={updateNewMessageText} />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
  
rerenderEntireTree(state);
subscribe(rerenderEntireTree);
reportWebVitals();
