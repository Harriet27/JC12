import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import TabNav from './TabNav';
import {ActivityIndicator} from 'react-native';
import Center from '../Support/Helpers/Center';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
// import {AsyncStorage} from 'react-native';
import {KeepLogin} from '../Redux/Actions';

const MainNavigation = () => {
  let [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  let username = useSelector(state => state.auth.username);
  useEffect(() => {
    // AsyncStorage.getItem('token')
    AsyncStorage.getItem('token')
      .then(res => {
        // console.log(res);
        dispatch(KeepLogin(res));
        setLoading(false);
      })
      .catch(err => {
        console.log(err, 'err');
        setLoading(false);
      });
  }, [dispatch]);
  let loadingState = useSelector(state => state.auth.loading);
  if (loading && loadingState && !username) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }
  return (
    <NavigationContainer>
      {username ? <TabNav /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNavigation;
