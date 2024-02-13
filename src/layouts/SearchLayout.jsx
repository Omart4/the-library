import React from "react"
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const SearchLayout = (props) => {
  return (
    <div className="search-layout">
      <Navbar/>
      <Outlet/>
    </div>
  )
};

export default SearchLayout;
