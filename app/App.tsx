import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const instructions = Platform.select({
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu'
});

interface Props {}
interface State {}

export default class App extends Component<Props, State> {
  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>A to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center'
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center'
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center'
  }
});
