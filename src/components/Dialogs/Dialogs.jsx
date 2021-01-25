import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={classes.dialogue + ' ' + classes.active}>
            <NavLink to={"/dialogue/" + props.id}>{props.name}</NavLink>
        </div>
    );
}
const Message = (props) => {
    return (
        <div className={classes.message}>{props.text}</div>
    );
}
const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: "Andrey" },
        { id: 2, name: "Olga" },
        { id: 3, name: "Korney" },
        { id: 4, name: "Ksenia" },
        { id: 5, name: "Dima" }
    ];
    let messagesData = [
        { id: 1, message: "Hey how are you" },
        { id: 2, message: "Im good" },
        { id: 3, message: "Cool" }
    ];
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