import React from "react";

import "./OfferList.css";
import OfferItem from "./OfferItem";

const OfferList = (props) => {
  return (
    <div>
      <h2>Available Offers</h2>
      <ul className="offer-list">
        {props.items.map((offer) => (
          <OfferItem key={offer.id} />
        ))}
      </ul>
    </div>
  );
};

export default OfferList;
