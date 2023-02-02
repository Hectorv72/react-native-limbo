import { View, FlatList } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters';
import { HandLoader } from '../../../components/LottieLoaders';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setVisibleItems } from '../../../redux/slices/pokemonSlice';
import React from 'react'
import PokemonCard from './PokemonCard';

const ListPokemons = ({ pokemons, loadMore, limitLoads }) => {
  const dispatch = useDispatch()
  const renderItem = ({ item }) => <PokemonCard data={item} />

  const handleLoadMorePokemons = () => {
    loadMore(limitLoads, pokemons.length)
  }

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 75,
    minimumViewTime: 500,
  }

  const onViewCallback = useCallback((info) => {
    const visibleItems = info.changed.filter((entry) => entry.isViewable);
    dispatch(setVisibleItems(visibleItems.map(visible => visible.item)))
  }, []
  )

  return (
    pokemons
      ?
      <FlatList
        onEndReached={handleLoadMorePokemons}
        onEndReachedThreshold={0.1}
        style={styles.container}
        numColumns={3}
        contentContainerStyle={styles.content}
        data={pokemons}
        renderItem={renderItem}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewCallback}
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