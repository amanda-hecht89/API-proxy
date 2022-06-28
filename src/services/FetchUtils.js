export async function getPokemon(searchFilter) {
  const rawResponse = await fetch(`/.netlify/functions/https://pokeapi.co/api/v2/pokemon/?limit=151=${searchFilter}`);
  const data = await rawResponse.json();

  return data;
}
