import React from 'react';
import DialogUser from './DialogUser/DialogUser';
import DialogMessage from './DialogMessage/DialogMessage';

const Dialogs = (props) => {
  let dialogsElements = props.data.usersDialog.map(d => {
      return <DialogUser key={d.id} name={d.name} id={d.id} pathUrl={d.pathUrl}/>
    }),
    messagesElements = props.data.messageDialog.map(m => {
      return <DialogMessage key={m.id} message={m.message}/>
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