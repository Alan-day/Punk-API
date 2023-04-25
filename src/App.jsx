import "./App.scss";
import { useState } from "react";
import CardList from "./components/CardList/CardList";

import Navbar from "./components/Navbar/Navbar";
import beers from "./data/beers";
function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBeers = beers.filter((beer) => {
    const beerToLower = beer.name.toLowerCase();

    return beerToLower.includes(searchTerm);
  });

  return (
    <div className="App">
      
      
      <section className="explore">



        <Navbar searchTerm={searchTerm} handleInput={handleInput} />
        <h2 className="explore__heading">Explore Beers</h2>

        <CardList beerCards={filteredBeers} />



      </section>
    </div>
  );
}

export default App;
