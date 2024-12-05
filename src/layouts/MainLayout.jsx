import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="dark:bg-gray-900 bg-gray-50">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
