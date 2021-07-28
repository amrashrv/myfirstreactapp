import { Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChatMessageType } from '../../api/chatAPI';
import { sendMessage, startMessagesListening, stopMessagesListening } from '../../redux/chatReducer';
import { appStateType } from '../../redux/reduxStore';

const ChatPage: React.FC = () => {
    return (
        <Chat />
    )
}

const Chat: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])
    return (
        <div>
            <Messages />
            <AddMessageForm />
        </div>
    )
}
const Messages: React.FC = () => {
    const messages = useSelector((state: appStateType) => state.chat.messages)
    return (
        <div style={{ height: '400px', overflowY: 'auto' }}>
            {messages.map((m, index) => <Message key={index} message={m} />)}
        </div>
    )
}
const Message: React.FC<{ message: ChatMessageType }> = ({ message }) => {
    return (
        <div>
            <img alt='' src={message.photo} width={'30px'} /><b>{message.userName}</b>
            <br />{message.message}<hr />
        </div>
    )
}
const AddMessageForm: React.FC = () => {
    const [message, setMessage] = useState('')
    
    const dispatch = useDispatch()
    const status = useSelector((state: appStateType) => state.chat.status)
    const sendMessageHandler = () => {
        if(!message){
            return 
        }
        dispatch(sendMessage(message));
        setMessage('')
    }

   
    return (
        <div>
            <div>
                <TextArea onChange={e => setMessage(e.currentTarget.value)} value={message}></TextArea>
            </div>
            <div>
                <Button disabled={status !== 'ready'} onClick={sendMessageHandler} type={'primary'}>Send</Button>
            </div>
        </div>
    )
}


export default ChatPage;