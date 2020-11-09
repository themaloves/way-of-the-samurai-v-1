const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY',
  SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
  usersDialog: [
    {
      id: 1,
      name: 'Viktor',
      pathUrl: 'https://i.pinimg.com/originals/44/dc/38/44dc38897234ad7164d4bfea74e5bb7b.jpg'
    },
    {
      id: 2,
      name: 'Katya',
      pathUrl: 'https://3dtoday.ru/upload/blog/avatar/13a/13a3232f7f2ee7b1793de48245b2c9f3.jpeg'
    },
    {
      id: 3,
      name: 'Lera',
      pathUrl: 'https://specials-images.forbesimg.com/imageserve/5d3703e2f1176b00089761a6/960x0.jpg?cropX1=836&cropX2=5396&cropY1=799&cropY2=3364'
    },
    {
      id: 4,
      name: 'Anton',
      pathUrl: 'https://images11.popmeh.ru/upload/img_cache/571/571d2c1f21aa3bef07dff8382a2c8982_ce_1080x1080x96x0_cropped_800x800.jpeg'
    },
    {
      id: 5,
      name: 'Vladislav',
      pathUrl: 'https://cdn2.buyacar.co.uk/sites/buyacar/files/styles/w860/public/alfa-romeo-giulia67-1_0.jpg?itok=cM6fGydG'
    }
  ],
  messageDialog: [
    {id: 1, message: 'Hi'}
  ],
  newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
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