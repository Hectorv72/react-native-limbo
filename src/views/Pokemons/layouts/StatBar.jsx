import { Text, View } from 'react-native'
import React from 'react'
import { Bar } from 'react-native-progress';
import { ScaledSheet, scale } from 'react-native-size-matters'

const StatBar = ({ name, value }) => {
  return (
    <View style={styles.container}>
      <Text>{name}:</Text>
      <Bar animated={false} progress={value} width={scale(150)} color='green' />
    </View>
  )
}

export default StatBar

const styles = ScaledSheet.create({
  container: {
    marginBottom: '5@s'
  }
})