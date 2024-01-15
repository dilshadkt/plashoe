import React from "react";
import "../../style/AdmineCards.css";

import { NavLink } from "react-router-dom";

function AdmineCards({ image, name, number, amount, removeItem }) {
  return (
    <>
      <div className="admine-card-Container">
        <div className="card-cancel" onClick={() => removeItem(number)}>
          ❌
        </div>
        <NavLink to={`browse/${number}`}>
          <div className="admine-card-top">
            <img alt="" src={image} />
            <div className="quick-view">Quick View</div>
          </div>
        </NavLink>
        <div className="admine-card-bottom">
          <h4>{name}</h4>
          <span>
            <del>$89.90</del>$ {amount}
          </span>
        </div>
      </div>
    </>
  );
}

export default AdmineCards;
