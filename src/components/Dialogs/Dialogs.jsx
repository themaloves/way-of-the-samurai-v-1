import React from 'react';
import DialogUser from './DialogUser/DialogUser';
import DialogMessage from './DialogMessage/DialogMessage';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../state/state';

const Dialogs = (props) => {

  let state = props.store.getState().dialogs;

  let dialogsElements = state.usersDialog.map(d => {
      return <DialogUser key={d.id} name={d.name} id={d.id} pathUrl={d.pathUrl}/>
    }),
    messagesElements = state.messageDialog.map(m => {
      return <DialogMessage key={m.id} message={m.message}/>
    }),
    newMessageBody = state.newMessageBody;


  let onSendMessageClick = () => {
      props.store.dispatch(sendMessageActionCreator());
    },
    onNewMessageChange = (e) => {
      let body = e.target.value
      props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }

  return (
    <section className="dialogs">
      <ul className="dialogs__users">
        {dialogsElements}
      </ul>
      <div className="dialogs__messages">
        <div>
          {messagesElements}
        </div>
        <div>
          <div>
            <textarea value={newMessageBody}
                      onChange={onNewMessageChange}
                      placeholder="Введите сообщение"
            />
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dialogs;