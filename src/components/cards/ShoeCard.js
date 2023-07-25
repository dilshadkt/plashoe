import React from "react";
import "../../style/shopCards.css";
import { Link } from "react-router-dom";

function ShoeCard({ image, name, number, amnt }) {
  return (
    <>
      <div className="shop-card-Container">
        <Link to={"/browse/" + number} replace>
          <div className="shop-card-top">
            <img alt="" src={image} />
            <div className="quick-view">Quick View</div>
          </div>
        </Link>

        <div className="shop-card-bottom">
          <h4>{name}</h4>
          <span>
            <del>$89.90</del>$ {amnt}
          </span>
        </div>
      </div>
    </>
  );
}

export default ShoeCard;
