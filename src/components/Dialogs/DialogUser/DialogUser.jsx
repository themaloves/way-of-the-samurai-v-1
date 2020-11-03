import React from 'react';
import {NavLink} from "react-router-dom";

const DialogUser = (props) => {
  let path = "/messages/" + props.id;

  return (
    <li className="dialogs__user">
      <NavLink
        to={path}
        activeClassName="dialogs__link--active"
        className="dialogs__link">
        <div className="dialogs__avatar">
          <img className="dialogs__img" src={props.pathUrl} alt="avatar"/>
        </div>
        <span className="dialogs__name">
          {props.name}
        </span>
      </NavLink>
    </li>
  )
}

export default DialogUser;