import React from 'react';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);

    let messagesElements = state.messages
        .map(message => <Message message={message.message} key={message.id} />);
    
    let addNewMessage = (values) => {
		props.sendMessage(values.newMessageBody)
    }
    if (!props.isAuth) return <Redirect to="/Login" />
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component="textarea" name="newMessageBody" placeholder='Enter your message'/>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);
export default Dialogs;