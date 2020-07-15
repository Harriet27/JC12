/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MainNavigation from './src/Navigation/MainNavigation';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import reducer from './src/Reducer/Reducer';

const store = configureStore({
  reducer,
});

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
