import { TransitionPresets, createStackNavigator } from 'react-navigation-stack'

import Color from '../../constants/Colors'
import { Platform } from 'react-native'
import ProjectCategory from '../../screen/projects/ProjectCategory'
import ProjectDetail from '../../screen/projects/ProjectDetail'
import Projectbookform from '../../screen/projects/Projectbookform'
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
    Project_Detail: {
      screen: ProjectDetail,
    },
    Project_Form: {
      screen: Projectbookform,
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
