import { ScaledSheet, scale } from 'react-native-size-matters'
import { View, Text } from 'react-native'
import React from 'react'
import Lottie from 'easy-lottie-react-native'
import animation from '../../assets/animations/lottie/react-native-logo.json'

const Home = () => {
  return (
    <View style={styles.container}>
      <Lottie
        source={animation}
        style={{ height: scale(250) }}
      />
      <Text style={styles.title}>Welcome</Text>
    </View>
  )
}

export default Home

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '20@s'
  }
});
