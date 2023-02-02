import { createSlice } from '@reduxjs/toolkit'
import getPokemons from '../../helpers/getPokemons';

const initialState = {
  list: [],
  pokedex: [],
  loaded: false,
  error: false,
  message: null,
  pokemonInfo: null,
  showInfo: false
}

export const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    getListPokemons: async (state) => {
      const { data, message, error } = await getPokemons(150);
      return { ...state, list: data || [], message, error, loaded: data ? true : false }
    },
    addPokemonToPokedex: (state, action) => {
      const pokedex = [...state.pokedex, action.payload];
      return { ...state, pokedex }
    },
    setPokemonInfo: (state, action) =>
      ({ ...state, pokemonInfo: action.payload, showInfo: true }),
    hidePokemonInfo: (state) =>
      ({ ...state, pokemonInfo: null, showInfo: false })
  }
})

export const { getListPokemons, addPokemonToPokedex, setPokemonInfo, hidePokemonInfo } = pokemonSlice.actions

export default pokemonSlice.reducer