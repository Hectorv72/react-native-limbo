import { createSlice } from '@reduxjs/toolkit'

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
    setListPokemons: (state, action) => {
      return ({ ...state, ...action.payload })
    },
    addPokemonToPokedex: (state, action) => {
      const pokedex = [...state.pokedex, action.payload];
      return ({ ...state, pokedex })
    },
    setPokemonInfo: (state, action) =>
      ({ ...state, pokemonInfo: action.payload, showInfo: true }),
    hidePokemonInfo: (state) =>
      ({ ...state, pokemonInfo: null, showInfo: false })
  }
})

export const { setListPokemons, addPokemonToPokedex, setPokemonInfo, hidePokemonInfo } = pokemonSlice.actions

export default pokemonSlice.reducer