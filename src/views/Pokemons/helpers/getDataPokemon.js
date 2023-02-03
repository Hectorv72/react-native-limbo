export default async (url = 'https://pokeapi.co/api/v2/pokemon/1', abort = new AbortController) => {
  let error, response, data = null;

  try {
    response = await fetch(url, { signal: abort.signal });
    data = await response.json();
    if (!response.ok) error = true
  } catch (error) {
    error = true;
  }

  return ({ error, response, data })
}