import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';
import {WelcomeIcon} from '../Component';
import {useDispatch, useSelector} from 'react-redux';
import {LoginAction, InitError} from '../Redux/Actions/authActions';
import {Modal} from 'react-native';
import Center from '../Support/Helper/Center';

const LoginScreen = ({navigation: {navigate}}) => {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  console.log(auth);

  return (
    <View style={styles.container}>
      <WelcomeIcon />
      <Modal
        animationType="fade"
        transparent={true}
        visible={auth.error === 404}
        onRequestClose={() => {
          Alert.alert('Modal has been closed');
        }}>
        <Center>
          <View style={styles.modalView}>
            <Text>Password Invalid</Text>
            <Button title="Confirm" onPress={() => dispatch(InitError())} />
          </View>
        </Center>
      </Modal>
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
        onPress={() => dispatch(LoginAction({username, password}))}
        loading={auth.loading}
      />
      <Button
        title="To Register"
        containerStyle={styles.buttonStyle}
        buttonStyle={styles.buttonColor}
        onPress={() => navigate('Register')}
        loading={auth.loading}
      />
      {auth.error === 404 ? <Text>Invalid Username or Password</Text> : null}
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
