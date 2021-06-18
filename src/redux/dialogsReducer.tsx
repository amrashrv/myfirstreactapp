import { InferActionsType } from "./reduxStore";

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
const dialogsReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'SEND-MESSAGE':{
            let body = action.newMessageBody;
            return {...state,
                messages: [...state.messages, {id: 4, message: body}]
            };
        }
        default:
            return state;
    }
};


export const actions = {
    sendMessage: (newMessageBody: string) => ({
        type: 'SEND-MESSAGE', newMessageBody
    } as const),
}
export default dialogsReducer;

//types
type dialogsType = {id: number, name: string}
type messagesType = {id: number, message: string}
export type initialStateType = typeof initialState;
type ActionsType = InferActionsType<typeof actions>
