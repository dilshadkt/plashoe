import React from "react";
import { useContext } from "react";
import MyContext from "../../../components/Mycontext/Mycontext";
import AdmineCards from "../../../components/adminCards/AdmineCards";
function AdmineAll() {
  ////////////////// context 😍 //////////////

  const { orgData, setOrgData } = useContext(MyContext);

  ///////////////////////////////////////////////////

  function removeItem(id) {
    const allfilter = orgData.filter((item) => item.id !== id);

    setOrgData(allfilter);
  }

  return (
    <>
      <div className="admin-prdct-content">
        {orgData.map((item) => (
          <span key={item.key}>
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

export default AdmineAll;
