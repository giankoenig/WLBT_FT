import React from "react";

import SessionItem from "./SessionItem";
import "./SessionList.css";

const SessionList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No Sessions Found.</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Upcoming Sessions</h2>
      <ul className="session-list">
        {props.items.map((session) => (
          <SessionItem
            key={session.id}
            id={session.id}
            date={session.date}
            location={session.location}
            sessionSlots={session.sessionSlots}
            sessionSlotsAvailable={session.sessionSlotsAvailable}
          />
        ))}
      </ul>
    </div>
  );
};

export default SessionList;
