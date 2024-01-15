import React, { useEffect, useState } from "react";
// import { useContext } from "react";
// import MyContext from "../../../components/Mycontext/Mycontext";
import AdmineCards from "../../../components/adminCards/AdmineCards";
import axios from "axios";
import { admineProductInstance } from "../../../axios/AxiosInstance";
function AdmineAll() {
  ////////////////// context 😍 //////////////

  // const { orgData, setOrgData } = useContext(MyContext);
  const [shoes, setShoes] = useState([]);
  useEffect(() => {
    console.log("hello");
    admineProductInstance.get().then((res) => setShoes(res.data.data));
  }, []);

  ///////////////////////////////////////////////////

  function removeItem(id) {
    const allfilter = shoes.filter((item) => item._id !== id);
    setShoes(allfilter);
    axios
      .delete(`http://localhost:8080/admine/products?id=${id}`)
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
