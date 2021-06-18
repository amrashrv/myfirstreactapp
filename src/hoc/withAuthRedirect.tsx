import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { appStateType } from "../redux/reduxStore";

let mapStateToPropsForRedirect = (state: appStateType) => ({
	isAuth: state.auth.isAuth
});
export function withAuthRedirect<WCP>(WrappedComponent: ComponentType<WCP>) {
	const RedirectComponent: React.FC<MapPropsType & DispatchPropsType> = (props) => {
		let { isAuth, ...restProps } = props
		if (!isAuth) return <Redirect to='/Login' />
		return <WrappedComponent {...restProps as WCP} />
	}
	let ConnectedAuthRedirectComponent = connect<MapPropsType, DispatchPropsType, WCP, appStateType>(mapStateToPropsForRedirect, {})(RedirectComponent);
	return ConnectedAuthRedirectComponent;
}
//types
type MapPropsType = {
	isAuth: boolean
}
type DispatchPropsType = {}