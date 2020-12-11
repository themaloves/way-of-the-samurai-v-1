import React from 'react';
import DialogUser from './DialogUser/DialogUser';
import DialogMessage from './DialogMessage/DialogMessage';
import {Field, reduxForm} from 'redux-form';

const Dialogs = (props) => {
  let state = props.dialogs;

  let dialogsElements = state.usersDialog.map(d => {
      return <DialogUser key={d.id} name={d.name} id={d.id} pathUrl={d.pathUrl}/>
    }),
    messagesElements = state.messageDialog.map(m => {
      return <DialogMessage key={m.id} message={m.message}/>
    });

  let addNewMessage = (values) => {
      props.sendMessage(values.newMessageBody)
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
        <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
    </section>
  )
}

const AddMessageForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
            <Field
              component={"textarea"}
              name={"newMessageBody"}
              placeholder="Введите сообщение"
            />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({
  form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;