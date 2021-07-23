import { Button, message } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}
const ChatPage: React.FC = () => {
    return (
        <Chat />
    )
}
const Chat: React.FC = () => {
    return (
        <div>
            <Messages />
            <AddMessageForm />
        </div>
    )
}
const Messages: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessageType[]>([]);
    useEffect(() => {
        wsChannel.addEventListener('message', (e: MessageEvent) => {
            const newMessages = JSON.parse(e.data);
            setMessages((prevMessages) => [...prevMessages, ...newMessages])
        })
    },[])
    return (
        <div style={{height: '400px', overflowY: 'auto'}}>
            {messages.map((m, index) => <Message key={index} message={m}/>)}
        </div>
    )
}
const Message: React.FC<{message: ChatMessageType}> = ({message}) => {
    return (
        <div>
            <img src={message.photo} width={'30px'}/><b>{message.userName}</b>
            <br />{message.message}<hr />
        </div>
    )
}
const AddMessageForm: React.FC = () => {
    const [message, setMessage] = useState('');
    const sendMessage = () => {
        if(!message){
            return;
        }
        wsChannel.send(message)
        setMessage('')
    }
    return (
        <div>
            <div>
                <TextArea onChange={e => setMessage(e.currentTarget.value)} value={message}></TextArea>
            </div>
            <div>
                <Button onClick={sendMessage} type={'primary'}>Send</Button>
            </div>
        </div>
    )
}

export default ChatPage;