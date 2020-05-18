/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import MainNavigation from './src/Navigation/MainNavigation';
import {createStore, applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import reducer from './src/Redux/Reducer';

const store = createStore(reducer, {}, applyMiddleware(Thunk));

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

export default App;
