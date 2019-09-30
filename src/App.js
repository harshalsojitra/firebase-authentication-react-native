import { registerRootComponent } from 'expo';
import React, {Component} from 'react';
import  {StyleSheet, Text, View } from 'react-native';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import firebase from 'firebase';

export default class App extends Component {
  componentDidMount()
  { 
      const config = {
        apiKey: "AIzaSyDqgHUTR03uXqCh6qCDfCkacnru9QL1gd4",
        authDomain: "one-time-password-8e25d.firebaseapp.com",
        databaseURL: "https://one-time-password-8e25d.firebaseio.com",
        projectId: "one-time-password-8e25d",
        storageBucket: "one-time-password-8e25d.appspot.com",
        messagingSenderId: "444687485262"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
          <SignUpForm /> 
          <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

Expo.registerRootComponent(App);