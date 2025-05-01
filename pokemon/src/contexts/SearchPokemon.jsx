import { createContext, useState } from "react";

export const PokemonFinderContext = createContext();

export function PokemonFinder({ children }) {
  const [findPokemon, setFindPokemon] = useState("");
  return (
    <PokemonFinderContext.Provider value={[findPokemon, setFindPokemon]}>
      {children}
    </PokemonFinderContext.Provider>
  );
}
