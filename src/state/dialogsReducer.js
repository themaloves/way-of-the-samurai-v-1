const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY',
  SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = '';
      state.messageDialog.push(
        {id: 2, message: body}
      );
      return state;
    default:
      return state;
  }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE}),
  updateNewMessageBodyActionCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
  })

export default dialogsReducer;