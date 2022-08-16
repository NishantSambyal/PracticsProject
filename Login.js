import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resApi: '',
      login: undefined,
      password: undefined,
    };
  }

  fetchApi = () => {
    const log = this.state.login;
    const pass = this.state.password;

    if (log && pass) {
      fetch('https://reactnative.dev/movies.json', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(res => {
          this.setState({resApi: res});
          console.log(res);
        })
        .catch(error => console.log(error));
    } else {
      alert('Please enter email and password');
    }
  };

  onEmailTextChange = emailString => {
    this.setState({login: emailString});
  };

  onPassTextChange = passString => {
    this.setState({password: passString});
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardView}>
          <View style={styles.labelView}>
            <Text style={styles.label}>Email</Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              onChangeText={this.onEmailTextChange}
            />
          </View>
          <View style={styles.labelView}>
            <Text style={styles.label}>Password</Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              onChangeText={this.onPassTextChange}
            />
          </View>

          <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => this.fetchApi()}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <Text style={styles.loginText}>
            {JSON.stringify(this.state.resApi?.title)}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelView: {
    marginBottom: 10,
    width: '70%',
  },
  label: {
    marginLeft: 10,
  },

  inputView: {
    backgroundColor: '#00ff80',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#ffff00',
  },
  cardView: {
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 6,
    marginVertical: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 4,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
