import { React, useState } from "react";
import "./Navbar.scss";
import SearchBox from "../SearchBox/SearchBox";

const Navbar = (props) => {
  const { handleInput, searchTerm, setAcidic, setClassic, setAbv } = props;

  return (
    <div className="navbar">
      <h1>Search for beer</h1>
      <SearchBox handleInput={handleInput} searchTerms={searchTerm} />

      <label>
        High ABV <input type="checkbox" value="abv" onChange={setAbv}></input>
      </label>
      <label>
        Classic Range
        <input type="checkbox" value="classic" onChange={setClassic}></input>
      </label>

      <label>
        Acidic
        <input type="checkbox" value="acidic" onChange={setAcidic}></input>
      </label>
    </div>
  );
};

export default Navbar;
