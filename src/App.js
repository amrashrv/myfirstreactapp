import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <Header />
        <Navbar />

        <div className="app-wrapper-content">
          <h1>...</h1>
          <div className="backgroundBlock">
            <Route path="/Dialogs" render= { () => <Dialogs/>} dialogs={props.dialogsData} />
            <Route path="/Profile" component={Profile} posts={props.posts} />
            <Route path="/News" component={News} />
            <Route path="/Music" component={Music} />
            <Route path="/Settings" component={Settings} />
          </div>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
