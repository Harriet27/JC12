import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Button} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {Header, Body, Title} from 'native-base';
import {uploadAction} from '../Redux/Actions/todoActions';

const PostHeader = () => {
  return (
    <Header>
      <Body>
        <Title>Post</Title>
      </Body>
    </Header>
  );
};

const PostTab = () => {
  const [postPhoto, setPostPhoto] = useState(null);
  const [caption, setCaption] = useState('');

  const id = useSelector(state => state.auth.id);
  const loading = useSelector(state => state.todo.loading);

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
      console.log(postPhoto);
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
      console.log(postPhoto);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <PostHeader />
      <View>
        <Text>Post</Text>
        <Image
          source={{uri: postPhoto ? postPhoto.path : null}}
          style={styles.imageStyle}
        />
        <TextInput
          placeholder="Caption"
          onChangeText={e => setCaption(e)}
          value={caption}
        />
        <View>
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
            onPress={() => dispatch(uploadAction({postPhoto, caption, id}))}
            buttonStyle={styles.buttonStyle}
            loading={loading}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 400,
    width: 400,
  },
  buttonStyle: {
    marginVertical: 10,
  },
});

export default PostTab;
