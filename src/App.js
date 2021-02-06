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
    <div className='app_wrapper'>
      <Header />
      <Navbar />

      <div className="app-wrapper-content">
        <h1></h1>
        <div className="backgroundBlock">
          <Route path="/Dialogs" render={() => <Dialogs state={props.state.dialogsPage} />} />
          <Route path="/Profile" render={() => <Profile
            profilePage={props.state.profilePage} addPost={props.addPost}
            updateNewPostText={props.updateNewPostText} />} />
          <Route path="/News" component={News} />
          <Route path="/Music" component={Music} />
          <Route path="/Settings" component={Settings} />
        </div>
      </div>
    </div>
  );
}

export default App;
