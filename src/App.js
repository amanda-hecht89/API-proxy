import { useEffect, useState } from 'react';
import './App.css';
import { getPokemon } from './services/FetchUtils';

function App() {

  const [pokemon, setPokemon] = useState([]);

  const [pokeQuery, setPokeQuery] = useState('');

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const { results } = await getPokemon(pokeQuery);
    setPokemon(results);
  }
  

  async function pokeHandleSearch(e) {
    e.preventDefault();
    load();
  } 





  return (
    <div className="App">
      <form className='pokemon' onSubmit={pokeHandleSearch}>
        <h2>POKEMON</h2>
        <input onChange={e => setPokeQuery(e.target.value)}/>
        <button></button>
      </form>
    </div>
  );
}
export default App;
