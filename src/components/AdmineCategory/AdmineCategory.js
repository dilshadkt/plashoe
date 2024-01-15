import React, { useEffect } from "react";
// import { shopcardData } from "../../asset/data/shopCard/ShopData";
import { useState } from "react";
import AdmineCards from "../adminCards/AdmineCards";
import { useParams } from "react-router-dom";
// import MyContext from "../Mycontext/Mycontext";
import axios from "axios";

function AdmineCategory() {
  const prdctId = useParams();

  ////////////////// context 😍 //////////////

  // const { orgData, setOrgData } = useContext(MyContext);
  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/admine/products?category=${prdctId.id}`)
      .then((res) => setShoes(res.data.data))
      .catch((err) => console.log(err));
  }, [prdctId.id]);

  ///////////////////// filter function ☝️ ////////////
  function removeItem(id) {
    console.log();
    const filtered = shoes.filter((item) => item._id !== id);
    setShoes(filtered);
    axios
      .delete(`http://localhost:8080/admine/products?id=${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="admin-prdct-content">
        {shoes.length === 0 ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Loading ....... 🚀🚀🚀</h1>
          </div>
        ) : (
          <>
            {shoes.map((item) => (
              <span key={item._id}>
                <AdmineCards
                  removeItem={removeItem}
                  image={item.image}
                  name={item.title}
                  number={item._id}
                  amount={item.price}
                />
              </span>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default AdmineCategory;
