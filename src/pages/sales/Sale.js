import React from "react";
import "../../style/salesection.css";
import BestSeller from "../Home/best-seller/BestSeller";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
function Sale() {
  return (
    <>
      <div className="sale-section">
        <div className="sale-section-content">
          <div className="sale-section-head">Sale</div>
          <div className="sale-section-image">
            <div className="sale-section-image-item">
              <div className="sale-section-image-item-content">
                <h4>Refer a friend</h4>
                <span>Get 20% OFF</span>
                <button>LEARN MORE</button>
              </div>
              <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-promo-image-2.jpg" />
            </div>
            <div className="sale-section-image-item">
              <div className="sale-section-image-item-content">
                <h4>Promotion</h4>
                <span>Student Discount</span>
                <button>LEARN MORE</button>
              </div>

              <img src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-promo-image-1.jpg" />
            </div>
          </div>
        </div>
      </div>
      <BestSeller staus={"Last Pairs"} />
      <div className="sale-section-bottom">
        <div className="sale-section-bottom-container">
          <div className="sale-section-bottom-item">
            <div className="sale-section-bottom-item-logo">
              <div className="sale-bottom-logo">
                <ShoppingBasketIcon />
              </div>
            </div>
            <div className="sale-section-bottom-item-body">
              <span>The best gift</span>
              <p>
                Lacus vel sit eu integer leo nec ornare consequat eget dolor
              </p>
            </div>
          </div>
          <div className="sale-section-bottom-item sale-section-right">
            <button>SHOP GIFT CARD</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sale;
