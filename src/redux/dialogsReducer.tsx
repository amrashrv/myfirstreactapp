const SEND_MESSAGE = 'SEND-MESSAGE';

type dialogsType = {
    id: number,
    name: string,
}
type messagesType = {
    id: number, 
    message: string
}
let initialState = {
    dialogs: [
        { id: 1, name: "Andrey" },
        { id: 2, name: "Olga" },
        { id: 3, name: "Korney" },
        { id: 4, name: "Ksenia" },
        { id: 5, name: "Dima" }
    ] as Array<dialogsType>,
    messages: [
        { id: 1, message: "Hey how are you" },
        { id: 2, message: "Im good" },
        { id: 3, message: "Cool" }
    ] as Array<messagesType>,

}
export type initialStateType = typeof initialState;

const dialogsReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:{
            let body = action.newMessageBody;
            return {...state,
                messages: [...state.messages, {id: 4, message: body}]
            };
        }
        default:
            return state;
    }
};

type sendMessageCreatorType = {
    type: typeof SEND_MESSAGE,
    newMessageBody: string
} 
export const sendMessageCreator = (newMessageBody: string): sendMessageCreatorType => ({
    type: SEND_MESSAGE, newMessageBody
});

export default dialogsReducer;