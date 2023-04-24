import { React, useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import CardList from "../CardList/CardList";

const ExploreBeers = (props) => {
  const { beerList } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedBeer = beerList.filter((beer) => {
    return beer.name.includes(searchTerm) && beer.image_url;
  });

  return (
    <>
      <SearchBox handleInput={handleInput} searchTerms={searchTerm} />
      <CardList beerList={searchedBeer} />
    </>
  );
};

export default ExploreBeers;
