import React from 'react';
import Dialogs from './Dialogs';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../state/dialogsReducer';
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState().dialogs;

          let onSendMessageClick = () => {
              store.dispatch(sendMessageActionCreator());
            },
            onNewMessageChange = (body) => {
              store.dispatch(updateNewMessageBodyActionCreator(body));
            }

          return (
            <Dialogs sendMessage={onSendMessageClick}
                     updateNewMessageBody={onNewMessageChange}
                     usersDialog={state.usersDialog}
                     dialogs={state}
            />
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default DialogsContainer;