import React from 'react';
import { connect} from 'react-redux';
import { logout } from '../../redux/authReducer';
import { appStateType } from '../../redux/reduxStore';
import Header, { DispatchPropsType, MapPropsType } from './Header';

class HeaderContainer extends React.Component<MapPropsType & DispatchPropsType> {
    render() {
        return (
            <Header {...this.props} />
        );
    }
}
const mapStateToProps = (state: appStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect<MapPropsType, DispatchPropsType, {}, appStateType>(mapStateToProps, { logout })(HeaderContainer);
//types
