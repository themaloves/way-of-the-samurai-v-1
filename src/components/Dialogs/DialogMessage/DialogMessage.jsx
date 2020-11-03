import React from 'react';

const DialogMessage = (props) => {
  console.log(props);
  let messageArray;
  if (typeof props.message === 'object') {
    messageArray = props.message.map(m => {
      return (
        <div className={`dialogs__${m.side}`}>
          <span className="dialogs__user-name">{m.userName}</span>
          <span>{m.message}</span>
        </div>
      )
    })
  }
  return (
    <div className="dialogs__message">
      {messageArray}
    </div>
  )
}

export default DialogMessage;