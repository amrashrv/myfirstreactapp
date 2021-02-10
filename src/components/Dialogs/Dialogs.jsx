import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.dialogsPage.messages
        .map(message => <Message message={message.message} />);

    let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator());
    }
    let newMessageBody = props.newMessageBody;
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body))
        //let newMessage = newMessageElement.current.value;
        //props.dispatch(updateNewMessageBodyCreator(newMessage));
        //let action = updateNewMessageTextActionCreator(newMessage);
        //props.dispatch(action);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <textarea
                        placeholder='Enter your message'
                        onChange={onNewMessageChange}
                        ref={newMessageElement}
                        value={newMessageBody}>
                    </textarea>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>


            </div>
        </div>

    )
}
export default Dialogs;