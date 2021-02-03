import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import state from '../../redux/state'

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);

    let messagesElements = props.state.messages
        .map(message => <Message message={message.message} />);

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let mssg = newMessageElement.current.value;
        alert(mssg);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>


            </div>
        </div>

    )
}
export default Dialogs;