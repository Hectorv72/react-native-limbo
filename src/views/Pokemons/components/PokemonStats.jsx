import { View } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import React from 'react'
import StatBar from '../layouts/StatBar'

const PokemonStats = ({ stats }) => {
  return (
    <View style={styles.container}>
      {
        stats.map(
          ({ base_stat, stat }, index) => <StatBar key={`pokemon-stat-${index}`} name={stat.name} value={base_stat / 100} />
        )
      }
    </View>
  )
}

export default PokemonStats

const styles = ScaledSheet.create({
  container: {
    marginTop: '20@s'
  }
})