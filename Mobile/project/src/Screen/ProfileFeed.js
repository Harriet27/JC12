import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {API_URL} from '../Support/API_URL';
import {loadProfileFeed} from '../Redux/Actions/todoActions';
import {FlatList} from 'react-native-gesture-handler';
import Center from '../Support/Helper/Center';

const ProfileFeed = () => {
  const dispatch = useDispatch();

  const {username, displayPicture, id} = useSelector(state => state.auth);
  const {profileDataList, loading} = useSelector(({todo}) => todo);
  console.log(profileDataList);

  useEffect(() => {
    dispatch(loadProfileFeed(id));
  }, [dispatch, id]);

  return (
    <View style={s.container}>
      <View style={s.profileContainer}>
        <Image
          source={{uri: `${API_URL}/${displayPicture}`}}
          style={s.displayPicture}
        />
        <Text style={s.username}>{username}</Text>
        <Button title="Edit Profile" />
      </View>
      <View style={s.feedContainer}>
        {profileDataList.length === 0 ? (
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
