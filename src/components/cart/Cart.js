import React, { useEffect, useState } from "react";
import "../../style/cart.css";
import CartItem from "../cart-items/CartItem";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../Mycontext/Mycontext";
import axios from "../../config/AxiosConfig";
function Cart() {
  const { setCartOpen, cartOpen, setCartData, cartdata } =
    useContext(MyContext);

  ///////////////////////////////////////////

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState("");
  useEffect(() => {
    axios
      .get(`/users/cart`)
      .then((res) => setCart(res.data))
      .catch((err) => console.log(err));
  }, [cartOpen]);

  useEffect(() => {
    var filterData = cartdata.filter(
      (item, index, self) =>
        index ===
        self.findIndex((obj) => obj.id === item.id && obj.name === item.name)
    );
    setCartData(filterData);
  }, [cartdata.length]);

  //////////////////////////  grant total 💰💰💰///////////
  useEffect(() => {
    let sum = cart.reduce((acc, item) => acc + item.price, 0);
    setTotal(sum);
  }, [cart]);

  function removeItem(id) {
    const result = cartdata.filter((item) => item.id !== id);
    setCart(result);
    axios
      .delete(`/users/cart?productId=${id}`)
      .then((res) => setCart(res.data.cart))
      .catch((err) => console.log(err));
  }

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
            "cart-item-show-container " + (cart.length === 0 && "active-cart")
          }
        >
          {cart.length === 0 ? (
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
              {cart.map((item, index) => (
                <div className="shop-cart-item" key={index}>
                  <CartItem
                    image={item.image}
                    name={item.title}
                    cartid={item._id}
                    amount={item.price}
                    setGrantTotal={setGrantTotal}
                    removeItem={removeItem}
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
              <div className="grant-total">${total}</div>
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
