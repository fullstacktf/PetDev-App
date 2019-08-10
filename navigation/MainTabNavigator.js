import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import ProfileStack from "./stacks/ProfileStack";
import MessagesStack from "./stacks/MessagesStack";
import HomeStack from "./stacks/HomeStack";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  MessagesStack,
  ProfileStack
});

tabNavigator.path = '';

export default tabNavigator;
