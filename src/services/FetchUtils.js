export async function getPokemon(searchFilter) {
  const rawResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151${searchFilter}`);
  const data = await rawResponse.json();
  console.log(data);

  return data;
}
