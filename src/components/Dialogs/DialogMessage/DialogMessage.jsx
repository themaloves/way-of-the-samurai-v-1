import React from 'react';

const DialogMessage = (props) => {
  return (
    <div className="dialogs__message">
      {props.message}
    </div>
  )
}

export default DialogMessage;