import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.dialogsPage.messages
        .map(message => <Message message={message.message} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    let onMessageChange = () => {
        let newMessage = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(newMessage));
        //let action = updateNewMessageTextActionCreator(newMessage);
        //props.dispatch(action);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea
                        onChange={onMessageChange}
                        ref={newMessageElement}
                        value={props.newMessageText}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Send</button>
                </div>


            </div>
        </div>

    )
}
export default Dialogs;