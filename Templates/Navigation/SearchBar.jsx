import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import './SearchBar.css'
const SearchBar = () => {
    return (
        <div className="search-input">
            <input type="text" placeholder="Search"  className="inputSearch"/>
            <SearchIcon className="searchIcon" />
        </div>
    )
};

export default SearchBar;
