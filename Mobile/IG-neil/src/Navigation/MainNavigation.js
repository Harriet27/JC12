import React, {useEffect} from 'react';
import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import {ActivityIndicator} from 'react-native';
import Center from '../Support/Helper/Center';
import {useSelector, useDispatch} from 'react-redux';
import TabNav from './TabNav';
import AsyncStorage from '@react-native-community/async-storage';
import {keepLogin} from '../Redux/Actions/authActions';

const MainNavigation = () => {
  let [loading, setLoading] = useState(true);

  let username = useSelector(state => state.auth.username);

  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem('token')
      .then(res => {
        console.log(res);
        dispatch(keepLogin(res));
        setLoading(false);
      })
      .catch(err => {
        console.log(err, 'err');
        setLoading(false);
      });
  }, [dispatch]);

  let loadingState = useSelector(state => state.auth.loading);

  if (loading && loadingState && username) {
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
