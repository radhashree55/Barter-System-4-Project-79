import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { AppTabNavigator } from "./components/AppTabNavigator";
import { createBottomTabNavigator } from "react-navigation-tabs";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  return <AppContainer />;
}

const switchNavigator = createSwitchNavigator({
  LoginScreen: { screen: LoginScreen },
  TabNavigator: { screen: AppTabNavigator },
});

const AppContainer = createAppContainer(switchNavigator);
