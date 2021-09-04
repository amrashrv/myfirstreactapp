
let subscribers = {
    'messages-received': [] as MessagesReceivedSubscriberType[],
    'status-changed': [] as StatusChangedSubscriberType[]
}

let ws: WebSocket | null;
type EventNamesType = 'messages-received' | 'status-changed'

const closeHandler = () => {
    setTimeout(createChannel, 3000);
}
const  onMessageHandler = (e: MessageEvent) => {
    const newMessages = JSON.parse(e.data);
    subscribers['messages-received'].forEach(s => s(newMessages))
}
const cleanUp = () => {
    ws?.removeEventListener('close', closeHandler);
    ws?.removeEventListener('message', onMessageHandler)
    ws?.close();
}
const notifySubscribersAboutStatus = (status: StatusType) => {
    subscribers['status-changed'].forEach(s => s('pending'));
}
function createChannel() {
    cleanUp()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
    notifySubscribersAboutStatus('pending')
    ws.addEventListener('close', closeHandler);
    ws.addEventListener('message', onMessageHandler)
    // ws.addEventListener('open', )

}

export const chatAPI = {
    start(){
        createChannel()
    },
    stop(){
        subscribers['messages-received'] = []
        subscribers['status-changed'] = []
        cleanUp()
    },
    subscribe(eventName: EventNamesType, callback: StatusChangedSubscriberType | MessagesReceivedSubscriberType) {
        //@ts-ignore
        subscribers[eventName].push(callback);
        return () => {
            //@ts-ignore
            subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
        }
    },
    unsubscribe(eventName: EventNamesType, callback: MessagesReceivedSubscriberType | StatusChangedSubscriberType) {
        //@ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s => s !== callback)
    },
   
    sendMessage(message: string) {
        ws?.send(message)
    }
}

//types
export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
};

type MessagesReceivedSubscriberType = (messages: ChatMessageType[]) => void;
type StatusChangedSubscriberType = (status: StatusType) => void;
export type StatusType = 'pending' | 'ready'