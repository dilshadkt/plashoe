import React, { useState } from "react";

function CartCount({ cartCount, setCartCount, setGrantTotal, setCartData }) {
  function incriment(action) {
    if (action === "+") {
      // setGrantTotal(Math.ceil(100 * cartCount * 100) / 100);
      return setCartCount((prev) => prev + 1);
    } else {
      // setGrantTotal(Math.ceil(100 * cartCount * 100) / 100);
      return setCartCount((prev) => prev - 1);
    }
  }

  return (
    <>
      <div className="shoe-quantity-container">
        <button
          onClick={() => {
            cartCount > 1 && incriment("-");
          }}
        >
          -
        </button>

        <div>{cartCount}</div>

        <button
          onClick={() => {
            incriment("+");
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default CartCount;
