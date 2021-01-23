import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialogue + ' ' + classes.active}>
                    <NavLink to="/dialogue/1"> Andrey</NavLink>
                </div>
                <div className={classes.dialogue}>
                    <NavLink to="/dialogue/2">Olga</NavLink>
                </div>
                <div className={classes.dialogue}>
                    <NavLink to="/dialogue/3">Korney</NavLink>
                </div>
                <div className={classes.dialogue}>
                    <NavLink to="/dialogue/4">Ksenia</NavLink>
                </div>
                <div className={classes.dialogue}>
                    <NavLink to="/dialogue/5">Dima</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hey</div>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you</div>
            </div>
        </div>

    )
}
export default Dialogs;