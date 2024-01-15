import FormatListBulletedSharpIcon from "@mui/icons-material/FormatListBulletedSharp";
import ViewStreamSharpIcon from "@mui/icons-material/ViewStreamSharp";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../style/contentCard.css";
import ShoeCard from "../cards/ShoeCard";

function ContentCard() {
  const shophead = useParams();

  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/admine/products?category=${
          shophead.id === "Collection" ? "all" : shophead.id
        }`
      )
      .then((res) => setProduct(res.data.data));
  }, [shophead.id]);

  return (
    <>
      <div className="content-card-container">
        <div className="content-container-body">
          <div className="content-container-body-part">
            <div className="content-container-body-part-head">
              <span>{shophead.id}</span>
            </div>
            <div className="content-container-body-part-bar">
              <div className="content-container-body-part-bar-items">
                <div className="content-container-filter">FILTER SHOES</div>
                <div className="content-container-showall">
                  Showing all {product.length} results
                </div>
              </div>
              <div className="content-container-body-part-bar-items bar-item-right">
                <div className="content-container-sort">Defaul Sorting</div>
                <div className="content-container-list">
                  <span>
                    <ViewStreamSharpIcon />
                  </span>
                  <FormatListBulletedSharpIcon />
                </div>
              </div>
            </div>
            <div className="content-container-shoe-cards">
              {product.map((item) => (
                <div className="content-container-shoe-card" key={item.id}>
                  <ShoeCard
                    image={item.image}
                    name={item.title}
                    number={item._id}
                    amnt={item.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentCard;
