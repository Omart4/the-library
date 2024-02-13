import React from "react"
import { Link } from "react-router-dom";
import '../styles/Home.css'
import SearchBar from "../components/SearchBar";

const Home = (props) => {
  return (
    <div className="home">
      <h1>The Library</h1>
      <SearchBar/>
        <Link to="search">SEARCH</Link>
    </div>
  )
};

export default Home;
