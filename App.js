import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ViewScreen from "./src/screens/ViewScreen";
import React from 'react';
import { Provider } from './src/context/ScoresContext';
import SignedInView from "./src/screens/SignedInView";
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from "./src/screens/CreateScreen";
const navigator = createStackNavigator(
  {
    View: ViewScreen,
    SignedIn: SignedInView,
    Show: ShowScreen,
    Create: CreateScreen
  },
  {
    initialRouteName: "View",
    defaultNavigationOptions: {
      title: "Scores"
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
  <Provider>
    <App />
    </Provider>
  )
}
