import { getAuthUserData } from "./authReducer";
import { InferActionsType } from "./reduxStore";

let initialState = {
    initialized: false,
};

export type InitailStateType = typeof initialState;
type actionsType = InferActionsType<typeof actions>;

const appReducer = (state = initialState, action: actionsType): InitailStateType => {
    switch (action.type) {
        case 'sn/app/INITIALIZED-SUCCESS':
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}
export const actions = {
    initializedSuccess: () => ({type: 'sn/app/INITIALIZED-SUCCESS'})
}
export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
        dispatch(actions.initializedSuccess());
    });
}


export default appReducer;