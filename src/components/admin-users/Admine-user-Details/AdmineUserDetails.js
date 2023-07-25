import React from "react";
import "../../../style/admiUserDeatils.css";
import { useContext } from "react";
import MyContext from "../../Mycontext/Mycontext";
import { useParams } from "react-router-dom";

function AdmineUserDetails() {
  const userId = useParams();
  const { UserData } = useContext(MyContext);
  const filteredUser = UserData.filter(
    (item) => item.id === Number(userId.userId)
  );
  console.log(filteredUser);
  return (
    <>
      <div className="adminUser-details-content">
        <div className="user-detail-content">
          <div className="user-details-log">
            <div className="logo-container">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE85hRxY6RrYvL8hhco7qmc3NnyMx_picyr9baG_MZmA&s" />
            </div>
          </div>
          <div className="userDetails-form">
            <form>
              <label>Full Name :</label>
              <input type="text" value={filteredUser[0].name} disabled />
              <label>Address :</label>
              <input type="text" value={filteredUser[0].address} disabled />
              <label>Mobile :</label>
              <input type="number" value={filteredUser[0].mobile} disabled />
            </form>
          </div>
          <hr />

          <div className="admin-user-order-details">
            <span>Order :</span>
            <div className="user-order-list">
              <p>{filteredUser[0].order}</p>
              <p>{filteredUser[0].quantity}</p>
            </div>

            <div className="user-order-total">
              <p>Total :</p>
              <h4>${filteredUser[0].total}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdmineUserDetails;
