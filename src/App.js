import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/preloader/preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { withSuspense } from './hoc/withSuspense';
import { initializeApp } from './redux/appReducer';
import store from './redux/reduxStore';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/dialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/profileContainer'));

class App extends Component {
	componentDidMount() {
		this.props.initializeApp();
	}
	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (

			<div className='app_wrapper'>
				<HeaderContainer />
				<Navbar />
				<div className="app-wrapper-content">
					<h1> </h1>

					<div className="backgroundBlock">

						<Route path="/Dialogs" render={withSuspense(DialogsContainer)}/>
						<Route path="/Profile/:userId?" render={withSuspense(ProfileContainer)} />

						<Route path="/Users" render={() => <UsersContainer />} />
						<Route path="/Login" render={() => <LoginPage />} />
						<Route path="/News" component={News} />
						<Route path="/Music" component={Music} />
						<Route path="/Settings" component={Settings} />

					</div>

				</div>
			</div>

		)
	}
};
const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
})
const AppContainer = compose(
	withRouter,
	connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp = (props) => {
	return (
		<React.StrictMode>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Provider store={store}>
					<AppContainer />
				</Provider>
			</BrowserRouter>
		</React.StrictMode>
	)
}
export default SamuraiJSApp;