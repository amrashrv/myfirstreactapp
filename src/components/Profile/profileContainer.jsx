import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUserProfile } from '../../redux/profileReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 15159
    }
    this.props.setUserProfile(userId);
  }
  render(){
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});
//закидываем в компоненту данне из URl
let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);