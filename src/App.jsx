import "./App.scss";
import { useState, useEffect } from "react";
import CardList from "./components/CardList/CardList";

import Navbar from "./components/Navbar/Navbar";
import beers from "./data/beers";
function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [abv, setAbv] = useState(false);
  const [classic, setClassic] = useState(false);
  const [acidic, setAcidic] = useState(false);
  const [beerSelection, setBeerSelection] = useState(beers);

  const getBeerSelection = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const result = await fetch(url);
    const data = await result.json();
    setBeerSelection(data);
  };
  console.log(beerSelection);

  const handleBeerSelection = (event) => {
    setBeerSelection(event.target.value);
  };

  useEffect((beerSelection) => {
    getBeerSelection(beerSelection);
  }, []); //listens to change

  const handleAbv = () => {
    if (abv == true) {
      setAbv(false);
    } else {
      setAbv(true);
    }
  };

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBeers = beerSelection.filter((beer) => {
    const beerToLower = beer.name.toLowerCase();

    return beerToLower.includes(searchTerm);
  });

  return (
    <div className="App">
      <section className="explore">
        <Navbar
          searchTerm={searchTerm}
          handleInput={handleInput}
          setAbv={handleAbv}
        />
        <h2 className="explore__heading">Explore Beers</h2>

        <CardList beerCards={filteredBeers} onChange={handleBeerSelection} />
      </section>
    </div>
  );
}

export default App;
