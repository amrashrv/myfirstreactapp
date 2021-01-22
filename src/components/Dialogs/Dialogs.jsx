import React from 'react';
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialogue + ' ' + classes.active}>
                    Andrey
                </div>
                <div className={classes.dialogue}>
                    Dima
                </div>
                <div className={classes.dialogue}>
                    Sasha
                </div>
                <div className={classes.dialogue}>
                    Olga
                </div>
                <div className={classes.dialogue}>
                    Korney
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