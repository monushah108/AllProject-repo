import { useContext } from "react";
import Card from "../components/Card";
import FilterBox from "../components/FilterBox";
import Shimmer from "../components/Shimmer";
import { PokemonContext } from "../contexts/PokemonFilter";
import { PokemonData } from "../hooks/Pokemon";
import { PokemonFinderContext } from "../contexts/SearchPokemon";
import { ThemeContext } from "../contexts/Theme";

export default function Home() {
  const [Data, Error] = PokemonData();
  const [PokemonType, setPokemonType] = useContext(PokemonContext);
  const [FindPokemon, setFindPokemon] = useContext(PokemonFinderContext);
  const PokemonTypes = [...new Set(Data.map(({ types }) => types[0]))].sort();
  const [isDark, setIsDark] = useContext(ThemeContext);
  const filterPokemon = Data.filter(({ name, types }) => {
    const typeMatch =
      PokemonType === "All" ? true : types.includes(PokemonType);
    const nameMatch = name.toLowerCase().includes(FindPokemon.toLowerCase());
    return typeMatch && nameMatch;
  })


  return (
    <section className={`${isDark && 'dark:bg-gray-800 text-white'} min-h-screen`}>
      <div className={`py-10 max-w-7xl m-auto p-2  `}>

      <FilterBox value={PokemonTypes} />
      {Error ? (
        <h1 className="font-medium text-center text-lg my-10">
          Something Went Wrong!!!
        </h1>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 p-5  ">
          {Data.length ? (
            filterPokemon.map(({ id, name, image, types }) => {
              return (
                <Card
                  key={id}
                  id={id}
                  name={name}
                  image={image}
                  types={types}
                />
              );
            })
          ) : (
            <Shimmer />
          )}
        </div>
      )}
      </div>

    </section>
  );
}
