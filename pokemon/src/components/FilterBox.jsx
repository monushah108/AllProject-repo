import React, { useContext } from 'react';
import { PokemonContext } from '../contexts/PokemonFilter';
import { ThemeContext } from '../contexts/Theme';

export default function FilterBox({ value }) {
  const [PokemonType, setPokemonType] = useContext(PokemonContext);
    const [isDark, setIsDark] = useContext(ThemeContext);
  const handleChange = (e) => {
    setPokemonType(e.target.value);
  };
  

  return (
    <div className="flex justify-end md:mr-10">
      <select
        className={`shadow rounded px-10 py-3 font-medium font-rubika ${isDark && 'dark:bg-gray-900 text-white'} `}
        value={PokemonType}
        onChange={handleChange}
      >
        <option value="All">All</option>
        {value?.map((type, i) => (
          <option value={type} key={i}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}
