import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import MainNavigation from './src/Navigation/MainNavigation';
import {configureStore} from '@reduxjs/toolkit';
// import Thunk from 'redux-thunk';
import reducer from './src/Redux/Reducer';
import OneSignal from 'react-native-onesignal';

const store = configureStore({
  reducer,
});

const App = () => {
  useEffect(() => {
    OneSignal.init('24a4d692-9c95-40a0-a52c-6d293e77c1d0', {
      kOSSettingsKeyAutoPrompt: false,
      kOSSettingsKeyInAppLaunchURL: false,
      kOSSettingsKeyInFocusDisplayOption: 2,
    });
    OneSignal.addEventListener('received', onReceived);
    OneSignal.addEventListener('opened', onOpened);
    OneSignal.addEventListener('ids', onIds);
    return () => {
      OneSignal.removeEventListener('received', onReceived);
      OneSignal.removeEventListener('opened', onOpened);
      OneSignal.removeEventListener('ids', onIds);
    };
  }, []);

  const onReceived = notification => {
    console.log('Notification received: ', notification);
  };

  const onOpened = openResult => {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  };

  const onIds = device => {
    console.log('Device info: ', device);
  };

  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
