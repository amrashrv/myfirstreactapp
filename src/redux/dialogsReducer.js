const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = 'SEND-MESSAGE';

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
    newMessageBody: ''

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case UPDATE_NEW_MESSAGE_BODY:{
            return {
                ...state,
                newMessageBody: action.body
            };
        }
        case SEND_MESSAGE:{
            let body = state.newMessageBody;
            return {...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 4, message: body}]
            };
        }
        default:
            return state;
    }
};
export const sendMessageCreator = () => ({
    type: SEND_MESSAGE
});
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
});
// if (action.type === UPDATE_NEW_MESSAGE_BODY) {
//     state.newMessageBody = action.body;
// } else if (action.type = SEND_MESSAGE) {
//     let body = state.newMessageBody;
//     state.messages.push({
//         id: 4,
//         message: body
//     });
//     state.newMessageBody = '';
// }  
// return state;

export default dialogsReducer;