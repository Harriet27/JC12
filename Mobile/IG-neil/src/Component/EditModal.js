import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, View, Image} from 'react-native';
import {Button} from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';
import {useSelector, useDispatch} from 'react-redux';
import {changeDPAction} from '../Redux/Actions/authActions';

const EditModal = ({modalVisible, setModalVisible}) => {
  const dispatch = useDispatch();

  const [postPhoto, setPostPhoto] = useState({});
  const {loading, id} = useSelector(({auth}) => auth);

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
    dispatch(changeDPAction({postPhoto, id}));
    if (!loading) {
      setModalVisible(!modalVisible);
      setPostPhoto(null);
    }
  };

  return (
    <Modal
      animationType="slide"
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
              <Text style={styles.modalText}>Select this pohoto?</Text>
              <Image
                source={{uri: postPhoto ? postPhoto.path : null}}
                style={styles.imageStyle}
              />
              <Button
                title="Confirm"
                onPress={changeDP}
                buttonStyle={styles.buttonStyleConfirm}
                loading={loading}
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
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  imageStyle: {
    height: 400,
    width: 400,
  },
  buttonStyleConfirm: {
    marginVertical: 2,
  },
});

export default EditModal;
