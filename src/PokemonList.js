
export default function PokemonList({ pokemon }) {
  return (
    <div className="edit">

      <h1>Pokemon List</h1>
      {
        !pokemon.length ? 
          <div>{pokemon.name}</div> : 
          pokemon.map(({ name, url }, i) => <div key={pokemon + i}>
            <a href={url}>
              <h2>{name}</h2>
            </a>
          </div>)
      }
    </div>
  );
}