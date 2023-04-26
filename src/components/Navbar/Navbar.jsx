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
        filter 1 <input type="checkbox" onChange={setAbv}></input>
      </label>
      <label>
        filter 2<input type="checkbox" onChange={setClassic}></input>
      </label>

      <label>
        filter 3 <input type="checkbox" onChange={setAcidic}></input>
      </label>
    </div> // High ABV(>6.0%) Classic Range Acidic(ph < 4)
  );
};

export default Navbar;
