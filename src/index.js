import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, { addPost } from './redux/state';
import { BrowserRouter } from 'react-router-dom';


//addPost('hehey');
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} addPost={addPost}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
