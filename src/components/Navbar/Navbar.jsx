import { React, useState } from "react";
import "./Navbar.scss";

import SearchBox from "../SearchBox/SearchBox";

const Navbar = (props) => {
  const { handleInput, searchTerm } = props;

  return (
    <div className="navbar">
      <h1>Search for beer</h1>
      <SearchBox handleInput={handleInput} searchTerms={searchTerm} />
      <label>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
      </label>
    </div>
  );
};

export default Navbar;
