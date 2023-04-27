import "./App.scss";
import { useState, useEffect } from "react";
import CardList from "./components/CardList/CardList";

import Navbar from "./components/Navbar/Navbar";

function App() {
  const [beers, setBeers] = useState([]);
  const [checkedValues, setCheckedValues] = useState({
    highAbv: false,
    classic: false,
    acidic: false,
  });

  const [searchTerm, setSearchTerm] = useState("");

  const [beerSelection, setBeerSelection] = useState(beers);

  const getBeerSelection = async () => {
    const url = "https://api.punkapi.com/v2/beers?page=1&per_page=80";
    const result = await fetch(url);
    const data = await result.json();
    setBeers(data);
    setBeerSelection(data);
  };

  useEffect((beerSelection) => {
    getBeerSelection(beerSelection);
  }, []); //listens to change

  const getCheckedValues = (event) => {
    if (event.target.checked) {
      if (event.target.value == "abv") {
        setCheckedValues.highAbv(true);
      }
      if (event.target.value == "classic") {
        setCheckedValues.classic(true);
      }
      if (event.target.value == "acidic") {
        setCheckedValues.acidic(true);
      }
    } else {
      if (event.target.value == "abv") {
        setCheckedValues.highAbv(false);
      }
      if (event.target.value == "classic") {
        setCheckedValues.classic(false);
      }
      if (event.target.value == "acidic") {
        setCheckedValues.acidic(false);
      }
    }
  };
  const handleAbv = (event) => {
    if (event.target.value == "abv" && event.target.checked == true) {
      setBeerSelection(filteredAbv);
    } else if (event.target.value == "abv" && event.target.checked == false) {
      setBeerSelection(beers);
    }
  };

  const handleClassic = (event) => {
    if (event.target.value == "classic" && event.target.checked == true) {
      setBeerSelection(filteredClassicRange);
    } else if (
      event.target.value == "classic" &&
      event.target.checked == false
    ) {
      setBeerSelection(beers);
    }
  };

  const handleAcidic = (event) => {
    if (event.target.value == "acidic" && event.target.checked == true) {
      setBeerSelection(filteredAcidic);
    } else if (
      event.target.value == "acidic" &&
      event.target.checked == false
    ) {
      setBeerSelection(beers);
    }
  };

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBeers = beerSelection.filter((beer) => {
    const beerToLower = beer.name.toLowerCase();

    return beerToLower.includes(searchTerm);
  });

  const filteredAbv = beerSelection.filter((beer) => {
    const beerToLower = beer.name.toLowerCase();

    return beerToLower.includes(searchTerm) && beer.abv > 6;
  });

  const filteredClassicRange = beerSelection.filter((beer) => {
    const beerToLower = beer.name.toLowerCase();
    let newBeer = beer.first_brewed.split("/");

    return beerToLower.includes(searchTerm) && newBeer[1] < 2010;
  });

  const filteredAcidic = beerSelection.filter((beer) => {
    const beerToLower = beer.name.toLowerCase();

    return beerToLower.includes(searchTerm) && beer.ph < 4 && beer.ph != null;
  });

  return (
    
    <div className="App">
     
      <section className="explore_items">
        <Navbar
          searchTerm={searchTerm}
          handleInput={handleInput}
          setAbv={handleAbv}
          setClassic={handleClassic}
          setAcidic={handleAcidic}
        />

        <h2 className="app__heading">Explore Beers</h2>

        <CardList beerCards={filteredBeers} />
      </section>
    </div>
  );
}

export default App;
