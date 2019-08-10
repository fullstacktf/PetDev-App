import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export const MessagesScreen = () => {
  return <ScrollView style={styles.container}>
    <Text>Messages 1</Text>
    <Text>Messages 2</Text>
    <Text>Messages 3</Text>
  </ScrollView>;
};

MessagesScreen.navigationOptions = {
  title: 'Messages',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default MessagesScreen;
