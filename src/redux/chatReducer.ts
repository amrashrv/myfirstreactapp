import { FormAction } from "redux-form";
import { BaseThunkType, InferActionsType } from "./reduxStore";
import { chatAPI, ChatMessageType, StatusType } from "../api/chatAPI";
import { Dispatch } from "redux";





let initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as StatusType
};
const chatReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case 'samurai-network/messages/MESSAGES_RECIEVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            }
        case 'samurai-network/messages/STATUS_CHANGED':
            return {
                ...state,
                status: action.payload.status
            }
        default:
            return state;
    }
}
export const actions = {
    messagesRecieved: (messages: ChatMessageType[]) => ({ type: 'samurai-network/messages/MESSAGES_RECIEVED', payload: { messages } } as const),
    statusChanged: (status: StatusType) => ({ type: 'samurai-network/messages/STATUS_CHANGED', payload: { status } } as const)
}
let _newMessageHandler: ((messages: ChatMessageType[]) => void) | null = null;
const newMessageHandlerCreator = (dispatch: Dispatch) => {
    if (_newMessageHandler == null) {
        _newMessageHandler = (messages) => {
            dispatch(actions.messagesRecieved(messages))
        }
    }
    return _newMessageHandler
}

let _newStatusHandler: ((status: StatusType) => void) | null = null;
const newStatusHandlerCreator = (dispatch: Dispatch) => {
    if (_newStatusHandler == null) {
        _newStatusHandler = (status) => {
            dispatch(actions.statusChanged(status))
        }
    }
    return _newStatusHandler
}
export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe('messages-received' ,newMessageHandlerCreator(dispatch))
    chatAPI.subscribe('status-changed' , newStatusHandlerCreator(dispatch))
}
export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.unsubscribe('messages-received' , newMessageHandlerCreator(dispatch))
    chatAPI.unsubscribe('status-changed' , newStatusHandlerCreator(dispatch))
    chatAPI.stop()
}
export const sendMessage = (message: string): ThunkType => async (dispatch) => {
    chatAPI.sendMessage(message)
}
export default chatReducer;

//types
export type InitialStateType = typeof initialState;
type ActionsType = InferActionsType<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>