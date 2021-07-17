import React, { Component, ComponentType } from 'react';
import { connect, Provider } from 'react-redux';
import { BrowserRouter, Link, NavLink, Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { compose } from 'redux';
import './App.css';
import 'antd/dist/antd.css';
import Preloader from './components/common/preloader/preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import { Login } from './components/Login/Login';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersPage from './components/Users/UsersContainer';
import { withSuspense } from './hoc/withSuspense';
import { initializeApp } from './redux/appReducer';
import store, { appStateType } from './redux/reduxStore';
import { Col, Layout, Menu, Row} from 'antd';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	MessageOutlined,
	VideoCameraOutlined,
	UploadOutlined,
	UserSwitchOutlined
} from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/dialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/profileContainer'));

const { Header, Sider, Content } = Layout;

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
				<Sider trigger={null} collapsible collapsed={this.state.collapsed}>
					<div className="logo" />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
						<Menu.Item key="1" icon={<UserOutlined />}>
							<Link to="/Profile" >Profile</Link>
						</Menu.Item>
						<Menu.Item key="2" icon={<UserSwitchOutlined />}>
							<Link to="/users">Users</Link>
						</Menu.Item>
						<Menu.Item key="3" icon={<MessageOutlined />}>
							<Link to="/Dialogs">Messages</Link>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout className="site-layout">
					<Header className="site-layout-background" style={{ padding: 0 }}>
						<Row>
							<Col span={20}>
								{React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
								className: 'trigger',
								onClick: this.toggle,
								})}
							</Col>
							<Col span={4}>
								<Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
							</Col>
						</Row>
					</Header>
					<Content
						className="site-layout-background"
						style={{
							margin: '24px 16px',
							padding: 24,
							minHeight: 280,
						}}>
						<Switch>
							<Route exact path="/" render={() => <Redirect to={'/Profile'} />} />
							<Route path="/Dialogs" render={() => <SuspendedDialogs />} />
							<Route path="/Profile/:userId?" component={withSuspense(ProfileContainer)} />
							<Route path="/Users" render={() => <UsersPage pageTitle={'Samurai'} />} />
							<Route path="/Login" render={() => <Login />} />
							<Route path="/News" component={News} />
							<Route path="/Music" component={Music} />
							<Route path="/Settings" component={Settings} />
							<Route path="*" render={() => <div>404 Not Found</div>} />
						</Switch>
					</Content>
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
type DispatchPropsType = { initializeApp: () => void }