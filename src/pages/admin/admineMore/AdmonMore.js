import React from "react";
import "../../../style/adminMore.css";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonIcon from "@mui/icons-material/Person";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PermMediaSharpIcon from "@mui/icons-material/PermMediaSharp";
import ClearIcon from "@mui/icons-material/Clear";
function AdmonMore({ setIsMoreOpen }) {
  return (
    <>
      <div className="admine-more-option-content">
        <span onClick={() => setIsMoreOpen(false)}>
          <ClearIcon />
        </span>
        <h3>Admin</h3>
        <Link to={"/admin"}>
          <div className="admin-left-nav" onClick={() => setIsMoreOpen(false)}>
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
          <div className="admin-left-nav" onClick={() => setIsMoreOpen(false)}>
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
          <div className="admin-left-nav" onClick={() => setIsMoreOpen(false)}>
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
    </>
  );
}

export default AdmonMore;
