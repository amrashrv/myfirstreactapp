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

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
            </div>
            <div className={classes.messages}>
                <Message text={messagesData[0].message} />
                <Message text={messagesData[1].message} />
                <Message text={messagesData[2].message} />
            </div>
        </div>

    )
}
export default Dialogs;