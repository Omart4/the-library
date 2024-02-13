import React from "react"
import { Link } from "react-router-dom";
import '../styles/Navbar.css'
import SearchBar from "./SearchBar";

const Navbar = (props) => {
  return (
    <nav>
      <Link to="/">The Library</Link>
      <SearchBar/>
    </nav>
  )
};

export default Navbar;
