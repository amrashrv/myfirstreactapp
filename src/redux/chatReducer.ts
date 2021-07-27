import { FormAction } from "redux-form";
import { BaseThunkType, InferActionsType } from "./reduxStore";
import { chatAPI, ChatMessageType } from "../api/chat";
import { Dispatch } from "redux";





let initialState = {
    messages: [] as ChatMessageType[]
};
const chatReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case 'samurai-network/messages/MESSAGES_RECIEVED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages]
            }
        default:
            return state;
    }
}
export const actions = {
    messagesRecieved: (messages: ChatMessageType[]) => ({ type: 'samurai-network/messages/MESSAGES_RECIEVED', payload: { messages } } as const)
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
export const startMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.start()
    chatAPI.subscribe(newMessageHandlerCreator(dispatch))
}
export const stopMessagesListening = (): ThunkType => async (dispatch) => {
    chatAPI.unsubscribe(newMessageHandlerCreator(dispatch))
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