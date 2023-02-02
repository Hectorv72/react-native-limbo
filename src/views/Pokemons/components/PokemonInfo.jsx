import { Image, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { BottomSheet } from 'react-native-sheet';
// import { PokemonInfoContext } from '../contexts/PokemonInfoContext';
import { ScaledSheet, scale } from 'react-native-size-matters';
import PokemonStats from './PokemonStats';
import { Motion } from '@legendapp/motion';
import { useDispatch, useSelector } from 'react-redux';
import { hidePokemonInfo } from '../../../redux/slices/pokemonSlice';

const PokemonInfo = () => {
  const { pokemonInfo, showInfo } = useSelector(state => state.pokemons);
  const dispatch = useDispatch();
  const ref = useRef(null);

  useEffect(() => {
    if (showInfo) ref.current?.show();
  }, [showInfo])

  return (
    <BottomSheet ref={ref} height={scale(400)} onCloseFinish={() => dispatch(hidePokemonInfo())}>

      {
        pokemonInfo &&
        <View style={styles.container}>
          <Text style={styles.text}>{pokemonInfo.name}</Text>
          <Motion.Image
            initial={{ scale: 0.2 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring", delay: 200,
            }}
            resizeMode='contain'
            style={styles.image}
            source={{ uri: pokemonInfo.sprites.other['official-artwork'].front_default }}
          />
          <PokemonStats stats={pokemonInfo.stats} />
        </View>
      }
    </BottomSheet>
  )
}

export default PokemonInfo

const styles = ScaledSheet.create({
  container: {
    marginTop: '30@s',
    alignItems: 'center'
  },
  image: {
    width: '130@s',
    height: '130@s',
    marginTop: '20@s',
  },
  text: {
    fontSize: '18@s',
  }
})