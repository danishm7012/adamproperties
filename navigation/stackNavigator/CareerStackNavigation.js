import Career from '../../screen/career/Career'
import Color from '../../constants/Colors'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const CareerStackNavigator = createStackNavigator({
  Sharjah_Properties: {
    screen: Career,
    navigationOptions: {
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor:
          Platform.OS === 'android' ? Color.primaryColor : Color.primaryColor,
      },
      headerTitleStyle: {
        fontFamily: 'open-sans-bold',
        fontWeight: '200',
      },
      headerTintColor: 'white',
    },
  },
})
const CareerStackNavigation = createAppContainer(CareerStackNavigator)
export default CareerStackNavigation
