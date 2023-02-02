import { scale } from 'react-native-size-matters'
import LottieView from 'lottie-react-native';
import hand_animation from '../assets/animations/lottie/lf20_szlepvdh.json'
import simple_loader_animation from '../assets/animations/lottie/lf20_3ts9gtgf.json'

export const HandLoader = ({ width = 100, height = 100 }) =>
  <LottieView
    autoPlay
    style={{ width: scale(width), height: scale(height) }}
    source={hand_animation}
  />

export const SimpleLoader = ({ width = 100, height = 100 }) =>
  <LottieView
    autoPlay
    style={{ width: scale(width), height: scale(height) }}
    source={simple_loader_animation}
  />