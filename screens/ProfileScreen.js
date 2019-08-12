import React, { useState } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const [username, setUsername] = useState('Ralph');
  return (
    <View>
      <Image
        source={require('../assets/images/ralph.gif')}
        style={styles.avatarImage}
      />
      <Text>HOLA Dario como te va la vida me alegro jejeje </Text>
      <Text>Hello {username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10
  }
});

export default ProfileScreen;
