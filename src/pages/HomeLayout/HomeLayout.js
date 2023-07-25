import React from "react";
import Navbar from "../Home/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Home/footer/Footer";

function HomeLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomeLayout;
