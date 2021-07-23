import React, { Component, ComponentType } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Link, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import 'antd/dist/antd.css';
import Preloader from './components/common/preloader/preloader';
import { Login } from './components/Login/Login';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersPage from './components/Users/UsersContainer';
import { withSuspense } from './hoc/withSuspense';
import { initializeApp } from './redux/appReducer';
import store, { appStateType } from './redux/reduxStore';
import { Breadcrumb, Layout, Menu } from 'antd';
import {
	LaptopOutlined,
	UserOutlined,
	NotificationOutlined
} from '@ant-design/icons';

import { AppHeader } from './components/Header/Header';
import SubMenu from 'antd/lib/menu/SubMenu';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/dialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/profileContainer'));
const ChatPage = React.lazy(() => import('./pages/chat/chatPage'));

const { Sider, Content } = Layout;


const SuspendedDialogs = withSuspense(DialogsContainer);
const SuspendedChatPage = withSuspense(ChatPage)
class App extends Component<MapPropsType & DispatchPropsType> {
	catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
		alert("some error occured");
		//console.error(promiseRejectonEvent)
	}
	componentDidMount() {
		this.props.initializeApp();
		window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
	}
	componentWillUnmount() {
		window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
	}
	state = {
		collapsed: false,
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	}
	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (
			<Layout>
				<AppHeader/>
				<Layout>
					<Sider width={200} className="site-layout-background">
						<Menu
							mode="inline"
							defaultSelectedKeys={['1']}
							defaultOpenKeys={['sub1']}
							style={{ height: '100%', borderRight: 0 }}
						>
							<SubMenu key="sub1" icon={<UserOutlined />} title="My Profile">
								<Menu.Item key="1"><Link to="/Profile">Profile</Link></Menu.Item>
								<Menu.Item key="2"><Link to="/Dialogs">Messages</Link></Menu.Item>
								
							</SubMenu>
							<SubMenu key="sub2" icon={<LaptopOutlined />} title="Settings">
								<Menu.Item key="5">Settings</Menu.Item>
								
							</SubMenu>
							<SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
								<Menu.Item key="9"><Link to="/ChatPage">Chat</Link></Menu.Item>
								<Menu.Item key="10">option10</Menu.Item>
								<Menu.Item key="11">option11</Menu.Item>
								<Menu.Item key="12">option12</Menu.Item>
							</SubMenu>
						</Menu>
					</Sider>
					<Layout style={{ padding: '0 24px 24px' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>
							<Breadcrumb.Item>Home</Breadcrumb.Item>
							<Breadcrumb.Item>List</Breadcrumb.Item>
							<Breadcrumb.Item>App</Breadcrumb.Item>
						</Breadcrumb>
						<Content
							className="site-layout-background"
							style={{
								padding: 24,
								margin: 0,
								minHeight: 280,
							}}
						>
							<Switch>
								<Route exact path="/" render={() => <Redirect to={'/Profile'} />} />
								<Route path="/Dialogs" render={() => <SuspendedDialogs />} />
								<Route path="/Profile/:userId?" component={withSuspense(ProfileContainer)} />
								<Route path="/Users" render={() => <UsersPage pageTitle={'Samurai'} />} />
								<Route path="/Login" render={() => <Login />} />
								<Route path="/News" component={News} />
								<Route path="/Music" component={Music} />
								<Route path="/Settings" component={Settings} />
								<Route path="/ChatPage" render={() => <SuspendedChatPage/>}/>
								<Route path="*" render={() => <div>404 Not Found</div>} />
							</Switch>
						</Content>
					</Layout>
				</Layout>
			</Layout>
			// 			<div className='app_wrapper'>
			// 				<HeaderContainer />
			// 				<Navbar />
			// 				<div className="app-wrapper-content">
			// 					<h1> </h1>

			// 					<div className="backgroundBlock">
			// 						<Switch>
			// 							<Route exact path="/" render={() => <Redirect to={'/Profile'}/>} />	
			// 							<Route path="/Dialogs" render={() => <SuspendedDialogs/>} />
			// 							<Route path="/Profile/:userId?" component={withSuspense(ProfileContainer)} />
			// 							<Route path="/Users" render={() => <UsersPage pageTitle={'Samurai'} />} />
			// 							<Route path="/Login" render={() => <Login/>} />
			// 							<Route path="/News" component={News} />
			// 							<Route path="/Music" component={Music} />
			// 							<Route path="/Settings" component={Settings} />
			// 							<Route path="*" render={() => <div>404 Not Found</div>}/>
			// 						</Switch>
			// 					</div>

			// 				</div>
			// 			</div>

		)
	}
};
const mapStateToProps = (state: appStateType) => ({
	initialized: state.app.initialized
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
type DispatchPropsType = { initializeApp: () => void }