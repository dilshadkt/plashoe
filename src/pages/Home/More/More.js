import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import "../../../style/moreOption.css";
import { NavLink } from "react-router-dom";
function More({ isopenMore, setIsOpenMore }) {
  return (
    <>
      <div
        className={
          "more-option-container " + (isopenMore ? "more-option-active" : "")
        }
      >
        <div className="more-cancel-btn" onClick={() => setIsOpenMore(false)}>
          <ClearIcon />
        </div>
        <div className="more-options">
          <ul>
            <li onClick={() => setIsOpenMore(false)}>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li onClick={() => setIsOpenMore(false)}>
              <NavLink
                style={({ isActive }) => {
                  return isActive ? { color: "black" } : {};
                }}
                to={"product-category/Men"}
              >
                Men
              </NavLink>
            </li>
            <li onClick={() => setIsOpenMore(false)}>
              <NavLink
                style={({ isActive }) => {
                  return isActive ? { color: "black" } : {};
                }}
                to={"product-category/Women"}
              >
                Women
              </NavLink>
            </li>
            <li onClick={() => setIsOpenMore(false)}>
              <NavLink
                style={({ isActive }) => {
                  return isActive ? { color: "black" } : {};
                }}
                to={"look-book"}
              >
                LookBook{" "}
              </NavLink>
            </li>
            <li onClick={() => setIsOpenMore(false)}>
              <NavLink
                style={({ isActive }) => {
                  return isActive ? { color: "black" } : {};
                }}
                to={"sale"}
              >
                Sale{" "}
              </NavLink>
            </li>
            <li onClick={() => setIsOpenMore(false)}>
              <NavLink
                style={({ isActive }) => {
                  return isActive ? { color: "black" } : {};
                }}
                to={"product-category/Collection "}
              >
                Collection{" "}
              </NavLink>
            </li>
            <li onClick={() => setIsOpenMore(false)}>Story</li>
            <li onClick={() => setIsOpenMore(false)}>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default More;
