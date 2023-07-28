import React, { useContext, useState } from "react";
import "../../../style/adminLogpage.css";
import { AdmineData } from "../../../asset/data/Admin/AdmineData";
import { useNavigate } from "react-router-dom";
import MyContext from "../../../components/Mycontext/Mycontext";
function AdminLog() {
  //////////////////////// Contedt 😒😒//////////
  const { setCurrentAdmin, setIsAdmineLogin } = useContext(MyContext);
  ///////////////////////////////////////////////

  const navigate = useNavigate();
  const [adminName, setAdminName] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  /////////////////// validating the admin //////////
  function validAdmine() {
    const currentAdmin = AdmineData.filter(
      (item) =>
        item.username === adminName &&
        Number(item.password) === Number(adminPassword)
    );

    if (currentAdmin.length === 1) {
      setCurrentAdmin(currentAdmin[0].username);
      setIsAdmineLogin(true);
      navigate("/admin");
    } else {
      alert("incorrect username or password");
    }
  }
  return (
    <>
      <div className="AdminLogPage-body">
        <div className="AdminLogPage-content">
          <div className="AdminLogPage-logo">
            <div className="Adminlogin-logo">
              <img
                alt=""
                src="https://assets.turbologo.com/blog/en/2020/03/19084544/monogram-logo-black-958x575.png"
              />
            </div>
          </div>
          <div className="AdminLogPage-form">
            <form>
              <label>Username :</label>
              <input
                type="text"
                onChange={(e) => setAdminName(e.target.value)}
              />
              <label>Password :</label>
              <input
                type="text"
                onChange={(e) => setAdminPassword(e.target.value)}
              />
              <button onClick={() => validAdmine()}>Sign in</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLog;
