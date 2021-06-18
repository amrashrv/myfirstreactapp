
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { actions} from '../../redux/dialogsReducer';
import { appStateType } from '../../redux/reduxStore';
import Dialogs from './Dialogs';

let mapStateToProps = (state: appStateType) => {
	return {
		dialogsPage: state.dialogsPage
	}
}
export default compose(
	connect(mapStateToProps,{...actions}),
	withAuthRedirect
)(Dialogs) as React.ComponentType