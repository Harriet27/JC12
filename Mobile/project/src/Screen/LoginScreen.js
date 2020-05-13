import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';
import {WelcomeIcon} from '../Component';
import {useDispatch} from 'react-redux';
import {LoginAction} from '../Redux/Actions';

const LoginScreen = ({navigation: {navigate}}) => {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <WelcomeIcon />
      <Input
        placeholder="Username"
        style={styles.textInput}
        value={username}
        onChangeText={e => setUsername(e)}
        rightIcon={<Icon name="account-box" size={30} color="skyblue" />}
      />
      <Input
        secureTextEntry={true}
        placeholder="Password"
        style={styles.textInput}
        value={password}
        onChangeText={e => setPassword(e)}
        rightIcon={<Icon name="lock" size={30} color="skyblue" />}
      />
      <Button
        title="Login"
        containerStyle={styles.buttonStyle}
        buttonStyle={styles.buttonColor}
        onPress={() => dispatch(LoginAction(username, password))}
      />
      <Button
        title="To Register"
        containerStyle={styles.buttonStyle}
        buttonStyle={styles.buttonColor}
        onPress={() => navigate('Register')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  textInput: {
    width: '100%',
    marginVertical: 25,
  },
  buttonStyle: {
    marginVertical: 10,
    borderRadius: 12,
  },
  buttonColor: {
    backgroundColor: 'skyblue',
  },
});

export default LoginScreen;
