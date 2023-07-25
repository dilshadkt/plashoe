import React, { useContext } from "react";
import "../../../style/adminHome.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonIcon from "@mui/icons-material/Person";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PermMediaSharpIcon from "@mui/icons-material/PermMediaSharp";
import MyContext from "../../../components/Mycontext/Mycontext";

import { Link, Outlet } from "react-router-dom";
function AdminHome() {
  const { currentAdmin } = useContext(MyContext);
  return (
    <>
      <section className="admin-home-container">
        <div className="admin-home-left">
          <h3>Admin</h3>
          <Link to={"/admin"}>
            <div className="admin-left-nav">
              <div className="left-nav-content nav-content-left">
                <PersonIcon />
                <span>Users</span>
              </div>
              <div className="left-nav-content">
                <MoreVertIcon />
              </div>
            </div>
          </Link>
          <Link to={"product"}>
            <div className="admin-left-nav">
              <div className="left-nav-content nav-content-left">
                <FormatListBulletedIcon />
                <span>Products</span>
              </div>
              <div className="left-nav-content">
                <MoreVertIcon />
              </div>
            </div>
          </Link>
          <Link to={"revenue"}>
            <div className="admin-left-nav">
              <div className="left-nav-content nav-content-left">
                <PermMediaSharpIcon />
                <span>Revenue</span>
              </div>
              <div className="left-nav-content">
                <MoreVertIcon />
              </div>
            </div>
          </Link>
        </div>
        <div className="admin-home-right">
          <div className="admin-nav">
            <span>Hello,{currentAdmin} 👋</span>
          </div>

          <Outlet />
        </div>
      </section>
    </>
  );
}

export default AdminHome;
