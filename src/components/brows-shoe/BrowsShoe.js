import React, { useEffect, useState } from "react";
import "../../style/browserShoe.css";
import DescriptionShoe from "../description/DescriptionShoe";
import RelatedShoe from "../RelatedShoe/RelatedShoe";
import CountButton from "../count-btn/CountButton";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../Mycontext/Mycontext";

import { productInstance, userInstance } from "../../axios/AxiosInstance";

function BrowsShoe({ qauntity, setQauntity, setCartData }) {
  const id = useParams();
  const [product, setProduct] = useState([]);
  const [relatedPrduct, setRelatedPrduct] = useState([]);

  useEffect(() => {
    productInstance.get(`/${id.noid}`).then((res) => setProduct(res.data.data));
  }, []);
  useEffect(() => {
    productInstance
      .get(`?category=${product.category}`)
      .then((res) => setRelatedPrduct(res.data.data));
  }, [product]);
  const { isLogin, setisBtnClick, isbtnClick } = useContext(MyContext);

  function addtoCart() {
    const productId = id.noid;

    userInstance
      .post(`/cart`, {
        productId,
      })
      .then((res) => setisBtnClick(!isbtnClick))
      .catch((res) => console.log(res));
    setCartData((prev) => [
      ...prev,
      {
        image: `${product.image}`,
        name: `${product.title}`,
        id: `${product._id}`,
        amount: `${product.price}`,
      },
    ]);

    setQauntity(1);
  }

  return (
    <>
      <div className="Brows-shoe-contianer">
        <div className="Brows-shoe-content">
          <div className="Brows-shoe-body">
            <div className="Brows-shoe-top">
              <div className="Brows-shoe-body-top">
                <img src={product.image} alt="" />
              </div>
              <div className="Brows-shoe-body-top browse-payment">
                <div className=" browse-payment-content">
                  <div className="top-caption">{product.category}, Sneaker</div>
                  <div className="top-head">{product.title}</div>
                  <div className="top-amount">
                    <span>${product.price}</span> & Free Shipping
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
                {relatedPrduct.map((item) => (
                  <RelatedShoe
                    image={item.image}
                    key={item._id}
                    name={item.title}
                    amount={item.price}
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
