import React, {useState} from 'react';
import {Alert} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Center from '../Support/Helpers/Center';
import {useDispatch, useSelector} from 'react-redux';
import {ChangePassAction} from '../Redux/Actions';

const EditProfile = ({navigation}) => {
  const [oldPass, setOld] = useState('');
  const [newPass, setNew] = useState('');
  const [confirm, setConfirm] = useState('');
  const loading = useSelector(({auth}) => auth.loading);
  const dispatch = useDispatch();

  const handleEditPassword = () => {
    if (oldPass && newPass && confirm) {
      if (newPass === confirm) {
        navigation.popToTop();
        dispatch(ChangePassAction({oldPass, newPass}));
        setOld('');
        setNew('');
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
        placeholder="Old Password"
        value={oldPass}
        onChangeText={e => setOld(e)}
        secureTextEntry={true}
      />
      <Input
        placeholder="New Password"
        value={newPass}
        onChangeText={e => setNew(e)}
        secureTextEntry={true}
      />
      <Input
        placeholder="Confirm New Password"
        value={confirm}
        onChangeText={e => setConfirm(e)}
        secureTextEntry={true}
      />
      <Button title="Confirm " onPress={handleEditPassword} loading={loading} />
    </Center>
  );
};

export default EditProfile;
