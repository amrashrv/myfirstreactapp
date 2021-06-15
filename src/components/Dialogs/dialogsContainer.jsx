
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { actions} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs.tsx';

let mapStateToProps = (state) => {
	return {
		dialogsPage: state.dialogsPage
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: (newMessageBody) => {
			dispatch(actions.sendMessageCreator(newMessageBody));
		}
	}
}
export default compose(
	connect(mapStateToProps,mapDispatchToProps),
	withAuthRedirect
)(Dialogs)