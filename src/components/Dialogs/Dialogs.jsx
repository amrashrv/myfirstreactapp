import React from 'react';
import { NavLink } from 'react-router-dom';
import { dialogsData, messagesData } from '../..';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    
    let dialogsElements = dialogsData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> ); 
    let messagesElements = messagesData
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