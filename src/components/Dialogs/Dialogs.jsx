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
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Andrey" id="1"/>
                <DialogItem name="Olga" id="2"/>
                <DialogItem name="Korney" id="3"/>
                <DialogItem name="Ksenia" id="4"/>
                <DialogItem name="Dima" id="5"/>
            </div>
            <div className={classes.messages}>
                <Message text="hey" />
                <Message text="HI"/>
                <Message text="HO"/>
            </div>
        </div>

    )
}
export default Dialogs;