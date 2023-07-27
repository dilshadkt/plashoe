import React from "react";
import "../../../style/bestseller.css";
import { shopcardData } from "../../../asset/data/shopCard/ShopData";
import ShoeCard from "../../../components/cards/ShoeCard";

function BestSeller({ staus }) {
  const data = shopcardData;
  // const [data, setData] = useState(shopcardData);
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
            {data.map((item) => (
              <div className="shop-card-item" key={item.id}>
                <ShoeCard
                  image={item.image}
                  name={item.name}
                  number={item.id}
                  amnt={item.amount}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BestSeller;
