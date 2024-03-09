import React from "react";

import './SessionItem.css'

const SessionItem = props => {
    return (
      <li className="session-item">
        <div className="session-item__content">
            <div>
                <h2>{props.date} {props.location} {props.sessionSlotsAvailable}/{props.sessionSlots}</h2>
            </div>
        </div>
      </li>
    );
};

export default SessionItem;