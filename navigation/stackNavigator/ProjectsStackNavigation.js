import { TransitionPresets, createStackNavigator } from 'react-navigation-stack'

import Color from '../../constants/Colors'
import { Platform } from 'react-native'
import ProjectCategory from '../../screen/projects/ProjectCategory'
import Projects from '../../screen/projects/Projects'
import { createAppContainer } from 'react-navigation'

const ProjectsStackNavigator = createStackNavigator(
  {
    Proje_cts: {
      screen: Projects,
    },
    Project_Category: {
      screen: ProjectCategory,
    },
  },
  {
    mode: 'modal',
    defaultNavigationOptions: {
      gestureEnabled: true,
      cardOverlayEnabled: true,
      ...TransitionPresets.ModalPresentationIOS,
      headerTransparent: true,
    },
  }
)
const ProjectsStackNavigation = createAppContainer(ProjectsStackNavigator)
export default ProjectsStackNavigation
