import React, { useContext, useState } from "react";
import "../../../style/adminHome.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonIcon from "@mui/icons-material/Person";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PermMediaSharpIcon from "@mui/icons-material/PermMediaSharp";
import MyContext from "../../../components/Mycontext/Mycontext";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { Link, Outlet } from "react-router-dom";
import AdmonMore from "../admineMore/AdmonMore";

function AdminHome() {
  const { currentAdmin } = useContext(MyContext);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
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
      <div onClick={() => setIsMoreOpen(true)} className="admine-more-icon">
        <DensityMediumIcon />
      </div>
      <div className={"admine-more " + (isMoreOpen ? "admin-more-active" : "")}>
        <AdmonMore setIsMoreOpen={setIsMoreOpen} />
      </div>
    </>
  );
}

export default AdminHome;
