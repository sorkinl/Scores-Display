import { createAppContainer,createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ViewScreen from "./src/screens/ViewScreen";
import React from 'react';
import { Provider } from './src/context/ScoresContext';
import SignedInView from "./src/screens/SignedInView";
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";
import SigninScreen from "./src/screens/SigninScreen";
import { setNavigator } from './src/navigationRef';


const switchNavigator = createSwitchNavigator(
  {
    loginFlow : createStackNavigator ({
    View: ViewScreen,
    Signin: SigninScreen,
    }),
    signedInFlow: createStackNavigator({
    SignedIn: SignedInView,
    Create: CreateScreen,
    Edit: EditScreen,
    }),
    Show: ShowScreen,

  }
);

const App = createAppContainer(switchNavigator);

export default () => {
  return (
  <Provider>
    <App ref={(navigator) => { setNavigator(navigator) }}/>
    </Provider>
  )
}
