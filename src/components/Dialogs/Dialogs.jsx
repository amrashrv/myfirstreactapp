import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = state.messages
        .map(message => <Message message={message.message} />);

    let newMessageBody = state.newMessageBody;

    let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    //let newMessageBody = props.newMessageBody;
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
        //props.store.dispatch(updateNewMessageBodyCreator(body))
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