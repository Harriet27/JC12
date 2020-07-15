import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, View, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Button} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import {ChangeDPAction} from '../Redux/Actions/authActions';

const EditModal = ({modalVisible, setModalVisible}) => {
  const [postPhoto, setPostPhoto] = useState(null);
  const {loading, id} = useSelector(({auth}) => auth);
  const dispatch = useDispatch();

  const handleGallery = async () => {
    try {
      let response = await ImagePicker.openPicker({
        width: 700,
        height: 700,
        cropping: true,
        mediaType: 'photo',
      });
      setPostPhoto(response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCamera = async () => {
    try {
      let response = await ImagePicker.openCamera({
        width: 700,
        height: 700,
        cropping: true,
        mediaType: 'photo',
      });
      setPostPhoto(response);
    } catch (err) {
      console.log(err);
    }
  };

  const changeDP = () => {
    dispatch(ChangeDPAction({postPhoto, id}));
    if (!loading) {
      setModalVisible(!modalVisible);
      setPostPhoto(null);
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {!postPhoto ? (
            <View>
              <Text style={styles.modalText}>Select a Photo</Text>
              <Button
                title="Gallery"
                buttonStyle={styles.buttonStyle}
                onPress={handleGallery}
              />
              <Button
                title="Camera"
                buttonStyle={styles.buttonStyle}
                onPress={handleCamera}
              />
              <Button
                title="Cancel"
                buttonStyle={styles.buttonStyle}
                onPress={() => setModalVisible(!modalVisible)}
              />
            </View>
          ) : (
            <View>
              <Text style={styles.modalText}>Select this photo?</Text>
              <Image
                source={{uri: postPhoto ? postPhoto.path : ''}}
                style={styles.imageStyle}
              />
              <Button
                title="Confirm"
                buttonStyle={styles.buttonStyleConfirm}
                loading={loading}
                onPress={changeDP}
              />
              <Button
                title="Cancel"
                onPress={() => setPostPhoto(null)}
                buttonStyle={styles.buttonStyleConfirm}
                loading={loading}
              />
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
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
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonStyle: {
    marginVertical: 5,
    width: 90,
  },
  imageStyle: {
    height: 300,
    width: 300,
  },
  buttonStyleConfirm: {
    marginVertical: 2,
  },
});

export default EditModal;
