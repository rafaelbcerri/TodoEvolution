import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList
} from 'react-native';
import Realm from 'realm';

const instructions = Platform.select({
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu'
});

interface Props {}
interface State {
  inputText: string,
  realm: any
}

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { inputText: "edita aqui", realm: [] };

    this.handleEnd = this.handleEnd.bind(this);
  }

  componentWillMount() {
    Realm.open({
      schema: [{ name: 'Task', properties: { text: 'string' } }]
    }).then(realm => {
      let tasks = realm.objects('Task');
      this.setState({ realm: tasks });
    });
  }

  handleEnd(event: any) {
    const myText: string = event.nativeEvent.text
    this.setState({
      realm: [...this.state.realm, { text: myText }],
      inputText: 'edita aqui'
    });
    Realm.open({
      schema: [{ name: 'Task', properties: { text: 'string' } }]
    }).then(realm => {
      realm.write(() => {
        realm.create('Task', { text: myText});
      });
    });

  }

  render() {
    const info: string = "oi"
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>A to React Native!</Text>
        <Text style={styles.welcome}>{info}</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text: string) =>
            this.setState({ inputText: text })
          }
          value={this.state.inputText}
          onEndEditing={this.handleEnd}
        />
        <FlatList
          data={this.state.realm}
          renderItem={({ item }) => (
            <Text key={item.text}>{item.text}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
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
  },
  input: {
    width: 100,
    height: 30
  }
});
