import { ScaledSheet, scale } from 'react-native-size-matters'
import { View, Dimensions } from 'react-native'
import React from 'react'
import Lottie from 'easy-lottie-react-native'
import animation from '../../assets/animations/lottie/saitamask.json'

const Home = () => {
  const dimension = Dimensions.get('window').height;
  return (
    <View style={styles.container}>
      <Lottie
        imageAssetsFolder='lottie/saitamask'
        source={animation}
        style={{ height: dimension - scale(50) }}
      />
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
    backgroundColor: 'rgb(0,0,0)'
  },
  title: {
    fontSize: '18@s'
  }
});
