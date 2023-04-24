import "./App.scss";
import CardList from "./components/CardList/CardList";
import ExploreBeers from "./components/ExploreBeers/ExploreBeers";
import Navbar from "./components/Navbar/Navbar";
import beers from "./data/beers";
function App() {
  return (
    <div className="App">
      <section className="explore">
        <Navbar />
        <h2 className="explore__heading">Explore Beers</h2>
        <ExploreBeers beerList={beers} />
      </section>
    </div>
  );
}

export default App;
