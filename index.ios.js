// import { AppRegistry } from 'react-native'
// import MainApp from './src/MainApp'
//
// AppRegistry.registerComponent('Orange', () => MainApp)

import React from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native'

const CustomFontsIos = () => (
  <View style={styles.container}>
    <Text style={styles.base}>Welcome to React Native!</Text>
    <Text style={[styles.base, styles.italic]}>Welcome to React Native!</Text>
    <Text style={[styles.base, styles.light]}>Welcome to React Native!</Text>
    <Text style={[styles.base, styles.bold]}>Welcome to React Native!</Text>
    <Text style={[styles.base, styles.dancing]}>Welcome to React Native!</Text>
    <Text style={[styles.base, styles.indie]}>Welcome to React Native!</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e74c3c'
  },
  base: {
    color: '#fff',
    fontFamily: 'Vollkorn',
    fontSize: 25,
    textAlign: 'center',
    margin: 5,
    fontWeight: '700'
  }
})

AppRegistry.registerComponent(
  'Orange', () => CustomFontsIos
)
