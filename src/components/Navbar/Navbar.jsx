import React from "react";
import "./Navbar.scss";
import SearchBox from "../SearchBox/SearchBox";

const Navbar = (props) => {
  const { beersArray } = props;

  
  return (
    <div className="navbar">
      <SearchBox />
    </div>
  );
};

export default Navbar;
