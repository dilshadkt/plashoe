import React, { useState } from "react";
import "../../style/browserShoe.css";
import DescriptionShoe from "../description/DescriptionShoe";

import RelatedShoe from "../RelatedShoe/RelatedShoe";
import CountButton from "../count-btn/CountButton";
import { shopcardData } from "../../asset/data/shopCard/ShopData";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../Mycontext/Mycontext";

function BrowsShoe({ qauntity, setQauntity, setCartData, cartdata }) {
  const id = useParams();
  const { isLogin } = useContext(MyContext);
  const filter = shopcardData.filter(
    (item) => item.id.toString() === id.noid.toString()
  );
  console.log(filter);
  const [shops, setShops] = useState(filter[0]);

  ////////////// related shoes /////////////

  const relatedCategorie = shops.categorie;
  const reletedData = shopcardData.filter(
    (item) => item.categorie === relatedCategorie
  );

  function addtoCart() {
    setCartData((prev) => [
      ...prev,
      {
        image: `${shops.image}`,
        name: `${shops.name}`,
        id: `${shops.id}`,
        amount: `${shops.amount}`,
      },
    ]);
  }
  // console.log(cartdata);

  return (
    <>
      <div className="Brows-shoe-contianer">
        <div className="Brows-shoe-content">
          <div className="Brows-shoe-body">
            <div className="Brows-shoe-top">
              <div className="Brows-shoe-body-top">
                <img src={shops.image} alt="" />
              </div>
              <div className="Brows-shoe-body-top browse-payment">
                <div className=" browse-payment-content">
                  <div className="top-caption">{shops.categorie}, Sneaker</div>
                  <div className="top-head">{shops.name}</div>
                  <div className="top-amount">
                    <span>${shops.amount}</span> & Free Shipping
                  </div>
                  <div className="browse-about-section">
                    <p>
                      Auctor eros suspendisse tellus venenatis sodales purus non
                      pellentesque amet, nunc sit eu, enim fringilla egestas
                      pulvinar odio feugiat consectetur egestas magna pharetra
                      cursus risus, lectus enim eget eu et lobortis faucibus.
                    </p>
                  </div>
                  <div className="shoe-quantity">
                    <CountButton
                      qauntity={qauntity}
                      setQauntity={setQauntity}
                    />
                    <div className="shoe-addcart-container">
                      <button
                        onClick={() => {
                          isLogin ? addtoCart() : alert("please login ");
                          // console.log("hello");
                        }}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                  <hr />
                  <div className="shoe-categories">
                    Categories: Men, Sneaker
                  </div>
                  <div className="shoe-browser-payment-card">
                    <div className="shoe-browser-payment-card-img">
                      <img
                        alt="ok"
                        src="https://websitedemos.net/recycled-shoe-store/wp-content/uploads/sites/983/2021/11/payment-icons.png"
                      />
                    </div>
                    <div className="garanteed-text">
                      Guaranteed Safe Checkout
                    </div>
                  </div>
                  <div className="sale-tag">Sale!</div>
                </div>
              </div>
            </div>
            <section className="review-section">
              <hr />

              <div className="review-btn">
                <button>Description</button>
                <button>Reviews (0)</button>
              </div>

              <DescriptionShoe />
              <div className="related-prdct-head">Related products</div>
              <div className="brows-related-shoes">
                {reletedData.map((item) => (
                  <RelatedShoe
                    image={item.image}
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    number={item.id}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrowsShoe;
