import React, { useEffect, useState } from "react";
import AdmineCards from "../../../components/adminCards/AdmineCards";
import axios from "../../../config/AxiosConfig";

function AdmineAll() {
  ////////////////// context 😍 //////////////

  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    axios.get("/admine/products").then((res) => setShoes(res.data.data));
  }, []);

  ///////////////////////////////////////////////////

  function removeItem(id) {
    const allfilter = shoes.filter((item) => item._id !== id);
    setShoes(allfilter);
    axios
      .delete(`/admine/products?id=${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div className="admin-prdct-content">
        {shoes.map((item) => (
          <span key={item._id}>
            <AdmineCards
              image={item.image}
              name={item.title}
              number={item._id}
              amount={item.price}
              removeItem={removeItem}
            />
          </span>
        ))}
      </div>
    </>
  );
}

export default AdmineAll;
