import React, {useState} from 'react';
import {View, Image, StyleSheet, TextInput, ScrollView} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {uploadAction} from '../Redux/Actions/todoActions';
import {TabActions} from '@react-navigation/native';
import {HeaderWoIcon} from '../Component';

const PostTab = ({navigation: {dispatch}}) => {
  const dispatchAction = useDispatch();

  const [postPhoto, setPostPhoto] = useState(null);
  const [caption, setCaption] = useState('');

  const id = useSelector(state => state.auth.id);
  const loading = useSelector(state => state.todo.loading);
  const error = useSelector(state => state.todo.error);

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

  const handleUpload = () => {
    dispatchAction(uploadAction({postPhoto, caption, id}));
    if (!error) {
      setPostPhoto({});
      setCaption('');
      dispatch(TabActions.jumpTo('Feed'));
    }
  };

  return (
    <ScrollView style={styles.container}>
      <HeaderWoIcon title="Post" />
      <View style={styles.imageContainer}>
        <Image
          source={{uri: postPhoto ? postPhoto.path : null}}
          style={styles.imageStyle}
          // style={{height: postPhoto ? 400 : 0, width: postPhoto ? 400 : 0}}
        />
        <TextInput
          placeholder="Caption..."
          onChangeText={e => setCaption(e)}
          value={caption}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Open Gallery"
          onPress={handleGallery}
          buttonStyle={styles.buttonStyle}
          loading={loading}
        />
        <Button
          title="Open Camera"
          onPress={handleCamera}
          buttonStyle={styles.buttonStyle}
          loading={loading}
        />
        <Button
          title="Upload"
          onPress={handleUpload}
          buttonStyle={styles.buttonStyle}
          loading={loading}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  imageStyle: {
    height: 400,
    width: 400,
  },
  buttonStyle: {
    marginVertical: 10,
  },
});

export default PostTab;
