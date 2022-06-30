import { useEffect, useState } from 'react';
import { getPokemon } from './services/FetchUtils';
import PokemonList from './PokemonList';

export default function PokemonSearch() {
  const [pokemon, setPokemon] = useState([]);
  const [pokeQuery, setPokeQuery] = useState('');


  useEffect(() => {
    load();
  }, []);

  async function load() {
    const { results } = await getPokemon(pokeQuery);
    setPokemon(results);
  }
  async function loadPokeSearch() {
    const poke = await getPokemon(pokeQuery);
    setPokemon(poke);
  } 
  
  async function pokeHandleSearch(e) {
    e.preventDefault();
    loadPokeSearch();
  } 
  return (
    <div>
      <form className='pokemon' onSubmit={pokeHandleSearch}>
        <h2>POKEMON</h2>
        <input value={pokeQuery} 
          onChange={e => setPokeQuery(e.target.value)}/>
        <button>SEARCH</button>
      </form>
      <PokemonList pokemon={pokemon}/>
    </div>
  );
}
  