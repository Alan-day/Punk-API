import React from "react";
import "./Navbar.scss";
import beers from "../../data/beers";
import SearchBox from "../SearchBox/SearchBox";
import ExploreBeers from "../ExploreBeers/ExploreBeers";
const Navbar = (props) => {
  const { beersArray } = props;

  return (
    <div className="navbar">
      <ExploreBeers beerList={beers} />
    </div>
  );
};

export default Navbar;
