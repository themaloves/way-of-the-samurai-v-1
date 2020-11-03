import React from 'react';
import DialogUser from './DialogUser/DialogUser';
import DialogMessage from './DialogMessage/DialogMessage';

const Dialogs = (props) => {
  let dialogsElements = props.usersDialog.map(d => {
      return <DialogUser name={d.name} id={d.id}/>
    }),
    messagesElements = props.messageDialog.map(m => {
      return <DialogMessage message={m.message}/>
    });

  return (
    <section className="dialogs">
      <ul className="dialogs__users">
        {dialogsElements}
      </ul>
      <div className="dialogs__messages">
        {messagesElements}
      </div>
    </section>
  )
}

export default Dialogs;