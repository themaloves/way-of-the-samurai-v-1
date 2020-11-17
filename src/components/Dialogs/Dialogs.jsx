import React from 'react';
import DialogUser from './DialogUser/DialogUser';
import DialogMessage from './DialogMessage/DialogMessage';
import {Redirect} from 'react-router-dom';

const Dialogs = (props) => {
  let state = props.dialogs;

  let dialogsElements = state.usersDialog.map(d => {
      return <DialogUser key={d.id} name={d.name} id={d.id} pathUrl={d.pathUrl}/>
    }),
    messagesElements = state.messageDialog.map(m => {
      return <DialogMessage key={m.id} message={m.message}/>
    }),
    newMessageBody = state.newMessageBody;


  let onSendMessageClick = () => {
      props.sendMessage();
    },
    onNewMessageChange = (e) => {
      let body = e.target.value
      props.updateNewMessageBody(body);
    }

    if (!props.isAuth) {
      return <Redirect to={'/login'} />
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