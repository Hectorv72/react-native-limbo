import { ScaledSheet } from 'react-native-size-matters'
import { View, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import LottieView from 'easy-lottie-react-native'
import animation from '../../assets/animations/lottie/saitamask.json'

const Splash = ({ navigation }) => {
  const duration = 3000;
  const dimension = Dimensions.get('screen').height;

  useEffect(() => {
    setTimeout(() => navigation.navigate('main'), duration + 500)
  }, [])
  return (
    <View style={styles.container}>
      <LottieView
        imageAssetsFolder='lottie/saitamask'
        source={animation}
        style={{ height: dimension }}
        duration={duration}
      />
    </View>
  )
}

export default Splash

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(0,0,0)'
  }
})