import React from "react";
import "../../style/cartItem.css";
import { useState } from "react";
import HighlightOffSharpIcon from "@mui/icons-material/HighlightOffSharp";
import CartCount from "../cart-count-btn/CartCount";
import { useContext } from "react";
import MyContext from "../Mycontext/Mycontext";

function CartItem({ image, name, cartid, setGrantTotal }) {
  const { shoeqauntiy, cartdata, setCartData } = useContext(MyContext);
  function removeItem(id) {
    const result = cartdata.filter((item) => item.id != id);
    setCartData(result);
  }
  console.log(cartdata);
  const [cartCount, setCartCount] = useState(shoeqauntiy);

  return (
    <>
      <div className="cart-item-section">
        <div className="cart-item-section-data">
          <div className="cart-item-top">
            <div className="cart-item-left first-cart-part">
              <div className="cart-item-img">
                <img src={image} />
              </div>
              <div className="cart-item-details">
                <span>{name}</span>
                <div className="cart-items-count">
                  <CartCount
                    cartCount={cartCount}
                    setCartCount={setCartCount}
                    setGrantTotal={setGrantTotal}
                  />
                </div>
              </div>
            </div>
            <div className="cart-item-right second-cart-part">
              <div
                onClick={() => {
                  removeItem(cartid);
                }}
              >
                <HighlightOffSharpIcon />
              </div>
              <div>{"$" + Math.ceil(100 * cartCount * 100) / 100}</div>
            </div>
          </div>
          <div className="cart-item-bottom">
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
