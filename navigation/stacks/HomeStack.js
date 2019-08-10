import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "../../screens/HomeScreen";
import { TabBarIcon } from "../../components/TabBarIcon";
import React from "react";

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator({
  Home: HomeScreen,
}, config);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-map' : 'md-map'}/>
};

HomeStack.path = '';

export default HomeStack;
