import React from "react";
import Navbar from "./Navbar";
import Navigate from "./Navigate";
import { Outlet } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Header;
