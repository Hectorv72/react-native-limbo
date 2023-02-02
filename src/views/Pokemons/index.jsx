import { StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setListPokemons } from '../../redux/slices/pokemonSlice'
import getPokemons from './helpers/getPokemons'
import ListPokemons from './components/ListPokemons'
import PokemonInfo from './components/PokemonInfo'

const Pokemons = () => {
  const limitLoads = 60;
  const { list } = useSelector(state => state.pokemons)
  const dispatch = useDispatch()

  const handleGetPokemons = async (limit = 50, offset = 0) => {
    const { data, error, message } = await getPokemons(limit, offset);
    dispatch(setListPokemons({ list: [...list, ...data.results], error, message }))
  };

  useEffect(() => {
    handleGetPokemons(limitLoads);
  }, [])

  return (
    <View>
      {
        list &&
        <>
          <ListPokemons pokemons={list} loadMore={handleGetPokemons} limitLoads={limitLoads} />
          <PokemonInfo />
        </>
      }
    </View>
  )
}

export default Pokemons

const styles = StyleSheet.create({})