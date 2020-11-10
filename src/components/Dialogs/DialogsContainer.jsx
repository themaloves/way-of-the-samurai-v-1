import React from 'react';
import Dialogs from './Dialogs';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../state/dialogsReducer';

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogs;

  let onSendMessageClick = () => {
      props.store.dispatch(sendMessageActionCreator());
    },
    onNewMessageChange = (body) => {
      props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }

  return (
    <Dialogs sendMessage={onSendMessageClick}
             updateNewMessageBody={onNewMessageChange}
             usersDialog={state.usersDialog}
             dialogs={state}
    />
  )
}

export default DialogsContainer;