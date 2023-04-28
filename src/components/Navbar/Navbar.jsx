import { React, useState } from "react";
import "./Navbar.scss";
import SearchBox from "../SearchBox/SearchBox";

const Navbar = (props) => {
  const { handleInput, searchTerm, setAcidic, setClassic, setAbv } = props;

  return (
    <div className="navbar">
      <h1 className="navbar__heading">Search for beer</h1>
      <SearchBox handleInput={handleInput} searchTerms={searchTerm} />

      <label>
        High ABV (more than 6%)
        <input type="checkbox" value="abv" onChange={setAbv}></input>
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

// if (
//   event.target.checked == true &&
//   (checkedValues.highAbv == false) &
//     (checkedValues.classic == false) &
//     (checkedValues.acidic == false)
// ) {
//   setCheckedValues(checkedValues.highAbv == true);
//   setBeerSelection(filteredAbv);
// } else if (
//   event.target.checked == false &&
//   (checkedValues.highAbv == true) &
//     (checkedValues.classic == false) &
//     (checkedValues.acidic == false)
// ) {
//   setCheckedValues(checkedValues.highAbv == false);
//   setBeerSelection(beers);
// }
