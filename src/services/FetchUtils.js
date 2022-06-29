export async function getPokemon(searchFilter) {
  const rawResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchFilter}`);
  const data = await rawResponse.json();

  return data;
}
