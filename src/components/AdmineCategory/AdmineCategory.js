import React, { useContext, useEffect } from "react";
// import { shopcardData } from "../../asset/data/shopCard/ShopData";
import { useState } from "react";
import AdmineCards from "../adminCards/AdmineCards";
import { useParams } from "react-router-dom";
import MyContext from "../Mycontext/Mycontext";

function AdmineCategory() {
  const prdctId = useParams();

  ////////////////// context 😍 //////////////

  const { orgData, setOrgData } = useContext(MyContext);

  useEffect(() => {
    const filteredDarta = orgData.filter(
      (item) => item.categorie === prdctId.id
    );
    setAdminCard(filteredDarta);
  }, [prdctId.id, orgData]);

  ///////////////////// filter function ☝️ ////////////

  const filteredDarta = orgData.filter((item) => item.categorie === prdctId.id);
  const [adminCard, setAdminCard] = useState(filteredDarta);
  function removeItem(id) {
    const filtered = adminCard.filter((item) => item.id !== id);
    const allfilter = orgData.filter((item) => item.id !== id);
    setAdminCard(filtered);
    console.log(filtered);
    setOrgData(allfilter);
  }

  return (
    <>
      <div className="admin-prdct-content">
        {adminCard.map((item) => (
          <span key={item.id}>
            <AdmineCards
              image={item.image}
              name={item.name}
              number={item.id}
              amount={item.amount}
              removeItem={removeItem}
            />
          </span>
        ))}
      </div>
    </>
  );
}

export default AdmineCategory;
