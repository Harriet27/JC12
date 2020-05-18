import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';
import {WelcomeIcon} from '../Component';
import {useDispatch, useSelector} from 'react-redux';
import {RegisterAction} from '../Redux/Actions/authActions';

const RegisterScreeen = ({navigation: {navigate}}) => {
  let [username, setUsername] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  console.log(auth);

  const handleRegister = () => {
    if (username && email && password && confirmPassword) {
      if (password === confirmPassword) {
        console.log('password');
        dispatch(RegisterAction({username, email, password}));
      } else {
        Alert.alert('Error', 'Invalid Password', [
          {
            text: 'OK',
            onPress: () => console.log('close alert'),
          },
        ]);
      }
    } else {
      Alert.alert('Error', 'Please Fill in all the forms', [
        {
          text: 'OK',
          onPress: () => console.log('close alert'),
        },
      ]);
    }
  };

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
        placeholder="Email"
        style={styles.textInput}
        value={email}
        onChangeText={e => setEmail(e)}
        rightIcon={<Icon name="mail" size={30} color="skyblue" />}
      />
      <Input
        secureTextEntry={true}
        placeholder="Password"
        style={styles.textInput}
        value={password}
        onChangeText={e => setPassword(e)}
        rightIcon={<Icon name="lock" size={30} color="skyblue" />}
      />
      <Input
        secureTextEntry={true}
        placeholder="Confirm Password"
        style={styles.textInput}
        value={confirmPassword}
        onChangeText={e => setConfirmPassword(e)}
        rightIcon={<Icon name="lock" size={30} color="skyblue" />}
      />
      <Button
        title="Register"
        containerStyle={styles.buttonStyle}
        buttonStyle={styles.buttonColor}
        onPress={handleRegister}
        loading={auth.loading}
      />
      <Button
        title="To Login"
        containerStyle={styles.buttonStyle}
        buttonStyle={styles.buttonColor}
        onPress={() => navigate('Login')}
        loading={auth.loading}
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

export default RegisterScreeen;
