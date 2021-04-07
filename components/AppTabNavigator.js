import React from "react";
import { Image } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from "../screens/HomeScreen";
import ExchangeScreen from "../screens/ExchangeScreen";

export const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("../assets/home.png")}
          style={{ width: 34, height: 34 }}
        />
      ),
      tabBarLabel: "Home",
    },
  },
  Exchange: {
    screen: ExchangeScreen,
    navigationOptions: {
      tabBarIcon: (
        <Image
          source={require("../assets/exchange.png")}
          style={{ width: 34, height: 34 }}
        />
      ),
      tabBarLabel: "Exchange",
    },
  },
});
