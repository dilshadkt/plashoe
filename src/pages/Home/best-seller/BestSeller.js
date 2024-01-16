import React, { useEffect, useState } from "react";
import "../../../style/bestseller.css";
import ShoeCard from "../../../components/cards/ShoeCard";
import axios from "../../../config/AxiosConfig";

function BestSeller({ staus }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`/admine/products?category=men`)
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="shop-container">
        <div className="shop-content">
          <div className="shop-header">
            <h5>{staus} </h5>
            <div className="vewAll">
              <span>VIEW ALL BEST SELLERS</span>
              <div className="view-line"></div>
            </div>
          </div>
          <div className="shop-cards">
            {data.length !== 0 ? (
              <>
                {data.map((item) => (
                  <div className="shop-card-item" key={item._id}>
                    <ShoeCard
                      image={item.image}
                      name={item.title}
                      number={item._id}
                      amnt={item.price}
                    />
                  </div>
                ))}
              </>
            ) : (
              <>shimmer</>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default BestSeller;
