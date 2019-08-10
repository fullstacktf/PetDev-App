import { createStackNavigator } from "react-navigation";
import ProfileScreen from "../../screens/ProfileScreen";
import { TabBarIcon } from "../../components/TabBarIcon";
import { Platform } from "react-native";
import React from "react";

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
}, config);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}/>
  ),
};

ProfileStack.path = '';

export default ProfileStack;
