import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './../Dialogs.module.css';

const DialogItem = (props) => {
    return (
        <div className={classes.dialogue + ' ' + classes.active}>
            <NavLink to={"/dialogue/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;