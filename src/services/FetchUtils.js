export async function getPokemon(searchFilter) {
  const rawResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchFilter}`);
  const data = await rawResponse.json();

  return data;
}

export async function getYelp(searchFilter) {
  const rawResponse = await fetch(`https://api.yelp.com/v3/businesses/${searchFilter}`);
  const data = await rawResponse.json();
  
  return data;
}
