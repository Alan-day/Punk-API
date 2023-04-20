import "./App.scss";
import CardList from "./components/CardList/CardList";
import Navbar from "./components/Navbar/Navbar";
import beers from "./data/beers";
function App() {
  return (
    <div className="App">
      <Navbar />
      <CardList />
    </div>
  );
}

export default App;
