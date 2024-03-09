import React from 'react';

import OfferList from '../components/OfferList';

const Offers = () => {

  const OFFER = [
    {
      id: "p1",
      sessions: "10",
      validity: "3 months",
      price: "CHF 850.-"
    },
  ];

  return <OfferList items={OFFER}/>;
};

export default Offers;
