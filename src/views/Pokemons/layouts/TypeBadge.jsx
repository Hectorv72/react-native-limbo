import { Text, View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import React from 'react'
import PokemonTypeColor from '../helpers/PokemonTypeColor'

const TypeBadge = ({ name }) => {
  return (
    <View style={[styles.container, { backgroundColor: PokemonTypeColor(name) }]}>
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

export default TypeBadge

const styles = ScaledSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: '6@s',
    backgroundColor: 'red',
    borderRadius: '8@s',
    borderColor: 'rgba(255,255,255,0.8)',
    borderWidth: '1@s'
  },
  text: {
    fontSize: '9@s',
    color: 'rgb(255,255,255)'
  }
})