import React from "react";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "red }}>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
