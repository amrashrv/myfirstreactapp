import React, { Component, ComponentType } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import Preloader from './components/common/preloader/preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import {Login} from './components/Login/Login';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersPage from './components/Users/UsersContainer';
import { withSuspense } from './hoc/withSuspense';
import { initializeApp } from './redux/appReducer';
import store, { appStateType } from './redux/reduxStore';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/dialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/profileContainer'));

const SuspendedDialogs = withSuspense(DialogsContainer)
class App extends Component<MapPropsType & DispatchPropsType> {
	catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
		alert("some error occured");
		//console.error(promiseRejectonEvent)
	}
	componentDidMount() {
		this.props.initializeApp();
		window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
	}
	componentWillUnmount(){
		window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
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
						<Switch>
							<Route exact path="/" render={() => <Redirect to={'/Profile'}/>} />	
							<Route path="/Dialogs" render={() => <SuspendedDialogs/>} />
							<Route path="/Profile/:userId?" component={withSuspense(ProfileContainer)} />
							<Route path="/Users" render={() => <UsersPage pageTitle={'Samurai'} />} />
							<Route path="/Login" render={() => <Login/>} />
							<Route path="/News" component={News} />
							<Route path="/Music" component={Music} />
							<Route path="/Settings" component={Settings} />
							<Route path="*" render={() => <div>404 Not Found</div>}/>
						</Switch>
					</div>

				</div>
			</div>

		)
	}
};
const mapStateToProps = (state: appStateType) => ({
	initialized: state.app.initialized,
})
const AppContainer = compose<ComponentType>(
	withRouter,
	connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp: React.FC = (props) => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</BrowserRouter>
	)
}
export default SamuraiJSApp;
//types 
type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {initializeApp: ()=> void}