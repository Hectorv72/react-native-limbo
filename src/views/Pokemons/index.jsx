import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setListPokemons } from '../../redux/slices/pokemonSlice'
import getPokemons from './helpers/getPokemons'
import { ListItem } from '@react-native-material/core'

const Pokemons = () => {
  const { list } = useSelector(state => state.pokemons)
  const dispatch = useDispatch()

  const handleGetPokemons = async () => {
    const { data, error, message } = await getPokemons(150);
    dispatch(setListPokemons({ list: data.results, error, message }))
  };

  useEffect(() => {
    handleGetPokemons();
  }, [])

  useEffect(() => {
    console.log(list)
  }, [list])

  const renderItem = ({ item }) => <ListItem title={item.name} />

  return (
    <View>
      <FlatList data={list} renderItem={renderItem} />
    </View>
  )
}

export default Pokemons

const styles = StyleSheet.create({})