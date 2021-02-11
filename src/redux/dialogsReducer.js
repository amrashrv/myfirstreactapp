const dialogsReducer = (state, action) =>{
    if (action.type === SEND_MESSAGE) {
        let body = this._state.dialogsPage.newMessageBody;
        this._state.dialogsPage.messages.push({
            id: 4,
            message: body
        });
        this._state.dialogsPage.newMessageBody = '';
        this._callSubsciber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        this._state.dialogsPage.newMessageBody = action.body;
        this._callSubsciber(this._state);
    }
}