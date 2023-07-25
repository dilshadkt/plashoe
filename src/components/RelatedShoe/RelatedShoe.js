import React from "react";
import "../../style/relatedShoes.css";
import { Link } from "react-router-dom";

function RelatedShoe({ image, name, amount, number }) {
  return (
    <>
      <div className="related-card-Container">
        <Link reloadDocument to={"/browse/" + number}>
          <div className="shop-card-top">
            <img alt="" src={image} />
            <div className="quick-view">Quick View</div>
          </div>
        </Link>
        <div className="shop-card-bottom">
          <h4>{name}</h4>
          <span>
            <del>$89.90</del> ${amount}
          </span>
        </div>
      </div>
    </>
  );
}

export default RelatedShoe;
