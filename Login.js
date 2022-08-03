import {Button, Text, View} from 'react-native';
import React, {Component} from 'react';

export default class Login extends Component {
  render() {
    return (
      <View>
        <Button
          title="Navigate to Signup"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
        <Text>Login Screen</Text>
      </View>
    );
  }
}
