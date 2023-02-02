import { Motion } from '@legendapp/motion';
import { Image, Text, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { SimpleLoader } from '../../../components/LottieLoaders';
// import { PokemonInfoContext } from '../contexts/PokemonInfoContext';
import React, { useEffect, useState } from 'react'
import getDataPokemon from '../helpers/getDataPokemon';
import PokemonTypeColorBackground from '../helpers/PokemonTypeColorBackground';
import TypeBadge from '../layouts/TypeBadge';
import { useDispatch, useSelector } from 'react-redux';
import { addPokemonToPokedex, setPokemonInfo } from '../../../redux/slices/pokemonSlice';

const PokemonCard = ({ data }) => {
  const { pokedex } = useSelector(state => state.pokemons)
  const [info, setInfo] = useState(null);
  const dispatch = useDispatch();
  const { name, url } = data;


  const handleGetPokemonInfo = async () => {
    let pokemonInfo = pokedex.find(pokemon => pokemon.name === name);
    if (!pokemonInfo) {
      const { error, data } = await getDataPokemon(url);

      if (!error) {
        pokemonInfo = {
          ...data,
          image: data.sprites.versions['generation-v']['black-white'].animated.front_default,
          bgColor: PokemonTypeColorBackground(data.types[0].type.name),
        }
        setInfo(pokemonInfo)
        dispatch(addPokemonToPokedex(pokemonInfo))
      }
    } else {
      setInfo(pokemonInfo)
    }
  }

  useEffect(() => {
    handleGetPokemonInfo()
  }, [])

  return (
    info
      ?
      <Motion.Pressable onPress={() => dispatch(setPokemonInfo(info))} >
        <Motion.View
          style={[styles.card, { backgroundColor: info.bgColor }, styles.shadow]}
          initial={{ scale: 1 }}
          whileTap={{ scale: 1.1 }}
          transition={{
            type: "spring",
          }}
        >
          <Image resizeMode='contain' style={styles.image} source={{ uri: info.image }} />
          <Text style={styles.text}>{info.name}</Text>
          <View style={styles.slots}>
            {
              info.types.map(
                slot => <TypeBadge key={`pokemon-${info.name}-type-badge-${slot.type.name}`} name={slot.type.name} />
              )
            }
          </View>
        </Motion.View>
      </Motion.Pressable>
      :
      <View style={styles.card}>
        <SimpleLoader />
      </View>
  )
}

export default PokemonCard

const styles = ScaledSheet.create({
  card: {
    backgroundColor: '#dbdbdb',
    width: '90@s',
    height: '90@s',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: '5@s',
    borderWidth: '0.3@s',
    margin: '6@s',
    marginHorizontal: '10@s',
  },
  shadow: {
    shadowColor: '#171717',
    elevation: 8,
  },
  image: {
    width: '32@s',
    height: '32@s',
    marginBottom: '2@s',
  },
  text: {
    fontSize: '12@s',
    color: 'rgba(255,255,255,0.9)',
    marginBottom: '4@s',
  },
  slots: {
    flexDirection: 'row',
  }
})