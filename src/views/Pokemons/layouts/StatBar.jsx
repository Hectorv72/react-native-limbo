import { Bar } from 'react-native-progress';
import { Text, View } from 'react-native'
import { ScaledSheet, scale } from 'react-native-size-matters'
import React from 'react'

const StatBar = ({ name, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}:</Text>
      <Bar animated={false} progress={value} width={scale(200)} height={scale(4)} color='green' />
    </View>
  )
}

export default StatBar

const styles = ScaledSheet.create({
  container: {
    marginBottom: '5@s'
  },
  text: {
    fontSize: '10@s'
  }
})