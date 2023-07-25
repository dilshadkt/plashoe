import React from "react";
import "../../../style/admineProduct.css";
import { NavLink, Outlet } from "react-router-dom";

function AdmineProduct() {
  return (
    <>
      <div className="admin-prdct-container">
        <div className="admin-prdct-nav">
          <div className="admin-prdct-nav-container">
            <ul className="admin-nav-category">
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return isActive ? { color: "black" } : {};
                  }}
                  to={"Men"}
                >
                  Men
                </NavLink>{" "}
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return isActive ? { color: "black" } : {};
                  }}
                  to={"Women"}
                >
                  Women
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={({ isActive }) => {
                    return isActive ? { color: "red" } : {};
                  }}
                  to={""}
                >
                  All
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="admin-prdct-nav-container">
            <span
              style={{ color: "blue", fontWeight: "600", cursor: "pointer" }}
            >
              <NavLink to={"add"}>➕</NavLink>
            </span>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}

export default AdmineProduct;
