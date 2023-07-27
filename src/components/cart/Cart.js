import React, { useEffect, useState } from "react";
import "../../style/cart.css";
import CartItem from "../cart-items/CartItem";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../Mycontext/Mycontext";

function Cart() {
  const { setCartOpen, cartOpen, setCartData, cartdata } =
    useContext(MyContext);
  useEffect(() => {
    var filterData = cartdata.filter(
      (item, index, self) =>
        index ===
        self.findIndex((obj) => obj.id === item.id && obj.name === item.name)
    );
    setCartData(filterData);
  }, [cartdata.length]);

  //////////////////////////  grant total 💰💰💰///////////
  useEffect(
    () => {
      let sum = cartdata.reduce((acc, current) => {
        return acc + Number(current.amount);
      }, 0);
      setGrantTotal(sum);
      console.log("booom");
    }
    // , [cartdata, setCartData]
  );

  ////////////////////////////////////////////////////////

  const [grantTotal, setGrantTotal] = useState(0);

  return (
    <>
      <div className={"cart-section " + (cartOpen && "active")}>
        <div className="shop-cart">
          <span>Shopping Cart</span>
          <div className="cancel-btn" onClick={() => setCartOpen(false)}>
            <ClearSharpIcon />
          </div>
        </div>
        <hr />
        <div
          className={
            "cart-item-show-container " +
            (cartdata.length === 0 && "active-cart")
          }
        >
          {cartdata.length === 0 ? (
            <>
              <div className="empty-cart">No products in the cart.</div>
              <div className="continue-shoping">
                <Link to={"/product-category/Collection"}>
                  <button onClick={() => setCartOpen(false)}>
                    CONTINUE SHOPPING
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <>
              {" "}
              {cartdata.map((item) => (
                <div className="shop-cart-item" key={item.id}>
                  <CartItem
                    image={item.image}
                    name={item.name}
                    cartid={item.id}
                    amount={item.amount}
                    setGrantTotal={setGrantTotal}
                  />
                </div>
              ))}
            </>
          )}{" "}
        </div>
        <div className="cart-total-bottom">
          <div className="total-content-box">
            <div className="sub-total">
              <span>Subtotal:</span>
              <div className="grant-total">${grantTotal}</div>
            </div>
            <hr />
            <div className="total-btn">
              <button>VIEW CART</button>
              <button>CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
