import { View, FlatList } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import React from 'react'
import PokemonCard from './PokemonCard';
import { HandLoader } from '../../../components/LottieLoaders';

const ListPokemons = ({ pokemons, loadMore, limitLoads }) => {
  const renderItem = ({ item }) => <PokemonCard data={item} />

  const handleLoadMorePokemons = () => {
    loadMore(limitLoads, pokemons.length)
  }

  return (
    pokemons
      ?
      <FlatList
        onEndReached={handleLoadMorePokemons}
        onEndReachedThreshold={0.1}
        style={styles.container} numColumns={3}
        contentContainerStyle={styles.content}
        data={pokemons}
        renderItem={renderItem}
      />
      : <View style={styles.center}><HandLoader width={150} height={150} /></View>
  )
}

export default ListPokemons

const styles = ScaledSheet.create({
  container: {
    margin: '5@s',
    alignSelf: 'center'
  },
  center: {
    alignSelf: 'center',
  },
  content: {
    alignItems: 'flex-start',
  }
})