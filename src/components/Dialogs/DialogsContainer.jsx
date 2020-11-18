import React from 'react';
import {connect} from 'react-redux';
import Dialogs from './Dialogs';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../state/dialogsReducer';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogs,
    isAuth: state.auth.isAuth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {dispatch(updateNewMessageBodyActionCreator(body));},
    sendMessage: () => {dispatch(sendMessageActionCreator());}
  }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;