import { useState, useEffect } from "react";

export function PokemonData() {
    const [Data, setData] = useState([]);
    const [Error, setError] = useState(false);

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
                const json = await res.json();

                const details = await Promise.all(
                    json.results.map(async (pokemon) => {
                        const res = await fetch(pokemon.url);
                        const data = await res.json();

                        return {
                            name: data.name,
                            image: data.sprites.front_default,
                            types: data.types.map(t => t.type.name),
                            id: data.id
                        };
                    })
                );

                setData(details);
            } catch (err) {
                setError(true);
            }
        }

        fetchPokemon();
    }, []);

    return [Data, Error];
}
