import React from 'react';
import { StyleSheet, View, } from 'react-native';
import MapView from 'react-native-maps';

const INITIAL_MAP_INITIAL_REGION = {
  latitude: 28.462664409289054,
  longitude: -16.260967254638672,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

export default function HomeScreen() {
  const [mapInitialRegion, setMapInitialRegion] = React.useState(INITIAL_MAP_INITIAL_REGION);

  return <View style={styles.container}>
    <MapView initialRegion={mapInitialRegion}
             region={mapInitialRegion}
             style={styles.map}/>
  </View>;
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1
  }
});
