import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogsElements = props.dialogs
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> ); 
    let messagesElements = props.messages
        .map( message => <Message text={message.message} />);
    
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>

    )
}
export default Dialogs;