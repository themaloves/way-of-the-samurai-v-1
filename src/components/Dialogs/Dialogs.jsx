import React from 'react';
import DialogUser from './DialogUser/DialogUser';
import DialogMessage from './DialogMessage/DialogMessage';

const Dialogs = () => {
  return (
    <section className="dialogs">
      <ul className="dialogs__users">
        <DialogUser name="Viktor" id="1"/>
        <DialogUser name="Katya" id="2"/>
        <DialogUser name="Lera" id="3"/>
        <DialogUser name="Anton" id="4"/>
        <DialogUser name="Vladislav" id="5"/>
      </ul>
      <div className="dialogs__messages">
        <DialogMessage message="Hi, u from?"/>
        <DialogMessage message="Hello, i'm Katya"/>
        <DialogMessage message="Good"/>
        <DialogMessage message="Looks"/>
        <DialogMessage message="Cool"/>
      </div>
    </section>
  )
}

export default Dialogs;