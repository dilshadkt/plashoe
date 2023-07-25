import React from "react";
import "../../../style/homeCard.css";

function HomeCardContainer() {
  return (
    <div className="home-card-container">
      <div className="home-card-container-body">
        <div className="home-card-container-item">
          <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-shop-men-image-thumbnail.jpg" />
          <div className="home-card-container-content">
            <span>Men</span>
            <button>SHOP MEN</button>
          </div>
        </div>
        <div className="home-card-container-item">
          <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-shop-women-image-tumbnail.jpg" />
          <div className="home-card-container-content">
            <span>Women</span>
            <button>SHOP WOMEN</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCardContainer;
