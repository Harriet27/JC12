import React, {useState} from 'react';
import {View, StyleSheet, Text, Modal, Alert} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';
import {WelcomeIcon} from '../Components';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction, InitError} from '../Redux/Actions';
import Center from '../Support/Helpers/Center';

const LoginScreen = ({navigation: {navigate}}) => {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  return (
    <View style={styles.container}>
      <WelcomeIcon />

      <Modal
        animationType="fade"
        transparent={true}
        visible={auth.error === 404}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <Center>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Password Invalid</Text>
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
        placeholder="Password"
        secureTextEntry={true}
        style={styles.textInput}
        value={password}
        onChangeText={e => setPassword(e)}
        rightIcon={<Icon name="lock" size={30} color="skyblue" />}
      />
      <Button
        title="Login"
        containerStyle={styles.buttonStyle}
        buttonStyle={styles.buttonColor}
        onPress={() => dispatch(loginAction({username, password}))}
        loading={auth.loading}
      />
      <Button
        title="Register"
        containerStyle={styles.buttonStyle}
        buttonStyle={styles.buttonColor}
        onPress={() => navigate('Register')}
        loading={auth.loading}
      />
      {/* {auth.error == 404 ? <Text>Invalid Username or Password</Text> : null} */}
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
    borderRadius: 20,
  },
  buttonColor: {
    backgroundColor: 'skyblue',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    marginVertical: 4,
  },
});

export default LoginScreen;
