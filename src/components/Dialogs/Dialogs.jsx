import React from 'react';
import DialogUser from './DialogUser/DialogUser';
import DialogMessage from './DialogMessage/DialogMessage';

const Dialogs = () => {
  let usersDialog = [
      {id: 1, name: 'Viktor'},
      {id: 2, name: 'Katya'},
      {id: 3, name: 'Lera'},
      {id: 4, name: 'Anton'},
      {id: 5, name: 'Vladislav'},
    ],
    messageDialog = [
      {id: 1, message: 'Hi, u from?'},
      {id: 2, message: 'Hello, i\'m Katya'},
      {id: 3, message: 'Good'},
      {id: 4, message: 'Looks'},
      {id: 5, message: 'Cool'},
    ]

  let dialogsElements = usersDialog.map(d => {
      return <DialogUser name={d.name} id={d.id}/>
    }),
    messagesElements = messageDialog.map(m => {
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