import React from "react";

import './OfferItem.css'

const OfferItem = props => {
    return (
      <li className="session-item">
        <div className="session-item__content">
          <div>
            <h2>
              {props.key}
            </h2>
          </div>
        </div>
      </li>
    );
};

export default OfferItem;