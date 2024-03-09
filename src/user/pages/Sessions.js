import React from 'react';

import SessionList from '../components/SessionList';

const Sessions = () => {

  const SESSIONS = [
    {
      id: "u1",
      date: "2024-03-24",
      location: "Seefeld",
      sessionSlots: "5",
      sessionSlotsAvailable: "3",
    },
  ];

  return <SessionList items={SESSIONS}/>;
};

export default Sessions;
