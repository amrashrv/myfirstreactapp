import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';

type InitailStateType = {
    initialized: boolean,
    
}
let initialState: InitailStateType  = {
    initialized: false,
};

const appReducer = (state = initialState, action: any): InitailStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

type initilizedSuccsessType = {
    type: typeof INITIALIZED_SUCCESS,
}
export const initializedSuccess = (): initilizedSuccsessType => ({ type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
        dispatch(initializedSuccess());
    });
}


export default appReducer;