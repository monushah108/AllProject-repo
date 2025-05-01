import { createContext, useState } from "react";

export const PokemonContext = createContext();

export function PokemonFilterData({ children }) {
  const [PokemonType, setPokemonType] = useState('All');
  

  return (
    <PokemonContext.Provider value={[PokemonType, setPokemonType]}>
      {children}
    </PokemonContext.Provider>
  );
}
