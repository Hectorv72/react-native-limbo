export default async (limit = 100, offset = 0) => {
  const api = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
  let message, response, data = null;
  let error = false;

  try {
    response = await fetch(api);
    data = await response.json();
    error = !response.ok
  } catch (error) {
    message = 'Ocurrió un error, por favor vuelva a intentarlo más tarde';
    error = true
  }

  return ({ message, response, data, error })
}