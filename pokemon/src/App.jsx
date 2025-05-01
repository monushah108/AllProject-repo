import "./App.css";
import Header from "./components/Header";
import { ThemeProvider } from "./contexts/Theme";
import { PokemonFilterData } from "./contexts/PokemonFilter";
import { PokemonFinder } from "./contexts/SearchPokemon";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <PokemonFinder>
        <PokemonFilterData>
          <ThemeProvider>
            <Header />
            <Home />
          </ThemeProvider>
        </PokemonFilterData>
      </PokemonFinder>
    </div>
  );
}

export default App;
