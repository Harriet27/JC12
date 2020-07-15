import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import {API_URL} from '../Support/API_URL';
import {loadProfileFeed} from '../Redux/Actions/todoActions';
import Center from '../Support/Helper/Center';
import {HeaderIcon} from '../Component';
import EditModal from '../Component/EditModal';

const ProfileFeed = ({navigation}) => {
  const dispatch = useDispatch();

  const {username, displayPicture, id} = useSelector(state => state.auth);
  const {profileDataList, loading} = useSelector(({todo}) => todo);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    dispatch(loadProfileFeed(id));
  }, [dispatch, id]);

  return (
    <View style={s.container}>
      <EditModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <HeaderIcon title="Profile" toggle={navigation} />
      <View style={s.profileContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Avatar
            rounded
            size={110}
            source={{uri: `${API_URL}/${displayPicture}`}}
            showAccessory
            // style={s.displayPicture}
          />
        </TouchableOpacity>
        <Text style={s.username}>{username}</Text>
        <Button
          title="Edit Profile"
          onPress={() => navigation.navigate('EditProfile')}
        />
      </View>
      <View style={s.feedContainer}>
        {loading ? (
          <Center>
            <ActivityIndicator size="large" />
          </Center>
        ) : (
          <FlatList
            refreshing={loading}
            onRefresh={() => dispatch(loadProfileFeed(id))}
            numColumns={3}
            data={profileDataList}
            renderItem={({item}) => (
              <Image
                source={{uri: `${API_URL}/${item.imagePath}`}}
                style={s.feedImage}
              />
            )}
          />
        )}
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 50,
    flex: 1,
  },
  feedContainer: {
    flex: 2,
  },
  displayPicture: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
  },
  username: {
    fontSize: 18,
    marginVertical: 8,
  },
  feedImage: {
    height: 120,
    width: '33%',
    margin: 1,
  },
});

export default ProfileFeed;
