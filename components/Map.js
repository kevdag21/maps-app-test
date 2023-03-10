import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import GooglePlacesInput from './Search';

export function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        initialRegion={{
          latitude: 18.141883,
          longitude: -94.472784,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        mapType="standard"
      >
        <Marker
          draggable
          coordinate={{latitude: 18.141883,
          longitude: -94.472784,}}
          title={'Marcador'}
          pinColor = {'red'}
        />
      </MapView>
      <GooglePlacesInput/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  primary: {
    main: '#FF5A5F',
    contrastText: '#ffffff'
  },
  secondary: {
    main: '#006c70',
    contrastText: '#ffffff'   
  },
  dark:{
    main:'#000000',
    contrastText: '#ffffff',
    lightDark: "#353535",
    metalblue:"#3E4A63"
    },
  grayScale:{
    gray100:"#FAFAFA",
    gray200:"#F5F5F5",
    gray300:"#ECECEC",   
  }
});