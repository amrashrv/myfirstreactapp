const SEND_MESSAGE: string = 'SEND-MESSAGE';

//type initialStateType = typeof initialState;

let initialState = {

    dialogs: [
        { id: 1, name: "Andrey" },
        { id: 2, name: "Olga" },
        { id: 3, name: "Korney" },
        { id: 4, name: "Ksenia" },
        { id: 5, name: "Dima" }
    ],
    messages: [
        { id: 1, message: "Hey how are you" },
        { id: 2, message: "Im good" },
        { id: 3, message: "Cool" }
    ],

}

const dialogsReducer = (state =  initialState, action: any) => {
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
export const sendMessageCreator = (newMessageBody: any) => ({
    type: SEND_MESSAGE, newMessageBody
});

export default dialogsReducer;