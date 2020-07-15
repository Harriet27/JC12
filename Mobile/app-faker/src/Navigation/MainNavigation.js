import React from 'react';
import TabNavigation from './TabNavigation';
import {NavigationContainer} from '@react-navigation/native';

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default MainNavigation;
