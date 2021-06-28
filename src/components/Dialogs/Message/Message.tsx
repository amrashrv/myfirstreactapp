import React from 'react';
import classes from './Message.module.css'


const Message: React.FC<PropsType> = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    );
}

export default Message;
//types
type PropsType = {
    message: string
}