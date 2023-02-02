import { ScaledSheet } from 'react-native-size-matters'
import { Text, View } from 'react-native'
import React from 'react'

const Home = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Homepage</Text>
    </View>
  )
}

export default Home

const styles = ScaledSheet.create({
  container: {
    // paddingTop: Constants.statusBarHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '18@s'
  }
});
