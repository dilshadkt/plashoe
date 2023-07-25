import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../style/contentCard.css";
import ViewStreamSharpIcon from "@mui/icons-material/ViewStreamSharp";
import FormatListBulletedSharpIcon from "@mui/icons-material/FormatListBulletedSharp";
import { shopcardData } from "../../asset/data/shopCard/ShopData";

import ShoeCard from "../cards/ShoeCard";

function ContentCard() {
  const shophead = useParams();
  useEffect(() => {
    const filterDarta = shopcardData.filter((item) =>
      shophead.id === "Collection" ? item : item.categorie === shophead.id
    );
    setShopData(filterDarta);
  }, [shophead.id]);

  const [shopData, setShopData] = useState([]);

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
                  Showing all {shopData.length} results
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
              {shopData.map((item) => (
                <div className="content-container-shoe-card" key={item.id}>
                  <ShoeCard
                    image={item.image}
                    name={item.name}
                    number={item.id}
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
