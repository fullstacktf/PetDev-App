import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation";
import { TabBarIcon } from "../../components/TabBarIcon";
import React from "react";
import MessagesScreen from "../../screens/MessagesScreen";

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const MessagesStack = createStackNavigator({
  Messages: MessagesScreen,
}, config);

MessagesStack.navigationOptions = {
  tabBarLabel: 'Messages',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-chatboxes' : 'md-chatboxes'}/>
  ),
};

MessagesStack.path = '';

export default MessagesStack;
