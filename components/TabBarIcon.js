import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export const TabBarIcon = ({ name, focused }) => {
  const color = focused ? Colors.tabIconSelected : Colors.tabIconDefault;
  const style = { marginBottom: -3 };
  return <Ionicons name={name}
                   size={26}
                   style={style}
                   color={color}/>;
};
