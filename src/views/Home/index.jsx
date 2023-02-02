import { ScaledSheet } from 'react-native-size-matters'
import { Text, View } from 'react-native'
import React from 'react'
import Lottie from 'easy-lottie-react-native'
import lot from '../../../assets/lottie/saitamask/data.json'

const Home = () => {

  return (
    <View style={styles.container}>
      <Lottie imageAssetsFolder='lottie/saitamask' source={lot} style={{ width: 500, height: 500 }} />
      {/* <Text style={styles.title}>Homepage</Text> */}
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
