import React from "react"
import '../styles/SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const SearchBar = (props) => {
  return (
    <div className="search">
        <input className="search-bar" type="search" placeholder="Look up books, authors or subjects..."/>
        <button className="search-btn"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></button>
    </div>
  )
};

export default SearchBar;
