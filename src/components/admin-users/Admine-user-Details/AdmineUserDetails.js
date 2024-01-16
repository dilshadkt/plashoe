import React, { useEffect, useState } from "react";
import "../../../style/admiUserDeatils.css";
import { useParams } from "react-router-dom";
import axios from "../../../config/AxiosConfig";

function AdmineUserDetails() {
  const { userId } = useParams();
  const [UserData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get(`/admine/user/${userId}`)
      .then((res) => setUserData(res.data.data));
  }, [userId]);

  return UserData === "" ? (
    <>
      <div>shimmer</div>
    </>
  ) : (
    <>
      <div className="adminUser-details-content">
        <div className="user-detail-content">
          <div className="user-details-log">
            <div className="logo-container">
              <img
                alt=""
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE85hRxY6RrYvL8hhco7qmc3NnyMx_picyr9baG_MZmA&s"
              />
            </div>
          </div>
          <div className="userDetails-form">
            <form>
              <label>Full Name :</label>
              <input type="text" value={UserData.username} disabled />
              <label>Address :</label>
              <input type="text" value={UserData.email} disabled />
              <label>Mobile :</label>
              <input type="number" value={UserData.password} disabled />
            </form>
          </div>
          <hr />

          <div className="admin-user-order-details">
            <span>Order :</span>
            <div className="user-order-list">
              <p>{UserData.username}</p>
              <p>{UserData.username}</p>
            </div>

            <div className="user-order-total">
              <p>Total :</p>
              <h4>${UserData.username}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdmineUserDetails;
