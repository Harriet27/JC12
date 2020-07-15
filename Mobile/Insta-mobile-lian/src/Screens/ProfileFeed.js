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
import Center from '../Support/Helpers/Center';
import {HeaderIcon} from '../Components';
import EditModal from '../Components/EditModal';

const ProfileFeed = ({navigation}) => {
  const dispatch = useDispatch();
  const {username, displayPicture, id} = useSelector(state => state.auth);
  const {profileDataList, loading} = useSelector(({todo}) => todo);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    dispatch(loadProfileFeed(id));
  }, [dispatch, id]);

  return (
    <View style={styles.container}>
      <EditModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <HeaderIcon title="Profile" toggle={navigation} />
      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Avatar
            size={110}
            rounded
            source={{uri: `${API_URL}/${displayPicture}`}}
            showAccessory
            // style={styles.displayPicture}
          />
        </TouchableOpacity>
        <Text style={styles.username}>{username}</Text>
        <Button
          title="Edit Profile"
          onPress={() => navigation.navigate('EditProfile')}
        />
      </View>
      <View style={styles.feedContainer}>
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
            renderItem={({item}) => {
              return (
                <Image
                  source={{uri: `${API_URL}/${item.imagePath}`}}
                  style={styles.feedImage}
                />
              );
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 30,
    flex: 1,
  },
  feedContainer: {
    flex: 2,
  },
  displayPicture: {
    height: 100,
    width: 100,
    // borderRadius: 100 / 2,
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
