import React, {useState} from 'react';
import {Alert} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Center from '../Support/Helper/Center';
import {useDispatch, useSelector} from 'react-redux';
import {ChangePassAction} from '../Redux/Actions/authActions';

const EditProfile = ({navigation}) => {
  const dispatch = useDispatch();

  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirm, setConfirm] = useState('');

  const loading = useSelector(({auth}) => auth.loading);

  const handleEditPassword = () => {
    if (oldPass && newPass && confirm) {
      if (newPass === confirm) {
        navigation.popToTop();
        dispatch(ChangePassAction(oldPass, newPass));
        setOldPass('');
        setNewPass('');
        setConfirm('');
      } else {
        Alert.alert('Error', 'Password Invalid');
      }
    } else {
      Alert.alert('Error', 'Please Fill in All the Forms');
    }
  };

  return (
    <Center>
      <Input
        secureTextEntry={true}
        placeholder="Old Password"
        value={oldPass}
        onChangeText={e => setOldPass(e)}
      />
      <Input
        secureTextEntry={true}
        placeholder="New Password"
        value={newPass}
        onChangeText={e => setNewPass(e)}
      />
      <Input
        secureTextEntry={true}
        placeholder="Confirm New Password"
        value={confirm}
        onChangeText={e => setConfirm(e)}
      />
      <Button title="Confirm" onPress={handleEditPassword} loading={loading} />
    </Center>
  );
};

export default EditProfile;
