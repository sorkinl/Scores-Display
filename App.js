import { createAppContainer,createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ViewScreen from "./src/screens/ViewScreen";
import React from 'react';
import { Provider as ScoresProvider} from './src/context/ScoresContext';
import SignedInView from "./src/screens/SignedInView";
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import SigninScreen from "./src/screens/SigninScreen";
import { setNavigator } from './src/navigationRef';
import {Provider as AuthProvider} from './src/context/AuthContext'
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
const switchNavigator = createSwitchNavigator(
  {
    ResolveAuth: ResolveAuthScreen,
    loginFlow : createStackNavigator ({
    View: ViewScreen,
    Signin: SigninScreen,
    Show: ShowScreen,
    }),
    signedInFlow: createStackNavigator({
    SignedIn: SignedInView,
    Create: CreateScreen,
    Edit: EditScreen,
    }),
    

  }
);

const App = createAppContainer(switchNavigator);

export default () => {
  return (
  <ScoresProvider>
    <AuthProvider>
    <App ref={(navigator) => { setNavigator(navigator) }}/>
    </AuthProvider>
  </ScoresProvider>
  )
}
