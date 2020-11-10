import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../state/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {dispatch(updateNewMessageBodyActionCreator(body));},
    sendMessage: () => {dispatch(sendMessageActionCreator());}
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;