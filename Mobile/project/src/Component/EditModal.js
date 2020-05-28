import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const EditModal = ({modalVisible, setModalVisible}) => {
  const [postPhoto, setPostPhoto] = useState({});

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
          <Text style={styles.modalText}>Select a Photo</Text>
          <TouchableHighlight
            style={{...styles.openButton, backgroundColor: '#2196F3'}}
            onPress={handleGallery}>
            <Text style={styles.textStyle}>Gallery</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{...styles.openButton, backgroundColor: '#2196F3'}}
            onPress={handleCamera}>
            <Text style={styles.textStyle}>Camera</Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{...styles.openButton, backgroundColor: '#2196F3'}}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.textStyle}>Cancel</Text>
          </TouchableHighlight>
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
});

export default EditModal;
