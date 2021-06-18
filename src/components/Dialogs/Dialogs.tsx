import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';
import { initialStateType } from '../../redux/dialogsReducer';

import { maxLengthCreator, required } from '../../utils/validators/validators';
import { createField, Textarea } from '../common/formsControls/formsControls';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs: React.FC<OwnPropsType> = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs
        .map((dialog:any) => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);

    let messagesElements = state.messages
        .map((message:any) => <Message message={message.message} key={message.id} />);
    
    let addNewMessage = (values: NewMessageFormType) => {
		props.sendMessage(values.newMessageBody)
    }
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
const maxLength50 = maxLengthCreator(50)
const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormType>> = (props:any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {createField<NewMessageFormValuesType>('Enter your message', "newMessageBody", Textarea, [required, maxLength50])} 
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm<NewMessageFormType>({form: 'dialogAddMessageForm'})(AddMessageForm);
export default Dialogs;
//types

type OwnPropsType = {
    dialogsPage: initialStateType,
    sendMessage: (messageText: string) => void,
}
export type NewMessageFormType= {
    newMessageBody: string,    
}
type NewMessageFormValuesType = Extract<keyof NewMessageFormType, string>